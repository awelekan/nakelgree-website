import { NextResponse } from 'next/server'
import { checkAntiBotProtection } from '@/lib/anti-bot'
import { saveFormSubmission } from '@/lib/form-storage'
import { sendConfirmationEmail, sendAdminNotificationEmail } from '@/lib/email'

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

    // Notify the submitter and the admin
    if (submission.email && submission.name) {
      const emailData = {
        recipientName: submission.name,
        recipientEmail: submission.email,
        formType: submission.formType,
        submission,
      }

      sendConfirmationEmail(emailData).catch((error) => {
        console.error('Failed to send confirmation email for submission', submission.id, error)
      })

      sendAdminNotificationEmail(emailData).catch((error) => {
        console.error('Failed to send admin notification email for submission', submission.id, error)
      })
    }

    return NextResponse.json({ success: true, submission })
  } catch (error) {
    console.error('Form submission failed', error)
    return NextResponse.json(
      { success: false, message: 'Unable to save submission right now.' },
      { status: 500 },
    )
  }
}
