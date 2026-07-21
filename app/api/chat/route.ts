import { NextResponse } from 'next/server'
import { saveChat } from '@/lib/chat-storage'
import rateLimit from '@/lib/rate-limit'

type ChatMessage = { role: string; content: string }

// Minimal middleware-style auth check
function checkAuth(request: Request) {
  const token = request.headers.get('x-api-key') || request.headers.get('authorization')
  const allowed = process.env.CHAT_API_KEY ? token === `Bearer ${process.env.CHAT_API_KEY}` || token === process.env.CHAT_API_KEY : true
  return allowed
}

async function callOpenAIStream(messages: ChatMessage[], onChunk: (chunk: string) => void) {
  const key = process.env.OPENAI_API_KEY
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'
  if (!key) throw new Error('OPENAI_API_KEY not configured')

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({ model, messages, stream: true }),
  })

  if (!resp.ok || !resp.body) {
    const body = await resp.text()
    throw new Error(`OpenAI error: ${resp.status} ${body}`)
  }

  const reader = resp.body.getReader()
  const decoder = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    const chunk = decoder.decode(value)
    onChunk(chunk)
  }
}

async function callAzureOpenAIStream(messages: ChatMessage[], onChunk: (chunk: string) => void) {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT
  const key = process.env.AZURE_OPENAI_KEY
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2023-05-15'

  if (!endpoint || !key || !deployment) throw new Error('Azure OpenAI not configured')

  const url = `${endpoint.replace(/\/+$/, '')}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': key,
    },
    body: JSON.stringify({ messages, stream: true }),
  })

  if (!resp.ok || !resp.body) {
    const body = await resp.text()
    throw new Error(`Azure OpenAI error: ${resp.status} ${body}`)
  }

  const reader = resp.body.getReader()
  const decoder = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    const chunk = decoder.decode(value)
    onChunk(chunk)
  }
}

function createReadableStreamFromChunks(chunks: string[]) {
  return new Readable({
    read() {
      while (chunks.length > 0) {
        this.push(chunks.shift())
      }
      this.push(null)
    },
  })
}

export async function POST(request: Request) {
  try {
    // Simple rate limit check
    const limited = await rateLimit(request)
    if (!limited.ok) return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })

    if (!checkAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json().catch(() => ({}))
    const messages: ChatMessage[] = body.messages || []

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'No messages provided' }, { status: 400 })
    }

    const chunks: string[] = []

    const onChunk = (chunk: string) => {
      chunks.push(chunk)
    }

    if (process.env.AZURE_OPENAI_ENDPOINT && process.env.AZURE_OPENAI_KEY && process.env.AZURE_OPENAI_DEPLOYMENT) {
      await callAzureOpenAIStream(messages, onChunk)
    } else {
      await callOpenAIStream(messages, onChunk)
    }

    const combined = chunks.join('')

    // Persist chat
    try {
      await saveChat(messages.concat([{ role: 'assistant', content: combined }]))
    } catch (err) {
      console.warn('Failed to save chat', err)
    }

    return NextResponse.json({ message: combined })
  } catch (err: any) {
    console.error('Chat API error', err)
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 })
  }
}
