import { NextResponse } from 'next/server'

type LoginBody = { email?: string; password?: string }

// Fallback credentials for when database is unavailable
const FALLBACK_EMAIL = process.env.ADMIN_EMAIL || 'admin@nakelgreen.com'
const FALLBACK_PASSWORD = process.env.ADMIN_PASSWORD || 'nakelgreen2026'

export async function POST(request: Request) {
  try {
    const body: LoginBody = await request.json().catch(() => ({}))
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    // Try database authentication first
    let isValid = false
    try {
      const { verifyStaffCredentials } = await import('@/lib/staff-auth')
      const user = await verifyStaffCredentials(email, password)
      if (user) {
        isValid = true
        const sessionToken = Buffer.from(JSON.stringify(user)).toString('base64')
        const res = NextResponse.json({ ok: true, success: true })
        const secure = process.env.NODE_ENV === 'production'
        res.headers.set('Set-Cookie', `staff_session=${sessionToken}; Path=/; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}; Max-Age=86400`)
        return res
      }
    } catch (dbErr) {
      console.error('Database auth failed, trying fallback:', dbErr)
    }

    // Fallback to environment variables
    if (email === FALLBACK_EMAIL && password === FALLBACK_PASSWORD) {
      isValid = true
      const user = {
        id: 'admin-fallback',
        name: 'Admin',
        email: FALLBACK_EMAIL,
        role: 'admin' as const,
      }
      const sessionToken = Buffer.from(JSON.stringify(user)).toString('base64')
      const res = NextResponse.json({ ok: true, success: true })
      const secure = process.env.NODE_ENV === 'production'
      res.headers.set('Set-Cookie', `staff_session=${sessionToken}; Path=/; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}; Max-Age=86400`)
      return res
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (err: any) {
    console.error('Login error:', err)
    return NextResponse.json({ error: err?.message || 'Internal server error' }, { status: 500 })
  }
}
