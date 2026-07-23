import { retrieveKnowledgeEntries } from '@/lib/site-knowledge'

type ChatMessage = { role: string; content: string }

type ChatProvider = 'knowledge-base' | 'openai' | 'azure-openai'

const systemPrompt = 'My name is AREMU, an assistant for NakelGreen. I answer concisely and helpfully using the website content as the source of truth.'

function getConfiguredChatProvider(): ChatProvider {
  const configured = (process.env.CHAT_PROVIDER || 'knowledge-base').toLowerCase()

  if (configured === 'openai') return 'openai'
  if (configured === 'azure-openai' || configured === 'azure_openai') return 'azure-openai'
  return 'knowledge-base'
}

function getLatestUserMessage(messages: ChatMessage[]) {
  const latest = [...messages].reverse().find((message) => message.role === 'user')
  return latest?.content?.trim() || ''
}

function buildKnowledgeBaseReply(messages: ChatMessage[]) {
  const input = getLatestUserMessage(messages)
  const matches = retrieveKnowledgeEntries(input, 3)

  if (matches.length === 0) {
    return 'I could not find a confident answer in the NakelGreen site content. Please ask about our programs, innovation hub, community events, or talent support, and I’ll guide you to the right information.'
  }

  const topMatch = matches[0]
  const otherMatches = matches.slice(1)
  const context = matches.map((entry) => `- ${entry.title}: ${entry.summary}`).join('\n')

  return `Based on the NakelGreen site content, the closest match is "${topMatch.title}".\n\n${topMatch.content}\n\nRelated items:\n${context}${otherMatches.length > 0 ? '\n\nIf you want, I can also help you explore the other related areas listed above.' : ''}`
}

async function callOpenAI(messages: ChatMessage[]) {
  const key = process.env.OPENAI_API_KEY
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

  if (!key) throw new Error('OPENAI_API_KEY not configured')

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: systemPrompt }, ...messages],
      temperature: 0.4,
      stream: false,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`OpenAI error: ${response.status} ${body}`)
  }

  const data = await response.json()
  const content = data?.choices?.[0]?.message?.content

  if (typeof content !== 'string' || !content.trim()) {
    throw new Error('OpenAI returned an empty response')
  }

  return content
}

async function callAzureOpenAI(messages: ChatMessage[]) {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT
  const key = process.env.AZURE_OPENAI_KEY
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2023-05-15'

  if (!endpoint || !key || !deployment) throw new Error('Azure OpenAI not configured')

  const response = await fetch(`${endpoint.replace(/\/+$/, '')}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': key,
    },
    body: JSON.stringify({
      messages: [{ role: 'system', content: systemPrompt }, ...messages],
      temperature: 0.4,
      stream: false,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Azure OpenAI error: ${response.status} ${body}`)
  }

  const data = await response.json()
  const content = data?.choices?.[0]?.message?.content

  if (typeof content !== 'string' || !content.trim()) {
    throw new Error('Azure OpenAI returned an empty response')
  }

  return content
}

export async function generateAssistantReply(messages: ChatMessage[]) {
  const provider = getConfiguredChatProvider()

  if (provider === 'azure-openai') {
    return callAzureOpenAI(messages)
  }

  if (provider === 'openai') {
    return callOpenAI(messages)
  }

  return buildKnowledgeBaseReply(messages)
}
