import { NextResponse } from 'next/server'
import { saveChat } from '@/lib/chat-storage'
import rateLimit from '@/lib/rate-limit'
import { generateAssistantReply } from '@/lib/chat-provider'

type ChatMessage = { role: string; content: string }

// Minimal middleware-style auth check
function checkAuth(request: Request) {
  const token = request.headers.get('x-api-key') || request.headers.get('authorization')
  const allowed = process.env.CHAT_API_KEY ? token === `Bearer ${process.env.CHAT_API_KEY}` || token === process.env.CHAT_API_KEY : true
  return allowed
}

export async function POST(request: Request) {
  try {
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

    const message = await generateAssistantReply(messages)

    try {
      await saveChat(messages.concat([{ role: 'assistant', content: message }]))
    } catch (err) {
      console.warn('Failed to save chat', err)
    }

    return NextResponse.json({ message })
  } catch (err: any) {
    console.error('Chat API error', err)
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 })
  }
}
