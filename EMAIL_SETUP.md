# Email Configuration Guide

This guide helps you set up professional email confirmations for form submissions using Zoho Mail (ZeptoMail).

## Overview

When users submit forms on the Nakelgreen website, they automatically receive a professional confirmation email. This enhances credibility and keeps users informed about their submission status.

## Zoho Mail Setup

### 1. Create a Zoho Mail Account

1. Visit [Zoho Mail](https://mail.zoho.com)
2. Sign up for a business email account
3. Verify your domain (nakelgreen.com.ng or use existing domain)

### 2. Enable SMTP Access

1. Log in to Zoho Mail
2. Go to **Settings** → **Mail Server** → **SMTP**
3. Enable SMTP and note the server details:
   - **Host**: `smtp.zeptomail.com`
   - **Port**: `587` (TLS)
   - **Security**: TLS enabled

### 3. Generate API Key (for EMAIL_HOST_USER)

1. In Zoho Mail, go to **Settings** → **API Keys**
2. Click **Generate Key**
3. Choose **SMTP** as the key type
4. Copy the generated key (this is your `EMAIL_HOST_USER`)

### 4. Set Your Email Password (for EMAIL_HOST_PASSWORD)

1. Either use your Zoho Mail account password, or
2. Create an app-specific password in Zoho Mail settings

## Environment Variables

Add these to your `.env.local` file:

```env
# Email Configuration
EMAIL_HOST=smtp.zeptomail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_USE_SSL=False
EMAIL_HOST_USER=your-zoho-email-api-key
EMAIL_HOST_PASSWORD=your-zoho-smtp-password
COMPANY_EMAIL=info@nakelgreen.com.ng
```

**Never commit `.env.local` to version control** — it contains sensitive credentials.

## How It Works

### Automatic Email Sending

When a form is submitted:

1. Form validation and anti-bot checks pass
2. Submission is saved to PostgreSQL database
3. Confirmation email is sent automatically (async)
4. User receives professional acknowledgment

### Email Features

✓ **Professional Design**: HTML + Text formatting for all email clients
✓ **Personalized**: Includes submitter name and form type
✓ **Submission Tracking**: Includes reference ID and timestamp
✓ **Call to Action**: Encourages user engagement
✓ **Error Handling**: Gracefully handles failures without blocking form submission

### Email Templates

Different email templates are generated based on form type:
- Programs
- Talent Acquisition
- Community Engagement
- Innovation Initiative
- General Inquiry

Each includes relevant context specific to the form type.

## Testing

### Verify Email Configuration

To test if email is properly configured:

```typescript
import { testEmailConnection } from '@/lib/email'

// In your code or API route
const isConnected = await testEmailConnection()
console.log('Email service status:', isConnected)
```

### Send a Test Email

Use Zoho Mail's built-in test feature:
1. Go to Zoho Mail settings
2. Click "Send Test Email"
3. Verify it arrives in your inbox

## Troubleshooting

### "Email service not configured" warning

- Verify `EMAIL_HOST_USER` and `EMAIL_HOST_PASSWORD` are set in `.env.local`
- Restart your development server after changing `.env.local`
- Check that credentials are correct in Zoho Mail settings

### Emails not sending

1. **Check SMTP settings**: Verify host, port, and TLS are correct
2. **Verify credentials**: Test username/password in Zoho Mail
3. **Check firewall**: Ensure port 587 is not blocked
4. **Review error logs**: Check Next.js server logs for email errors
5. **Test connection**: Use `testEmailConnection()` to diagnose

### Emails going to spam

1. Add SPF record for your domain in DNS
2. Add DKIM record (provided by Zoho Mail)
3. Add DMARC record for email authentication
4. Use your domain email address (not a generic one)

## Email Content

### Sender Information

```
From: Nakelgreen <info@nakelgreen.com.ng>
Reply-To: info@nakelgreen.com.ng
```

### Subject Line

Professional and informative:
- "We received your Programs submission – Nakelgreen"
- "We received your Talent Acquisition submission – Nakelgreen"
- etc.

### Email Body Sections

1. **Header**: Company branding
2. **Confirmation**: Receipt acknowledgment
3. **Submission Details**: Form type, timestamp, reference ID
4. **Next Steps**: Timeline and what to expect
5. **Engagement**: Call to action and social links
6. **Support**: Contact information
7. **Footer**: Professional closing with copyright

## Customization

To customize email templates, edit `lib/email.ts`:

- **Company Name**: Change `COMPANY_NAME` constant
- **Email Address**: Change `COMPANY_EMAIL` constant
- **Website**: Change `COMPANY_WEBSITE` constant
- **Response Time**: Update "2-3 business days" text
- **Template Design**: Modify HTML in `getEmailTemplate()` function

## Security Notes

⚠️ **Credentials**: Never share or commit email credentials
⚠️ **Rate Limiting**: Consider adding email rate limits for high-volume submissions
⚠️ **Verification**: Validate email addresses before sending
⚠️ **GDPR**: Ensure compliance with email regulations in your region

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform
   - Vercel: Project Settings → Environment Variables
   - Azure: Application Settings
   - Other platforms: Check their documentation

2. Test email sending in staging first

3. Monitor email delivery:
   - Check Zoho Mail activity logs
   - Review bounce/failure rates
   - Set up alerts for failures

4. Document email configuration for your team

## Resources

- [Zoho Mail Documentation](https://admincenter.zoho.com/docs/mail/)
- [Nodemailer Guide](https://nodemailer.com/)
- [SMTP Best Practices](https://www.mailgun.com/blog/smtp-best-practices/)
