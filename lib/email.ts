import nodemailer from 'nodemailer'
import { FormSubmission } from './form-storage'

// Initialize transporter with Zoho Mail (ZeptoMail) SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.zeptomail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_USE_SSL === 'True', // use TLS if false, SSL if true
  auth: {
    user: process.env.EMAIL_HOST_USER || 'emailapikey',
    pass: process.env.EMAIL_HOST_PASSWORD || 'wSsVR61y8xGhCasvzTX/c+9sygkDDwj0EUh0jlv16HepFv7BosdvxUCcBQSvTvQeGWZhFDJBprwumh5ThmcGjoglyFlUCCiF9mqRe1U4J3x17qnvhDzIXmxYlBqBKYoPxgVrnmhgF8oh+g==',
  },
})

const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'm.awe@nakelgreen.com.ng'
const COMPANY_NAME = 'Nakelgreen'
const COMPANY_WEBSITE = 'www.nakelgreen.com.ng'

export interface EmailTemplateData {
  recipientName: string
  recipientEmail: string
  formType: string
  submission: FormSubmission
}

function getEmailTemplate(data: EmailTemplateData): {
  subject: string
  html: string
  text: string
} {
  const { recipientName, formType, submission } = data
  const typeLabels: Record<string, string> = {
    program: 'Programs',
    talent: 'Talent Acquisition',
    community: 'Community Engagement',
    innovation: 'Innovation Initiative',
    general: 'General Inquiry',
  }

  const typeLabel = typeLabels[formType] || formType

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { margin: 0; color: #1e40af; font-size: 24px; }
        .header p { margin: 5px 0 0 0; color: #666; font-size: 14px; }
        .content { background-color: #f9fafb; padding: 30px; border-radius: 8px; margin-bottom: 30px; }
        .content h2 { color: #1e40af; margin-top: 0; }
        .info-box { background-color: #dbeafe; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 4px; }
        .info-box strong { color: #1e40af; }
        .footer { text-align: center; color: #666; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 20px; }
        .divider { height: 1px; background-color: #e5e7eb; margin: 20px 0; }
        a { color: #2563eb; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${COMPANY_NAME}</h1>
            <p>We appreciate your interest</p>
        </div>

        <div class="content">
            <h2>Submission Received ✓</h2>
            
            <p>Dear ${recipientName},</p>
            
            <p>Thank you for submitting your interest in our <strong>${typeLabel}</strong> initiative. We have received your submission and appreciate the time you took to connect with us.</p>
            
            <div class="info-box">
                <strong>Submission Details:</strong><br>
                Form Type: ${typeLabel}<br>
                Submitted: ${new Date(submission.submittedAt).toLocaleString('en-NG', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}<br>
                Reference: ${submission.id}
            </div>

            <h3 style="color: #1e40af; margin-top: 30px;">What Happens Next?</h3>
            <p>Our team will review your submission carefully and get back to you shortly with next steps. We typically respond within 2-3 business days.</p>
            
            <p>In the meantime, feel free to:</p>
            <ul>
                <li>Explore our website: <a href="https://${COMPANY_WEBSITE}">www.nakelgreen.com.ng</a></li>
                <li>Check out our latest initiatives and opportunities</li>
                <li>Connect with us on social media for updates</li>
            </ul>

            <h3 style="color: #1e40af;">Have Questions?</h3>
            <p>If you have any questions or need immediate assistance, please don't hesitate to reach out to us at <a href="mailto:${COMPANY_EMAIL}">${COMPANY_EMAIL}</a></p>
        </div>

        <div class="divider"></div>

        <div class="footer">
            <p><strong>${COMPANY_NAME}</strong></p>
            <p>${COMPANY_WEBSITE} | <a href="mailto:${COMPANY_EMAIL}">${COMPANY_EMAIL}</a></p>
            <p style="margin-top: 15px; color: #999;">This is an automated confirmation email. Please do not reply to this email address.</p>
            <p>&copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `

  const text = `
${COMPANY_NAME} - Submission Received

Dear ${recipientName},

Thank you for submitting your interest in our ${typeLabel} initiative. We have received your submission and appreciate the time you took to connect with us.

SUBMISSION DETAILS:
Form Type: ${typeLabel}
Submitted: ${new Date(submission.submittedAt).toLocaleString('en-NG')}
Reference: ${submission.id}

WHAT HAPPENS NEXT?
Our team will review your submission carefully and get back to you shortly with next steps. We typically respond within 2-3 business days.

In the meantime, feel free to:
- Explore our website: https://${COMPANY_WEBSITE}
- Check out our latest initiatives and opportunities
- Connect with us on social media for updates

HAVE QUESTIONS?
If you have any questions or need immediate assistance, please reach out to us at ${COMPANY_EMAIL}

---
${COMPANY_NAME}
${COMPANY_WEBSITE}
${COMPANY_EMAIL}

This is an automated confirmation email. Please do not reply to this email address.
© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.
  `

  return {
    subject: `We received your ${typeLabel} submission – ${COMPANY_NAME}`,
    html,
    text,
  }
}

export async function sendConfirmationEmail(data: EmailTemplateData): Promise<boolean> {
  try {
    // Verify transporter configuration
    if (!process.env.EMAIL_HOST_USER || !process.env.EMAIL_HOST_PASSWORD) {
      console.warn('Email service not configured. Skipping confirmation email.')
      return false
    }

    const { subject, html, text } = getEmailTemplate(data)

    const mailOptions = {
      from: `${COMPANY_NAME} <${COMPANY_EMAIL}>`,
      to: data.recipientEmail,
      subject,
      html,
      text,
      replyTo: COMPANY_EMAIL,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Confirmation email sent:', info.messageId)
    return true
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
    return false
  }
}

export async function testEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify()
    console.log('Email service connected successfully')
    return true
  } catch (error) {
    console.error('Email service connection failed:', error)
    return false
  }
}
