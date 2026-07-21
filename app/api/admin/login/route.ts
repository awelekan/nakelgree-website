import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { verifyStaffCredentials } from '@/lib/staff-auth'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const user = await verifyStaffCredentials(payload.email, payload.password)

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password.' },
        { status: 401 },
      )
    }

    const sessionValue = Buffer.from(JSON.stringify({ id: user.id, name: user.name, email: user.email, role: user.role })).toString('base64')
    const cookieStore = await cookies()
    cookieStore.set('staff_session', sessionValue, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Staff login failed', error)
    return NextResponse.json(
      { success: false, message: 'Unable to sign in right now.' },
      { status: 500 },
    )
  }
}
