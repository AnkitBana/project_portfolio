# 🌐 Deploy to www.ankidev.space - Complete Guide

Step-by-step guide to deploy your portfolio to your custom domain using Vercel and Namecheap.

---

## 📋 Prerequisites

- ✅ Domain: www.ankidev.space (Namecheap)
- ✅ GitHub account (recommended)
- ✅ Vercel account (free - we'll create if needed)
- ✅ Portfolio code ready (you have this!)

---

## 🚀 Deployment Steps

### Step 1: Push Code to GitHub (If Not Already Done)

#### 1.1 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name)
3. Description: "My Portfolio Website"
4. Keep it **Public** or **Private** (your choice)
5. **Don't** initialize with README (we have code already)
6. Click "Create repository"

#### 1.2 Push Your Code

Open a **new terminal** in your project and run:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/AnkitBana/portfolio.git

# Push to GitHub
git push -u origin main
```

**Note:** If you get an error about 'main' branch, try:
```powershell
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy to Vercel

#### 2.1 Sign Up for Vercel

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Complete the signup

#### 2.2 Import Your Project

1. On Vercel dashboard, click "Add New..." → "Project"
2. Find your portfolio repository
3. Click "Import"

#### 2.3 Configure Project

**Project Settings:**
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)

**Environment Variables:**
Click "Environment Variables" and add these:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=aankit.sssingh@gmail.com
SMTP_PASS=fcreaepzyvgfovkd
SMTP_FROM=aankit.sssingh@gmail.com
CONTACT_EMAIL=aankit.sssingh@gmail.com
NEXT_PUBLIC_SITE_URL=https://www.ankidev.space
NEXT_PUBLIC_SITE_NAME=Ankit Kumar Gautam Portfolio
NEXT_PUBLIC_CONTACT_EMAIL=aankit.sssingh@gmail.com
```

**Important:** Add each variable one by one:
1. Name: `SMTP_HOST`, Value: `smtp.gmail.com`
2. Name: `SMTP_PORT`, Value: `587`
3. And so on...

#### 2.4 Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://portfolio-xyz.vercel.app`
4. Test this URL to make sure everything works

---

### Step 3: Add Custom Domain (www.ankidev.space)

#### 3.1 In Vercel Dashboard

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Enter: `www.ankidev.space`
4. Click "Add"
5. Vercel will show you DNS records to add

**You'll see something like:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open!** You'll need these values for Namecheap.

---

### Step 4: Configure DNS in Namecheap

#### 4.1 Login to Namecheap

1. Go to https://www.namecheap.com/
2. Login to your account
3. Go to "Domain List"
4. Find `ankidev.space`
5. Click "Manage"

#### 4.2 Add DNS Records

1. Go to "Advanced DNS" tab
2. Click "Add New Record"

**Add CNAME Record for www:**
- **Type**: CNAME Record
- **Host**: www
- **Value**: cname.vercel-dns.com
- **TTL**: Automatic (or 300)
- Click "Save Changes"

**Add A Record for root domain (optional but recommended):**
- **Type**: A Record
- **Host**: @
- **Value**: 76.76.21.21 (Vercel's IP)
- **TTL**: Automatic
- Click "Save Changes"

**Add another A Record:**
- **Type**: A Record
- **Host**: @
- **Value**: 76.76.21.98 (Vercel's backup IP)
- **TTL**: Automatic
- Click "Save Changes"

#### 4.3 Remove Conflicting Records

If you see any existing CNAME or A records for `www` or `@`, delete them first to avoid conflicts.

---

### Step 5: Verify Domain in Vercel

1. Go back to Vercel dashboard
2. Go to Settings → Domains
3. Wait for DNS propagation (can take 5 minutes to 48 hours, usually 10-30 minutes)
4. Vercel will automatically verify and issue SSL certificate

**You'll see:**
- ✅ Valid Configuration
- 🔒 SSL Certificate: Active

---

### Step 6: Test Your Live Site

1. Wait 10-30 minutes for DNS propagation
2. Visit: https://www.ankidev.space
3. Test all features:
   - ✅ All pages load
   - ✅ Contact form works
   - ✅ All links work
   - ✅ HTTPS is active (🔒 in browser)
   - ✅ Mobile responsive

---

## 🎯 Quick Reference

### Your URLs
- **Production**: https://www.ankidev.space
- **Vercel URL**: https://portfolio-xyz.vercel.app (backup)
- **GitHub**: https://github.com/AnkitBana/portfolio

### DNS Records (Namecheap)
```
Type: CNAME, Host: www, Value: cname.vercel-dns.com
Type: A, Host: @, Value: 76.76.21.21
Type: A, Host: @, Value: 76.76.21.98
```

### Environment Variables (Vercel)
All your SMTP settings and site configuration

---

## 🔧 Troubleshooting

### Domain Not Working

**Issue**: www.ankidev.space doesn't load

**Solutions:**
1. **Wait for DNS propagation** (up to 48 hours, usually 30 minutes)
2. **Check DNS records** in Namecheap:
   - CNAME for www pointing to cname.vercel-dns.com
   - A records for @ pointing to Vercel IPs
3. **Clear browser cache**: Ctrl+Shift+R
4. **Check Vercel status**: Settings → Domains should show "Valid Configuration"

### SSL Certificate Not Working

**Issue**: Browser shows "Not Secure"

**Solutions:**
1. **Wait for SSL issuance** (automatic, takes 5-10 minutes)
2. **Verify domain** in Vercel dashboard
3. **Check DNS** is properly configured
4. **Force HTTPS** in Vercel settings

### Contact Form Not Working

**Issue**: Emails not sending

**Solutions:**
1. **Check environment variables** in Vercel
2. **Verify SMTP credentials** are correct
3. **Test with different email** address
4. **Check Vercel logs**: Project → Deployments → View Function Logs

### Build Fails

**Issue**: Deployment fails in Vercel

**Solutions:**
1. **Check build logs** in Vercel
2. **Test locally**: `npm run build`
3. **Verify all dependencies**: `npm install`
4. **Check Node.js version** (should be 18+)

---

## 🔄 Updating Your Site

### Automatic Deployments

Once connected to GitHub, every push automatically deploys:

```powershell
# Make changes to your code
# Then commit and push
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically:
1. Detect the push
2. Build your site
3. Deploy to production
4. Update www.ankidev.space

### Manual Deployment

If not using GitHub:

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 📊 Monitoring

### Vercel Analytics

1. Go to your project in Vercel
2. Click "Analytics" tab
3. View:
   - Page views
   - Unique visitors
   - Performance metrics
   - Web Vitals

### Check Site Status

```powershell
# Check if site is live
curl -I https://www.ankidev.space

# Should return: HTTP/2 200
```

---

## 🎨 Custom Configuration

### Redirect Root Domain

To redirect `ankidev.space` to `www.ankidev.space`:

1. In Vercel: Settings → Domains
2. Add `ankidev.space` (without www)
3. Select "Redirect to www.ankidev.space"
4. Save

### Add More Domains

You can add multiple domains:
- www.ankidev.space (primary)
- ankidev.space (redirect)
- Any other domains you own

---

## 🔐 Security

### SSL Certificate
- ✅ Automatically issued by Vercel
- ✅ Auto-renewed
- ✅ Free forever

### Environment Variables
- ✅ Encrypted in Vercel
- ✅ Never exposed to client
- ✅ Separate for preview/production

### Best Practices
1. Never commit `.env.local` to Git
2. Use different SMTP passwords for dev/prod
3. Enable 2FA on Vercel account
4. Regularly update dependencies

---

## 📞 Need Help?

### Vercel Support
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

### Namecheap Support
- Help Center: https://www.namecheap.com/support/
- Live Chat: Available 24/7
- DNS Guide: https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/

### Your Contact
- Email: aankit.sssingh@gmail.com
- GitHub: [@AnkitBana](https://github.com/AnkitBana)
- LinkedIn: [ankitkrgautam](https://www.linkedin.com/in/ankitkrgautam)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variables added
- [ ] Initial deployment successful
- [ ] Test URL works (vercel.app)
- [ ] DNS records added in Namecheap
- [ ] Custom domain added in Vercel
- [ ] DNS propagated (wait 30 min)
- [ ] SSL certificate active
- [ ] www.ankidev.space loads
- [ ] All pages work
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] All links verified

---

## 🎉 Success!

Once complete, your portfolio will be live at:
**https://www.ankidev.space**

Features:
- ✅ Custom domain
- ✅ Free SSL certificate
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ 99.99% uptime
- ✅ Unlimited bandwidth

---

**Ready to deploy? Follow the steps above!** 🚀

**Last Updated**: 2026-05-18  
**Author**: Ankit Kumar Gautam  
**Domain**: www.ankidev.space  
**Contact**: aankit.sssingh@gmail.com