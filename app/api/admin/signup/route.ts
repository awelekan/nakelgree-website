import { NextResponse } from 'next/server'
import { createStaffUser, findStaffUserByEmail } from '@/lib/staff-auth'

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    if (!payload.name || !payload.email || !payload.password) {
      return NextResponse.json(
        { success: false, message: 'Please complete all fields.' },
        { status: 400 },
      )
    }

    const existing = await findStaffUserByEmail(payload.email)
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'A staff account with that email already exists.' },
        { status: 409 },
      )
    }

    const user = await createStaffUser({
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: payload.role,
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Staff signup failed', error)
    return NextResponse.json(
      { success: false, message: 'Unable to create the staff account right now.' },
      { status: 500 },
    )
  }
}
