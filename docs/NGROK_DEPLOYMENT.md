# Ngrok Deployment Guide

This guide will help you deploy your portfolio using Ngrok for quick demos and testing.

## Prerequisites

1. **Ngrok Account**: Sign up at https://ngrok.com/
2. **Node.js**: Already installed ✓
3. **Running Development Server**: Your app should be running on localhost:3000

## Step 1: Install Ngrok

### Option A: Using Chocolatey (Recommended for Windows)
```powershell
choco install ngrok
```

### Option B: Using Scoop
```powershell
scoop install ngrok
```

### Option C: Manual Installation
1. Download from: https://ngrok.com/download
2. Extract the ZIP file
3. Move `ngrok.exe` to a folder in your PATH (e.g., `C:\Windows\System32`)
   OR
4. Add the folder containing `ngrok.exe` to your PATH environment variable

### Option D: Using npm (Global)
```powershell
npm install -g ngrok
```

## Step 2: Get Your Auth Token

1. Sign up/Login at: https://dashboard.ngrok.com/
2. Go to: https://dashboard.ngrok.com/get-started/your-authtoken
3. Copy your auth token

## Step 3: Configure Ngrok

Run this command with your auth token:
```powershell
ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE
```

## Step 4: Start Your Portfolio

Make sure your development server is running:
```powershell
npm run dev
```

Your app should be accessible at http://localhost:3000

## Step 5: Create Ngrok Tunnel

Open a **NEW terminal** (keep the dev server running) and run:

```powershell
ngrok http 3000
```

You'll see output like:
```
Session Status                online
Account                       Your Name (Plan: Free)
Version                       3.x.x
Region                        United States (us)
Latency                       -
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://xxxx-xx-xx-xx-xx.ngrok-free.app -> http://localhost:3000

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

## Step 6: Access Your Live Site

Your portfolio is now live at the **Forwarding** URL:
- **Public URL**: `https://xxxx-xx-xx-xx-xx.ngrok-free.app`
- **Ngrok Dashboard**: http://127.0.0.1:4040

Share the public URL with anyone to show your portfolio!

## Features

### Ngrok Dashboard (http://127.0.0.1:4040)
- View all HTTP requests
- Inspect request/response details
- Replay requests
- Monitor traffic in real-time

### Custom Domain (Paid Plans)
```powershell
ngrok http 3000 --domain=your-custom-domain.ngrok.app
```

### Basic Authentication
```powershell
ngrok http 3000 --basic-auth="username:password"
```

## Important Notes

### Free Plan Limitations
- ✓ HTTPS tunnels
- ✓ Random URLs (changes each restart)
- ✓ Unlimited bandwidth
- ✗ Custom domains (paid feature)
- ✗ Reserved domains (paid feature)
- Session timeout after 2 hours of inactivity

### Security
- Ngrok URLs are public - anyone with the URL can access your site
- Don't share sensitive data through free Ngrok tunnels
- Use authentication for sensitive demos
- Free plan shows Ngrok warning page before accessing your site

### Production Use
- Ngrok is great for demos and testing
- For permanent deployment, use Vercel, Netlify, or a VPS
- Free plan URLs change every time you restart Ngrok

## Troubleshooting

### "ngrok not recognized"
- Make sure ngrok is installed and in your PATH
- Try restarting your terminal after installation
- Use full path: `C:\path\to\ngrok.exe http 3000`

### "Failed to start tunnel"
- Check if port 3000 is in use: `netstat -ano | findstr :3000`
- Make sure your dev server is running
- Verify your auth token is configured

### "Tunnel session failed"
- Check your internet connection
- Verify auth token: `ngrok config check`
- Try a different region: `ngrok http 3000 --region=eu`

### Contact Form Not Working
- Make sure your `.env.local` has correct SMTP settings
- Ngrok URL should be set in `NEXT_PUBLIC_SITE_URL` if needed
- Check Ngrok dashboard for failed requests

## Quick Commands Reference

```powershell
# Start tunnel
ngrok http 3000

# Start with custom subdomain (paid)
ngrok http 3000 --domain=myportfolio.ngrok.app

# Start with authentication
ngrok http 3000 --basic-auth="user:pass"

# Start with specific region
ngrok http 3000 --region=eu

# View configuration
ngrok config check

# View version
ngrok version

# Update ngrok
ngrok update
```

## Alternative: Production Deployment

For permanent hosting, consider:

1. **Vercel** (Recommended)
   - Free tier
   - Automatic deployments
   - Custom domains
   - Best for Next.js

2. **Netlify**
   - Free tier
   - Easy setup
   - Good for static sites

3. **Docker + VPS**
   - Full control
   - Your own server
   - More complex setup

See the main README.md for deployment options.

---

**Need Help?**
- Ngrok Docs: https://ngrok.com/docs
- Ngrok Dashboard: https://dashboard.ngrok.com/
- Support: support@ngrok.com