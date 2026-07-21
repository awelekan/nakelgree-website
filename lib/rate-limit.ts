import { LRUCache } from 'lru-cache'

const ONE_MINUTE = 60 * 1000

const tokenCache = new LRUCache<string, { remaining: number; resetAt: number }>({
  max: 5000,
})

export default async function rateLimit(request: Request) {
  // key by API key header or IP fallback
  const apiKey = request.headers.get('x-api-key') || request.headers.get('authorization') || 'anon'
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || ''
  const key = apiKey + '|' + ip

  const now = Date.now()
  let entry = tokenCache.get(key)
  if (!entry || entry.resetAt < now) {
    entry = { remaining: 20, resetAt: now + ONE_MINUTE }
    tokenCache.set(key, entry)
  }

  if (entry.remaining <= 0) {
    return { ok: false, remaining: 0 }
  }

  entry.remaining -= 1
  tokenCache.set(key, entry)
  return { ok: true, remaining: entry.remaining }
}
