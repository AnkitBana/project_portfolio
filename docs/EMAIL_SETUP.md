# Email Configuration Guide

This guide will help you set up email functionality for your portfolio's contact form.

## Overview

The contact form uses **Nodemailer** to send emails via SMTP. When someone submits the contact form:
1. You receive a notification email with their message
2. They receive an automatic confirmation email

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification**
3. Follow the steps to enable 2FA

### Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device
4. Enter "Portfolio Contact Form"
5. Click **Generate**
6. Copy the 16-character password (remove spaces)

### Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=aankit.sssingh@gmail.com
```

**Replace:**
- `your-email@gmail.com` with your Gmail address
- `your-16-char-app-password` with the app password from Step 2
- `aankit.sssingh@gmail.com` with the email where you want to receive contact form submissions

## Alternative Email Providers

### SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_FROM=your-verified-sender@domain.com
CONTACT_EMAIL=your-email@domain.com
```

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
SMTP_FROM=your-email@outlook.com
CONTACT_EMAIL=your-email@outlook.com
```

### Custom SMTP Server

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@yourdomain.com
SMTP_PASS=your-password
SMTP_FROM=contact@yourdomain.com
CONTACT_EMAIL=your-email@yourdomain.com
```

## Testing the Contact Form

### Local Testing

1. Make sure your `.env.local` file is configured
2. Restart your development server:
   ```bash
   npm run dev
   ```
3. Navigate to the contact section
4. Fill out and submit the form
5. Check your email for both:
   - Notification email (to CONTACT_EMAIL)
   - Auto-reply (to the sender's email)

### Test with a Real Email

Use your own email address to test:
1. Fill out the contact form with your email
2. Submit the form
3. You should receive an auto-reply confirmation
4. Check your CONTACT_EMAIL inbox for the notification

## Troubleshooting

### "Invalid login" Error

**Gmail:**
- Ensure 2FA is enabled
- Use App Password, not your regular password
- Remove spaces from the app password

**Other providers:**
- Verify SMTP credentials
- Check if "Less secure app access" needs to be enabled

### "Connection timeout" Error

- Check SMTP_HOST and SMTP_PORT
- Verify your firewall isn't blocking SMTP
- Try SMTP_PORT=465 with SMTP_SECURE=true

### Emails Not Arriving

- Check spam/junk folder
- Verify SMTP_FROM is a valid email
- Ensure CONTACT_EMAIL is correct
- Check email provider's sending limits

### "Self-signed certificate" Error

Add this to your API route (not recommended for production):

```typescript
const transporter = nodemailer.createTransport({
  // ... other config
  tls: {
    rejectUnauthorized: false
  }
})
```

## Production Deployment

### Environment Variables

When deploying to production (Vercel, Netlify, etc.):

1. Add all SMTP_* variables to your hosting platform's environment variables
2. Never commit `.env.local` to Git
3. Use different credentials for production if possible

### Vercel

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `CONTACT_EMAIL`

### Security Best Practices

1. **Never expose credentials in code**
2. **Use environment variables only**
3. **Enable rate limiting** (consider adding rate limiting to the API route)
4. **Add CAPTCHA** (optional, for spam prevention)
5. **Rotate passwords regularly**

## Rate Limiting (Optional)

To prevent spam, you can add rate limiting:

```bash
npm install @upstash/ratelimit @upstash/redis
```

Then update your API route to include rate limiting logic.

## Email Templates

The email templates are defined in `src/app/api/contact/route.ts`. You can customize:
- HTML styling
- Email content
- Subject lines
- Sender information

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check server logs for detailed error messages
3. Verify all environment variables are set correctly
4. Test with a simple email client first

## API Endpoint

The contact form API is available at:
- **Local:** `http://localhost:3000/api/contact`
- **Production:** `https://yourdomain.com/api/contact`

**Method:** POST  
**Content-Type:** application/json

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss..."
}
```

**Success Response (200):**
```json
{
  "message": "Email sent successfully"
}
```

**Error Response (400/500):**
```json
{
  "error": "Error message"
}