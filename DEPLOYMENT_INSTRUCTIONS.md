# 🚀 Quick Deployment Instructions

Your portfolio is ready to deploy! Follow these simple steps:

## Current Status
✅ Development server running on http://localhost:3000
✅ Ngrok installed
⏳ Waiting for Ngrok authentication

## Step-by-Step Deployment

### 1. Complete Ngrok Signup (In Progress)
You're currently on the Ngrok signup page. Complete these steps:
1. Fill in the signup form
2. Verify your email
3. Login to your dashboard
4. Go to: https://dashboard.ngrok.com/get-started/your-authtoken
5. Copy your auth token

### 2. Configure Ngrok with Your Auth Token
Once you have your token, run this command in a **new terminal**:
```powershell
ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE
```
Replace `YOUR_AUTH_TOKEN_HERE` with your actual token.

### 3. Start the Ngrok Tunnel

**Option A: Using the script (Recommended)**
```powershell
.\scripts\start-ngrok.bat
```

**Option B: Manual command**
```powershell
ngrok http 3000
```

### 4. Access Your Live Portfolio
After starting Ngrok, you'll see output like:
```
Forwarding    https://xxxx-xx-xx-xx-xx.ngrok-free.app -> http://localhost:3000
```

Your portfolio is now live at that URL! 🎉

### 5. Share Your Portfolio
- Copy the `https://xxxx.ngrok-free.app` URL
- Share it with anyone
- They can access your portfolio from anywhere in the world

## Important Notes

### Keep These Running
You need **TWO terminals** running:
1. **Terminal 1**: `npm run dev` (your development server)
2. **Terminal 2**: `ngrok http 3000` (the tunnel)

### Ngrok Dashboard
Access the Ngrok dashboard at: http://localhost:4040
- View all requests
- Inspect traffic
- Debug issues

### Free Plan Limitations
- ✅ Unlimited bandwidth
- ✅ HTTPS support
- ⚠️ URL changes each time you restart Ngrok
- ⚠️ Shows Ngrok warning page before accessing your site
- ⚠️ Session timeout after 2 hours of inactivity

## Troubleshooting

### "Failed to start tunnel"
- Make sure you configured your auth token
- Check if port 3000 is in use
- Verify your dev server is running

### "ngrok not recognized"
- Restart your terminal
- Check if ngrok is installed: `ngrok version`
- Reinstall if needed: `npm install -g ngrok`

### Contact Form Not Working
- Verify your `.env.local` has correct SMTP settings
- Check the Ngrok dashboard for failed requests
- See `docs/EMAIL_SETUP.md` for email configuration

## Alternative Deployment Options

If you want a permanent deployment instead of Ngrok:

### Vercel (Recommended for Production)
```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Build for Production Locally
```powershell
# Build the app
npm run build

# Start production server
npm start
```

## Quick Commands Reference

```powershell
# Check Ngrok version
ngrok version

# Configure auth token
ngrok config add-authtoken YOUR_TOKEN

# Start tunnel
ngrok http 3000

# Start tunnel with custom domain (paid)
ngrok http 3000 --domain=myportfolio.ngrok.app

# View Ngrok config
ngrok config check
```

## Need Help?

- **Ngrok Documentation**: https://ngrok.com/docs
- **Ngrok Dashboard**: https://dashboard.ngrok.com/
- **Email Setup Guide**: `docs/EMAIL_SETUP.md`
- **Full Ngrok Guide**: `docs/NGROK_DEPLOYMENT.md`

---

## What's Next?

Once your Ngrok tunnel is running:
1. ✅ Test your portfolio on the public URL
2. ✅ Test the contact form
3. ✅ Share the URL with friends/clients
4. ✅ Consider permanent deployment (Vercel) for production

**Your portfolio is almost live! Just complete the Ngrok signup and run the tunnel.** 🚀