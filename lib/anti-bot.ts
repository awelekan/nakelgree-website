const rateLimitBuckets = new Map<string, number[]>()

interface AntiBotResult {
  allowed: boolean
  reason?: string
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for') || ''
  const realIp = request.headers.get('x-real-ip') || ''
  const ip = forwardedFor.split(',')[0]?.trim() || realIp.trim() || 'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'
  return `${ip}:${userAgent}`
}

export function checkAntiBotProtection(payload: Record<string, string | undefined>, request: Request): AntiBotResult {
  const honeypotValues = ['company', 'website', 'url', 'fax']
  const filledHoneypot = honeypotValues.some((field) => String(payload[field] || '').trim().length > 0)

  if (filledHoneypot) {
    return { allowed: false, reason: 'Suspicious submission detected.' }
  }

  const startTime = Number(payload._startTime || '0')
  if (startTime > 0) {
    const elapsedMs = Date.now() - startTime
    if (elapsedMs < 300) {
      return { allowed: false, reason: 'Please wait a moment and try again.' }
    }
  }

  const message = String(payload.message || '').trim()
  if (message.length > 0 && message.length < 3) {
    return { allowed: false, reason: 'Please provide a bit more detail in your message.' }
  }

  const email = String(payload.email || '').trim().toLowerCase()
  const suspiciousEmail = /(mailinator|10minutemail|tempmail|guerrillamail|yopmail)/i
  if (suspiciousEmail.test(email)) {
    return { allowed: false, reason: 'Please use a valid email address.' }
  }

  const key = `${getClientKey(request)}:${payload.formType || 'general'}`
  const now = Date.now()
  const windowMs = 10 * 60 * 1000
  const maxRequests = 5

  const bucket = (rateLimitBuckets.get(key) || []).filter((timestamp) => now - timestamp < windowMs)
  if (bucket.length >= maxRequests) {
    return { allowed: false, reason: 'Too many submissions from this device. Please try again later.' }
  }

  bucket.push(now)
  rateLimitBuckets.set(key, bucket)

  return { allowed: true }
}
