# Testing Contact Form - Step by Step Guide

Follow these steps to test your contact form functionality.

## Step 1: Set Up Gmail App Password

### 1.1 Enable 2-Factor Authentication
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Find **2-Step Verification** and click on it
4. Follow the prompts to enable 2FA (you'll need your phone)

### 1.2 Generate App Password
1. After enabling 2FA, go to: https://myaccount.google.com/apppasswords
2. You might need to sign in again
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Type: "Portfolio Contact Form"
6. Click **Generate**
7. **IMPORTANT**: Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
8. Remove the spaces: `abcdefghijklmnop`

## Step 2: Create .env.local File

1. Open your project folder in VS Code or terminal
2. Create a new file called `.env.local` in the root directory
3. Copy and paste this content:

```env
# Email Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-actual-email@gmail.com
SMTP_PASS=abcdefghijklmnop
SMTP_FROM=your-actual-email@gmail.com
CONTACT_EMAIL=aankit.sssingh@gmail.com
```

4. **Replace these values:**
   - `your-actual-email@gmail.com` → Your Gmail address (appears twice)
   - `abcdefghijklmnop` → The 16-character app password from Step 1.2
   - `aankit.sssingh@gmail.com` → Email where you want to receive contact form submissions

5. **Save the file**

## Step 3: Restart Development Server

1. Stop the current dev server (Ctrl+C in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```
3. Wait for it to compile (should say "Ready" or "Compiled")

## Step 4: Test the Contact Form

### 4.1 Open the Website
1. Open your browser
2. Go to: http://localhost:3000
3. Scroll down to the **Contact** section (or click "Contact" in the navigation)

### 4.2 Fill Out the Form
Fill in the form with test data:
- **Name**: Your Name
- **Email**: Your personal email (use a different email than SMTP_USER to see the auto-reply)
- **Subject**: Test Contact Form
- **Message**: This is a test message to verify the contact form is working correctly.

### 4.3 Submit the Form
1. Click the **"Send Message"** button
2. You should see the button change to **"Sending..."**
3. Wait a few seconds

### 4.4 Check for Success
You should see a **green success message**:
> "Thank you for your message! I'll get back to you soon."

If you see a **red error message**, go to Step 5 (Troubleshooting).

## Step 5: Verify Emails

### 5.1 Check Notification Email (Your Inbox)
1. Open the email account you set as `CONTACT_EMAIL`
2. Look for an email with subject: **"Portfolio Contact: Test Contact Form"**
3. It should contain:
   - Sender's name
   - Sender's email
   - Subject
   - Message content

### 5.2 Check Auto-Reply Email (Sender's Inbox)
1. Open the email account you used in the form (the "Email" field)
2. Look for an email with subject: **"Thank you for contacting me!"**
3. It should contain:
   - A thank you message
   - A copy of the message that was sent
   - Your signature

**Note**: Emails might take 1-2 minutes to arrive. Check spam/junk folders if you don't see them.

## Step 6: Troubleshooting

### Error: "Invalid login"
**Problem**: Gmail credentials are incorrect

**Solutions**:
1. Double-check your email address in `.env.local`
2. Make sure you're using the **App Password**, not your regular Gmail password
3. Ensure there are no spaces in the app password
4. Verify 2FA is enabled on your Google account
5. Try generating a new app password

### Error: "Connection timeout"
**Problem**: Can't connect to Gmail's SMTP server

**Solutions**:
1. Check your internet connection
2. Try changing `SMTP_PORT` to `465` and `SMTP_SECURE` to `true`
3. Disable VPN if you're using one
4. Check if your firewall is blocking port 587

### Error: "Failed to send email"
**Problem**: General error

**Solutions**:
1. Check the browser console (F12) for detailed error messages
2. Check the terminal where `npm run dev` is running for server errors
3. Verify all environment variables are set correctly
4. Restart the development server

### Emails Not Arriving
**Problem**: Form submits successfully but no emails

**Solutions**:
1. Check spam/junk folders in both email accounts
2. Wait 2-3 minutes (sometimes there's a delay)
3. Verify `CONTACT_EMAIL` is correct in `.env.local`
4. Check Gmail's "Sent" folder to see if emails were sent
5. Try with a different email provider (see Alternative Providers below)

### Form Shows "Sending..." Forever
**Problem**: Request is hanging

**Solutions**:
1. Check browser console (F12) for errors
2. Check terminal for server errors
3. Verify `.env.local` file exists and is in the root directory
4. Make sure you restarted the dev server after creating `.env.local`

## Alternative Email Providers

### Using Outlook/Hotmail

In `.env.local`:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-outlook-password
SMTP_FROM=your-email@outlook.com
CONTACT_EMAIL=your-email@outlook.com
```

### Using SendGrid (Recommended for Production)

1. Sign up at: https://sendgrid.com/
2. Create an API key
3. In `.env.local`:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_FROM=your-verified-sender@domain.com
CONTACT_EMAIL=your-email@domain.com
```

## Testing Checklist

- [ ] 2FA enabled on Gmail
- [ ] App password generated
- [ ] `.env.local` file created with correct values
- [ ] Development server restarted
- [ ] Form submitted successfully
- [ ] Success message displayed
- [ ] Notification email received
- [ ] Auto-reply email received
- [ ] Both emails look correct

## Next Steps After Testing

Once testing is successful:

1. **For Production Deployment**:
   - Add all environment variables to your hosting platform (Vercel, Netlify, etc.)
   - Test again in production environment

2. **Security**:
   - Never commit `.env.local` to Git
   - Keep your app password secure
   - Consider adding rate limiting for production

3. **Customization**:
   - Update email templates in `src/app/api/contact/route.ts`
   - Customize success/error messages in `src/components/sections/Contact.tsx`

## Need Help?

If you're still having issues:
1. Check the detailed error message in the browser console (F12)
2. Check server logs in the terminal
3. Review the [Email Setup Guide](EMAIL_SETUP.md)
4. Make sure all steps were followed exactly

## Quick Test Command

You can also test the API directly using curl:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "API Test",
    "message": "Testing the API directly"
  }'
```

Expected response:
```json
{"message":"Email sent successfully"}