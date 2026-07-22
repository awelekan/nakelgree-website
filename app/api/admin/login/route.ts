import { NextResponse } from 'next/server'
import { verifyStaffCredentials } from '@/lib/staff-auth'

type LoginBody = { email?: string; password?: string }

export async function POST(request: Request) {
  try {
    const body: LoginBody = await request.json().catch(() => ({}))
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const user = await verifyStaffCredentials(email, password)

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const sessionToken = Buffer.from(JSON.stringify(user)).toString('base64')
    const res = NextResponse.json({ ok: true, success: true })
    const secure = process.env.NODE_ENV === 'production'
    res.headers.set('Set-Cookie', `staff_session=${sessionToken}; Path=/; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}; Max-Age=86400`)
    return res
  } catch (err: any) {
    console.error('Login error:', err)
    return NextResponse.json({ error: err?.message || 'Internal server error' }, { status: 500 })
  }
}
