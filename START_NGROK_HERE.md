# 🚀 Start Ngrok Tunnel

## Quick Start Instructions

### Step 1: Open a New Terminal
- In VS Code: Click **Terminal** → **New Terminal**
- Or use the keyboard shortcut: **Ctrl + Shift + `**
- Or open a separate PowerShell window

### Step 2: Run This Command
```powershell
ngrok http 3000
```

### Step 3: Keep the Terminal Open
**IMPORTANT:** Do NOT close this terminal window. The tunnel needs to stay running.

### Step 4: Copy Your Public URL
You'll see output like this:
```
Session Status                online
Account                       Your Name (Plan: Free)
Region                        United States (us)
Latency                       45ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://1234-56-78-90-12.ngrok-free.app -> http://localhost:3000

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

**Your public URL is the "Forwarding" HTTPS address!**

Example: `https://1234-56-78-90-12.ngrok-free.app`

### Step 5: Test Your Portfolio
1. Copy the HTTPS URL from the Forwarding line
2. Open it in your browser
3. You may see an Ngrok warning page first (click "Visit Site")
4. Your portfolio should load!

### Step 6: Share Your Portfolio
Share the public URL with anyone - they can access your portfolio from anywhere in the world! 🌍

---

## What You Should See

### Terminal Output
```
ngrok                                                                   

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

### Ngrok Dashboard
Open http://127.0.0.1:4040 in your browser to see:
- All HTTP requests
- Request/response details
- Traffic monitoring
- Replay requests

---

## Troubleshooting

### "command not found" or "ngrok is not recognized"
- Restart your terminal
- Check installation: `ngrok version`
- Reinstall if needed: `npm install -g ngrok`

### "Failed to start tunnel"
- Make sure your dev server is running: `npm run dev`
- Check if port 3000 is in use: `netstat -ano | findstr :3000`
- Verify auth token: `ngrok config check`

### "ERR_NGROK_108" or authentication errors
- Reconfigure your auth token: `ngrok config add-authtoken YOUR_TOKEN`
- Get your token from: https://dashboard.ngrok.com/get-started/your-authtoken

### Tunnel keeps disconnecting
- Free plan has 2-hour inactivity timeout
- Just restart the tunnel when needed
- Consider upgrading for longer sessions

---

## Important Notes

### Keep These Running
You need **TWO terminals**:
1. **Terminal 1**: `npm run dev` (development server)
2. **Terminal 2**: `ngrok http 3000` (this tunnel)

### Free Plan Limitations
- ✅ Unlimited bandwidth
- ✅ HTTPS support
- ⚠️ URL changes each restart
- ⚠️ Shows Ngrok warning page
- ⚠️ 2-hour inactivity timeout

### Security
- The URL is public - anyone with it can access your site
- Don't share sensitive data through free tunnels
- Use for demos and testing only

---

## Next Steps

Once your tunnel is running:

1. ✅ **Test the public URL** - Open it in your browser
2. ✅ **Test the contact form** - Make sure emails work
3. ✅ **Share with others** - Send them your public URL
4. ✅ **Monitor traffic** - Check http://127.0.0.1:4040

---

## Stop the Tunnel

To stop Ngrok:
- Press **Ctrl + C** in the terminal
- Or close the terminal window

To restart:
- Run `ngrok http 3000` again
- You'll get a new URL (free plan)

---

**Ready? Open a new terminal and run: `ngrok http 3000`** 🚀