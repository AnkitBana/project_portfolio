# 🔧 Troubleshooting Guide

Complete troubleshooting guide for common issues you might encounter.

---

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Development Server Issues](#development-server-issues)
3. [Build Issues](#build-issues)
4. [Ngrok Issues](#ngrok-issues)
5. [Email/Contact Form Issues](#emailcontact-form-issues)
6. [Vercel Deployment Issues](#vercel-deployment-issues)
7. [Docker Issues](#docker-issues)
8. [Performance Issues](#performance-issues)
9. [Browser Issues](#browser-issues)
10. [Network Issues](#network-issues)

---

## Installation Issues

### npm install fails

**Symptoms:**
- Error messages during `npm install`
- Missing dependencies
- Permission errors

**Solutions:**

1. **Clear npm cache:**
```powershell
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

2. **Check Node.js version:**
```powershell
node --version  # Should be v18 or higher
```

3. **Run as administrator (Windows):**
- Right-click PowerShell
- Select "Run as Administrator"
- Navigate to project and run `npm install`

4. **Check disk space:**
```powershell
# Windows
wmic logicaldisk get size,freespace,caption
```

5. **Network issues:**
```powershell
# Use different registry
npm install --registry=https://registry.npmjs.org/
```

### Module not found errors

**Symptoms:**
- `Cannot find module 'xyz'`
- Import errors

**Solutions:**

1. **Reinstall specific package:**
```powershell
npm install package-name
```

2. **Reinstall all dependencies:**
```powershell
rm -rf node_modules package-lock.json
npm install
```

3. **Check import paths:**
- Verify file exists
- Check case sensitivity
- Use correct relative/absolute paths

---

## Development Server Issues

### Port 3000 already in use

**Symptoms:**
- `Error: listen EADDRINUSE: address already in use :::3000`
- Server won't start

**Solutions:**

1. **Find and kill process (Windows):**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F
```

2. **Use different port:**
```powershell
npm run dev -- -p 3001
```

3. **Restart computer:**
- Sometimes processes don't release ports properly

### Hot reload not working

**Symptoms:**
- Changes don't reflect in browser
- Need to manually refresh

**Solutions:**

1. **Clear Next.js cache:**
```powershell
rm -rf .next
npm run dev
```

2. **Check file watcher limits (WSL/Linux):**
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

3. **Disable browser cache:**
- Open DevTools (F12)
- Network tab → Disable cache

4. **Check antivirus:**
- Antivirus might block file watching
- Add project folder to exclusions

### Server crashes or freezes

**Symptoms:**
- Server stops responding
- Terminal shows errors
- High CPU/memory usage

**Solutions:**

1. **Check for infinite loops:**
- Review recent code changes
- Check useEffect dependencies

2. **Increase memory limit:**
```powershell
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
```

3. **Check for memory leaks:**
- Use Chrome DevTools Memory profiler
- Look for growing heap size

4. **Restart development server:**
```powershell
# Stop server (Ctrl+C)
# Clear cache
rm -rf .next
# Restart
npm run dev
```

---

## Build Issues

### Build fails with TypeScript errors

**Symptoms:**
- `Type error: ...`
- Build stops with type checking errors

**Solutions:**

1. **Run type check:**
```powershell
npm run type-check
```

2. **Fix type errors:**
- Review error messages
- Add proper types
- Use `any` temporarily (not recommended)

3. **Update TypeScript:**
```powershell
npm update typescript
```

4. **Check tsconfig.json:**
- Ensure proper configuration
- Verify include/exclude paths

### Build fails with memory errors

**Symptoms:**
- `JavaScript heap out of memory`
- Build crashes

**Solutions:**

1. **Increase Node.js memory:**
```powershell
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

2. **Close other applications:**
- Free up system memory
- Close unnecessary programs

3. **Build in production mode:**
```powershell
npm run build
```

### Build succeeds but site doesn't work

**Symptoms:**
- Build completes successfully
- Site shows errors or blank page

**Solutions:**

1. **Check browser console:**
- Open DevTools (F12)
- Look for JavaScript errors

2. **Test production build locally:**
```powershell
npm run build
npm start
```

3. **Check environment variables:**
- Ensure all required variables are set
- Verify values are correct

4. **Clear browser cache:**
- Hard refresh (Ctrl+Shift+R)
- Clear all browser data

---

## Ngrok Issues

### "ngrok not recognized"

**Symptoms:**
- `ngrok : The term 'ngrok' is not recognized`
- Command not found

**Solutions:**

1. **Verify installation:**
```powershell
ngrok version
```

2. **Reinstall ngrok:**
```powershell
npm install -g ngrok
```

3. **Check PATH:**
```powershell
# Windows
$env:PATH
```

4. **Restart terminal:**
- Close and reopen PowerShell
- Try command again

5. **Use full path:**
```powershell
C:\Users\YourName\AppData\Roaming\npm\ngrok.cmd http 3000
```

### "Failed to start tunnel"

**Symptoms:**
- Tunnel won't start
- Connection errors

**Solutions:**

1. **Check if dev server is running:**
```powershell
# Should show something on port 3000
netstat -ano | findstr :3000
```

2. **Verify auth token:**
```powershell
ngrok config check
```

3. **Reconfigure auth token:**
```powershell
ngrok config add-authtoken YOUR_TOKEN
```

4. **Check internet connection:**
- Verify you're online
- Try accessing https://ngrok.com

5. **Try different region:**
```powershell
ngrok http 3000 --region=eu
```

### "ERR_NGROK_108" or authentication errors

**Symptoms:**
- Authentication failed
- Invalid auth token

**Solutions:**

1. **Get new auth token:**
- Go to https://dashboard.ngrok.com/get-started/your-authtoken
- Copy new token

2. **Reconfigure:**
```powershell
ngrok config add-authtoken YOUR_NEW_TOKEN
```

3. **Check account status:**
- Verify account is active
- Check for any restrictions

### Tunnel disconnects frequently

**Symptoms:**
- Tunnel stops working
- Connection drops

**Solutions:**

1. **Free plan limitations:**
- 2-hour inactivity timeout
- Restart tunnel when needed

2. **Check internet stability:**
- Use wired connection if possible
- Check for network issues

3. **Keep terminal active:**
- Don't minimize or close terminal
- Keep window visible

4. **Upgrade plan:**
- Consider paid plan for longer sessions
- Get reserved domains

### Can't access Ngrok dashboard

**Symptoms:**
- http://localhost:4040 doesn't work
- Dashboard not loading

**Solutions:**

1. **Verify tunnel is running:**
```powershell
# Should show ngrok process
netstat -ano | findstr :4040
```

2. **Check if port 4040 is in use:**
```powershell
netstat -ano | findstr :4040
```

3. **Use different port:**
```powershell
ngrok http 3000 --web-addr=localhost:4041
# Then access http://localhost:4041
```

4. **Restart ngrok:**
- Stop tunnel (Ctrl+C)
- Start again

---

## Email/Contact Form Issues

### Emails not sending

**Symptoms:**
- Form submits but no email received
- Error messages in console

**Solutions:**

1. **Check SMTP credentials:**
```env
# Verify in .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
```

2. **Verify Gmail app password:**
- Go to https://myaccount.google.com/apppasswords
- Generate new app password
- Update `.env.local`

3. **Check spam folder:**
- Emails might be marked as spam
- Add sender to contacts

4. **Test with different email:**
- Try sending to different address
- Check if provider is blocking

5. **Check server logs:**
```powershell
# In terminal running dev server
# Look for error messages
```

6. **Verify environment variables loaded:**
```javascript
// Add to route.ts temporarily
console.log('SMTP_USER:', process.env.SMTP_USER);
```

### Gmail "Less secure app" error

**Symptoms:**
- Authentication failed
- "Less secure app access" error

**Solutions:**

1. **Use App Password (Required):**
- Enable 2FA on Google account
- Generate app password
- Use app password in `.env.local`

2. **Don't use regular password:**
- Gmail requires app passwords
- Regular passwords won't work

### Emails go to spam

**Symptoms:**
- Emails received but in spam folder
- Low deliverability

**Solutions:**

1. **Use professional email service:**
- SendGrid
- Mailgun
- AWS SES

2. **Configure SPF/DKIM:**
- Add DNS records
- Verify domain

3. **Improve email content:**
- Avoid spam trigger words
- Include unsubscribe link
- Use proper formatting

### Form validation errors

**Symptoms:**
- Form won't submit
- Validation messages appear

**Solutions:**

1. **Check required fields:**
- Name (min 2 characters)
- Email (valid format)
- Message (min 10 characters)

2. **Check email format:**
- Must be valid email address
- No spaces or special characters

3. **Check browser console:**
- Look for JavaScript errors
- Verify validation logic

---

## Vercel Deployment Issues

### Build fails on Vercel

**Symptoms:**
- Deployment fails
- Build errors in logs

**Solutions:**

1. **Check build logs:**
- Go to Vercel dashboard
- View deployment logs
- Look for specific errors

2. **Test build locally:**
```powershell
npm run build
```

3. **Check Node.js version:**
- Vercel uses Node.js 18 by default
- Specify version in `package.json`:
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

4. **Check dependencies:**
- Ensure all dependencies in `package.json`
- No missing packages

### Environment variables not working

**Symptoms:**
- Features work locally but not on Vercel
- Undefined environment variables

**Solutions:**

1. **Add variables in Vercel:**
- Go to Project Settings
- Environment Variables
- Add all variables from `.env.local`

2. **Redeploy after adding variables:**
- Variables only apply to new deployments
- Trigger new deployment

3. **Check variable names:**
- Must match exactly
- Case sensitive
- Include `NEXT_PUBLIC_` prefix for client-side

4. **Verify variable scope:**
- Production, Preview, or Development
- Set for correct environment

### Domain not working

**Symptoms:**
- Custom domain doesn't load
- SSL errors

**Solutions:**

1. **Check DNS configuration:**
- Verify A/CNAME records
- Wait for DNS propagation (up to 48 hours)

2. **Check SSL certificate:**
- Vercel auto-generates SSL
- Wait for certificate issuance

3. **Verify domain ownership:**
- Complete domain verification
- Check email for verification link

4. **Check domain status:**
- Ensure domain is active
- Not expired or suspended

---

## Docker Issues

### Docker build fails

**Symptoms:**
- `docker build` command fails
- Build errors

**Solutions:**

1. **Check Docker is running:**
```powershell
docker --version
docker info
```

2. **Check Dockerfile syntax:**
- Verify all commands
- Check file paths

3. **Clear Docker cache:**
```powershell
docker system prune -a
```

4. **Check disk space:**
```powershell
docker system df
```

### Container won't start

**Symptoms:**
- Container exits immediately
- Error messages in logs

**Solutions:**

1. **Check container logs:**
```powershell
docker logs container-name
```

2. **Check port conflicts:**
```powershell
netstat -ano | findstr :3000
```

3. **Verify environment variables:**
```powershell
docker run --env-file .env.local portfolio:latest
```

4. **Run interactively:**
```powershell
docker run -it portfolio:latest sh
```

---

## Performance Issues

### Slow page load

**Symptoms:**
- Pages take long to load
- Slow navigation

**Solutions:**

1. **Check network:**
- Use browser DevTools Network tab
- Look for slow requests

2. **Optimize images:**
- Use Next.js Image component
- Compress images
- Use appropriate formats (WebP)

3. **Enable caching:**
- Check cache headers
- Use CDN (Vercel provides this)

4. **Reduce bundle size:**
```powershell
npm run build
# Check .next/analyze
```

### High memory usage

**Symptoms:**
- Browser becomes slow
- High RAM usage

**Solutions:**

1. **Check for memory leaks:**
- Use Chrome DevTools Memory profiler
- Look for detached DOM nodes

2. **Optimize React components:**
- Use React.memo
- Implement proper cleanup in useEffect

3. **Reduce animations:**
- Limit Framer Motion animations
- Use CSS animations instead

---

## Browser Issues

### Site doesn't work in specific browser

**Symptoms:**
- Works in Chrome but not Safari
- Browser-specific errors

**Solutions:**

1. **Check browser console:**
- Look for JavaScript errors
- Check for unsupported features

2. **Update browser:**
- Use latest version
- Clear cache and cookies

3. **Check polyfills:**
- Add necessary polyfills
- Use browserslist in package.json

### Styles not loading

**Symptoms:**
- Unstyled content
- Missing CSS

**Solutions:**

1. **Hard refresh:**
```
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

2. **Clear browser cache:**
- Settings → Clear browsing data
- Select cached images and files

3. **Check CSS files:**
- Verify files exist
- Check import statements

---

## Network Issues

### Can't access localhost

**Symptoms:**
- localhost:3000 doesn't work
- Connection refused

**Solutions:**

1. **Check if server is running:**
```powershell
netstat -ano | findstr :3000
```

2. **Try 127.0.0.1:**
```
http://127.0.0.1:3000
```

3. **Check firewall:**
- Allow Node.js through firewall
- Temporarily disable to test

4. **Check hosts file:**
```
C:\Windows\System32\drivers\etc\hosts
```

### Slow internet connection

**Symptoms:**
- Slow loading
- Timeouts

**Solutions:**

1. **Use local development:**
- Don't rely on external resources
- Cache dependencies

2. **Optimize assets:**
- Compress images
- Minify code

3. **Use CDN:**
- Vercel provides CDN
- Use for static assets

---

## Getting Help

If you can't resolve an issue:

1. **Check documentation:**
   - README.md
   - docs/COMPLETE_DEPLOYMENT_GUIDE.md
   - docs/EMAIL_SETUP.md

2. **Search for error messages:**
   - Google the exact error
   - Check Stack Overflow
   - Search GitHub issues

3. **Contact support:**
   - Email: aankit.sssingh@gmail.com
   - GitHub: https://github.com/AnkitBana
   - LinkedIn: https://www.linkedin.com/in/ankitkrgautam/

4. **Provide details:**
   - Error messages
   - Steps to reproduce
   - System information
   - Screenshots

---

**Last Updated**: 2026-05-18
**Author**: Ankit Kumar Gautam
**Contact**: aankit.sssingh@gmail.com