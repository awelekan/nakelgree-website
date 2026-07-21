import { NextResponse } from 'next/server'

type LoginBody = { username?: string; password?: string }

export async function POST(request: Request) {
  try {
    const body: LoginBody = await request.json().catch(() => ({}))
    const { username, password } = body

    const adminUser = process.env.ADMIN_USER
    const adminPass = process.env.ADMIN_PASSWORD

    if (!adminUser || !adminPass) {
      return NextResponse.json({ error: 'Admin not configured' }, { status: 500 })
    }

    if (username === adminUser && password === adminPass) {
      const token = Buffer.from(`${adminUser}:${adminPass}`).toString('base64')
      const res = NextResponse.json({ ok: true })
      const secure = process.env.NODE_ENV === 'production'
      res.headers.set('Set-Cookie', `admin_auth=${token}; Path=/; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}; Max-Age=86400`)
      return res
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 })
  }
}
