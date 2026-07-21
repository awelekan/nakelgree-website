import { NextResponse } from 'next/server'
import { checkAntiBotProtection } from '@/lib/anti-bot'
import { saveFormSubmission } from '@/lib/form-storage'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const antiBot = checkAntiBotProtection(payload, request)

    if (!antiBot.allowed) {
      return NextResponse.json(
        { success: false, message: antiBot.reason || 'Your submission was blocked.' },
        { status: 400 },
      )
    }

    const submission = await saveFormSubmission(payload)

    return NextResponse.json({ success: true, submission })
  } catch (error) {
    console.error('Form submission failed', error)
    return NextResponse.json(
      { success: false, message: 'Unable to save submission right now.' },
      { status: 500 },
    )
  }
}
