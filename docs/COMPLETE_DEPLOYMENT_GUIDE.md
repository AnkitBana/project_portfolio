# 📘 Complete Deployment Guide

This comprehensive guide covers everything you need to know about deploying your portfolio website.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Deployment Options](#deployment-options)
4. [Ngrok Deployment (Quick Demo)](#ngrok-deployment-quick-demo)
5. [Vercel Deployment (Production)](#vercel-deployment-production)
6. [Docker Deployment](#docker-deployment)
7. [Environment Variables](#environment-variables)
8. [Email Configuration](#email-configuration)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)
11. [Security Considerations](#security-considerations)
12. [Performance Optimization](#performance-optimization)
13. [Monitoring & Analytics](#monitoring--analytics)
14. [Maintenance](#maintenance)

---

## Prerequisites

### Required Software

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version` and `npm --version`
   - Required for running the development server and building the app

2. **Git** (for version control)
   - Download: https://git-scm.com/
   - Verify: `git --version`
   - Required for Vercel deployment and version control

3. **Text Editor** (VS Code recommended)
   - Download: https://code.visualstudio.com/
   - Required for editing code and configuration files

### Optional Software

1. **Docker** (for containerized deployment)
   - Download: https://www.docker.com/
   - Required only if using Docker deployment

2. **Ngrok** (for quick demos)
   - Install: `npm install -g ngrok`
   - Required only for Ngrok deployment

---

## Environment Setup

### 1. Clone/Navigate to Project

```powershell
cd c:/Users/AnkitGautam/Desktop/project_portfolio
```

### 2. Install Dependencies

```powershell
npm install
```

This installs all required packages listed in `package.json`.

### 3. Configure Environment Variables

Copy the example file:
```powershell
copy .env.example .env.local
```

Edit `.env.local` with your actual values:
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Ankit Kumar Gautam Portfolio
NEXT_PUBLIC_CONTACT_EMAIL=aankit.sssingh@gmail.com

# Email Configuration (Contact Form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=aankit.sssingh@gmail.com
SMTP_PASS=your_gmail_app_password_here
SMTP_FROM=aankit.sssingh@gmail.com
CONTACT_EMAIL=aankit.sssingh@gmail.com
```

### 4. Test Development Server

```powershell
npm run dev
```

Open http://localhost:3000 to verify everything works.

---

## Deployment Options

### Comparison Table

| Feature | Ngrok | Vercel | Docker + VPS |
|---------|-------|--------|--------------|
| **Setup Time** | 5 minutes | 10 minutes | 30+ minutes |
| **Cost** | Free | Free tier | $5-20/month |
| **Custom Domain** | Paid only | Free | Yes |
| **Permanent** | No | Yes | Yes |
| **Best For** | Demos | Production | Full control |
| **Difficulty** | Easy | Easy | Advanced |

---

## Ngrok Deployment (Quick Demo)

### When to Use
- Quick demos to clients
- Testing with external webhooks
- Temporary public access
- No server setup needed

### Step-by-Step

#### 1. Install Ngrok
```powershell
npm install -g ngrok
```

#### 2. Get Auth Token
1. Sign up at https://ngrok.com/
2. Go to https://dashboard.ngrok.com/get-started/your-authtoken
3. Copy your auth token

#### 3. Configure Ngrok
```powershell
ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE
```

#### 4. Start Development Server
```powershell
npm run dev
```
Keep this terminal running.

#### 5. Start Ngrok Tunnel
Open a **NEW terminal** and run:
```powershell
ngrok http 3000
```

#### 6. Get Your Public URL
Look for the "Forwarding" line:
```
Forwarding    https://xxxx-xx-xx.ngrok-free.app -> http://localhost:3000
```

That HTTPS URL is your live portfolio!

### Ngrok Features

**Dashboard:** http://localhost:4040
- View all HTTP requests
- Inspect request/response details
- Replay requests
- Monitor traffic

**Free Plan Limitations:**
- ✅ Unlimited bandwidth
- ✅ HTTPS support
- ⚠️ URL changes each restart
- ⚠️ Shows Ngrok warning page
- ⚠️ 2-hour inactivity timeout

### Keeping Ngrok Running

You need **TWO terminals**:
1. Terminal 1: `npm run dev` (development server)
2. Terminal 2: `ngrok http 3000` (tunnel)

Both must stay open for the site to be accessible.

---

## Vercel Deployment (Production)

### When to Use
- Production deployment
- Custom domain needed
- Automatic deployments from Git
- Free hosting with great performance

### Prerequisites
- GitHub account
- Git repository (optional but recommended)

### Step-by-Step

#### 1. Install Vercel CLI
```powershell
npm install -g vercel
```

#### 2. Login to Vercel
```powershell
vercel login
```
Follow the prompts to authenticate.

#### 3. Deploy
```powershell
vercel
```

Answer the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? `portfolio` (or your choice)
- Directory? `.` (current directory)
- Override settings? **N**

#### 4. Production Deployment
```powershell
vercel --prod
```

### Configure Environment Variables

In Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add each variable from `.env.local`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (use your Vercel URL)
   - `NEXT_PUBLIC_SITE_NAME`
   - `NEXT_PUBLIC_CONTACT_EMAIL`

### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### Automatic Deployments

Connect to GitHub:
1. Push code to GitHub
2. In Vercel, connect your repository
3. Every push to main branch auto-deploys

---

## Docker Deployment

### When to Use
- Full control over infrastructure
- Custom server configuration
- Multiple services needed
- VPS or cloud hosting

### Prerequisites
- Docker installed
- VPS or cloud server (DigitalOcean, AWS, etc.)

### Local Docker Build

#### 1. Build Image
```powershell
docker build -f docker/Dockerfile -t portfolio:latest .
```

#### 2. Run Container
```powershell
docker run -p 3000:3000 --env-file .env.local portfolio:latest
```

### Docker Compose

#### Development
```powershell
docker-compose up -d
```

#### Production
```powershell
docker-compose -f docker-compose.prod.yml up -d
```

### Deploy to VPS

#### 1. SSH to Server
```bash
ssh user@your-server-ip
```

#### 2. Install Docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

#### 3. Clone Repository
```bash
git clone https://github.com/AnkitBana/your-repo.git
cd your-repo
```

#### 4. Configure Environment
```bash
nano .env.local
# Add your environment variables
```

#### 5. Build and Run
```bash
docker-compose -f docker-compose.prod.yml up -d
```

#### 6. Setup Nginx (Optional)
```bash
sudo apt install nginx
sudo nano /etc/nginx/sites-available/portfolio
```

Add configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 7. Setup SSL (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Environment Variables

### Required Variables

#### Site Configuration
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Ankit Kumar Gautam Portfolio
NEXT_PUBLIC_CONTACT_EMAIL=aankit.sssingh@gmail.com
```

#### Email Configuration
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=aankit.sssingh@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=aankit.sssingh@gmail.com
CONTACT_EMAIL=aankit.sssingh@gmail.com
```

### Optional Variables

```env
# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Database (future)
DATABASE_URL=mongodb://localhost:27017/portfolio

# Authentication (future)
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=https://your-domain.com
```

### Security Best Practices

1. **Never commit `.env.local`** to Git
2. **Use different values** for development and production
3. **Rotate secrets** regularly
4. **Use environment-specific** configurations
5. **Store secrets securely** (use Vercel's environment variables or AWS Secrets Manager)

---

## Email Configuration

### Gmail Setup (Recommended)

#### 1. Enable 2-Factor Authentication
1. Go to Google Account settings
2. Security → 2-Step Verification
3. Enable it

#### 2. Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer"
3. Click "Generate"
4. Copy the 16-character password

#### 3. Update .env.local
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=aankit.sssingh@gmail.com
SMTP_PASS=your_16_char_app_password
SMTP_FROM=aankit.sssingh@gmail.com
CONTACT_EMAIL=aankit.sssingh@gmail.com
```

### Alternative Email Providers

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your_mailgun_username
SMTP_PASS=your_mailgun_password
```

#### AWS SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your_ses_username
SMTP_PASS=your_ses_password
```

### Testing Email

See `docs/TESTING_CONTACT_FORM.md` for detailed testing instructions.

---

## Testing

### Local Testing

#### 1. Development Server
```powershell
npm run dev
```
Test at http://localhost:3000

#### 2. Production Build
```powershell
npm run build
npm start
```
Test at http://localhost:3000

### Contact Form Testing

1. Fill out the contact form
2. Check for success message
3. Verify email received at `CONTACT_EMAIL`
4. Check sender receives auto-reply
5. Inspect Ngrok dashboard for request details

### Cross-Browser Testing

Test on:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Testing

Test on different screen sizes:
- Mobile (320px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)
- Large screens (1920px+)

### Performance Testing

Use these tools:
- **Lighthouse** (Chrome DevTools)
- **PageSpeed Insights** (https://pagespeed.web.dev/)
- **GTmetrix** (https://gtmetrix.com/)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## Troubleshooting

### Common Issues

#### Port Already in Use
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

#### Module Not Found
```powershell
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```powershell
# Type check
npm run type-check

# Lint
npm run lint

# Clear Next.js cache
rm -rf .next
npm run build
```

#### Email Not Sending
1. Check SMTP credentials in `.env.local`
2. Verify Gmail app password is correct
3. Check spam folder
4. Review server logs
5. Test with different email provider

#### Ngrok Issues

**"ngrok not recognized"**
- Restart terminal
- Check installation: `ngrok version`
- Reinstall: `npm install -g ngrok`

**"Failed to start tunnel"**
- Verify auth token: `ngrok config check`
- Check if port 3000 is in use
- Ensure dev server is running

**"ERR_NGROK_108"**
- Reconfigure auth token: `ngrok config add-authtoken YOUR_TOKEN`

#### Vercel Deployment Issues

**Build fails**
- Check build logs in Vercel dashboard
- Verify all dependencies in `package.json`
- Test build locally: `npm run build`

**Environment variables not working**
- Ensure variables are set in Vercel dashboard
- Redeploy after adding variables
- Check variable names match exactly

---

## Security Considerations

### Best Practices

1. **Environment Variables**
   - Never commit `.env.local` to Git
   - Use different secrets for dev/prod
   - Rotate secrets regularly

2. **HTTPS**
   - Always use HTTPS in production
   - Ngrok provides HTTPS automatically
   - Vercel provides free SSL

3. **Rate Limiting**
   - Implement rate limiting for contact form
   - Use Vercel's built-in protection
   - Consider adding CAPTCHA

4. **Input Validation**
   - Server-side validation implemented ✓
   - Client-side validation implemented ✓
   - Sanitize all user inputs ✓

5. **Headers**
   - Security headers configured in `next.config.js`
   - CSP (Content Security Policy) recommended
   - CORS properly configured

### Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Input validation implemented
- [ ] Rate limiting configured
- [ ] Security headers set
- [ ] Dependencies updated
- [ ] No sensitive data in code
- [ ] Error messages don't leak info
- [ ] CORS properly configured
- [ ] Authentication (if needed)

---

## Performance Optimization

### Already Implemented

1. **Next.js Optimizations**
   - Image optimization
   - Code splitting
   - Static generation
   - Compression enabled

2. **Tailwind CSS**
   - Purged unused styles
   - Minified in production
   - JIT mode enabled

3. **React Optimizations**
   - Lazy loading components
   - Memoization where needed
   - Efficient re-renders

### Additional Optimizations

#### 1. Image Optimization
```jsx
import Image from 'next/image'

<Image
  src="/images/profile.jpg"
  alt="Profile"
  width={500}
  height={500}
  priority
/>
```

#### 2. Font Optimization
```jsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

#### 3. Caching
```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

## Monitoring & Analytics

### Google Analytics

1. Get tracking ID from https://analytics.google.com/
2. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Add to `src/app/layout.tsx`:
```jsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Vercel Analytics

Automatically enabled on Vercel:
- Real-time analytics
- Web Vitals monitoring
- Audience insights

### Error Monitoring

Consider adding:
- **Sentry** for error tracking
- **LogRocket** for session replay
- **Datadog** for comprehensive monitoring

---

## Maintenance

### Regular Tasks

#### Daily
- Monitor error logs
- Check email delivery
- Review analytics

#### Weekly
- Update dependencies: `npm update`
- Check security alerts: `npm audit`
- Review performance metrics
- Backup data

#### Monthly
- Update Node.js version
- Review and optimize images
- Check broken links
- Update content
- Security audit

### Updating Dependencies

```powershell
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update package-name

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup Strategy

1. **Code**: Git repository (GitHub)
2. **Environment**: Document all variables
3. **Content**: Export JSON data files
4. **Database**: Regular backups (when implemented)

---

## Quick Reference

### Common Commands

```powershell
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run linter
npm run type-check      # Type check

# Ngrok
ngrok http 3000         # Start tunnel
ngrok config check      # Verify config

# Vercel
vercel                  # Deploy preview
vercel --prod           # Deploy production
vercel logs             # View logs

# Docker
docker-compose up -d    # Start containers
docker-compose down     # Stop containers
docker-compose logs -f  # View logs
```

### Important URLs

- **Local Dev**: http://localhost:3000
- **Ngrok Dashboard**: http://localhost:4040
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/AnkitBana
- **LinkedIn**: https://www.linkedin.com/in/ankitkrgautam

### Support

For help:
- **Email**: aankit.sssingh@gmail.com
- **GitHub Issues**: Open an issue in your repository
- **Documentation**: Check all docs in `/docs` folder

---

## Conclusion

This guide covers everything needed to deploy and maintain your portfolio. Choose the deployment method that best fits your needs:

- **Ngrok**: Quick demos and testing
- **Vercel**: Production deployment (recommended)
- **Docker**: Full control and custom infrastructure

For most users, **Vercel** is the best choice for production deployment.

---

**Last Updated**: 2026-05-18
**Author**: Ankit Kumar Gautam
**Contact**: aankit.sssingh@gmail.com