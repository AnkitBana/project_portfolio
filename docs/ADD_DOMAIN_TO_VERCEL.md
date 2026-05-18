# 🌐 Add www.ankidev.space to Vercel - Final Step

Quick guide to add your custom domain to your deployed Vercel project.

---

## 📋 Prerequisites

✅ You've completed:
- Deployed to Vercel
- Added environment variables
- Project is live on Vercel URL (e.g., portfolio-xyz.vercel.app)

---

## 🚀 Step-by-Step: Add Custom Domain

### Step 1: Go to Vercel Dashboard

1. Open: https://vercel.com/dashboard
2. Find your portfolio project
3. Click on the project name

### Step 2: Navigate to Domains

1. Click **"Settings"** tab (top menu)
2. Click **"Domains"** in the left sidebar
3. You'll see the "Domains" configuration page

### Step 3: Add Your Domain

1. In the "Add Domain" field, enter: `www.ankidev.space`
2. Click **"Add"**

**Vercel will show you DNS configuration needed:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Configure DNS in Namecheap

#### 4.1 Login to Namecheap

1. Go to: https://www.namecheap.com/
2. Login to your account
3. Click **"Domain List"**
4. Find `ankidev.space`
5. Click **"Manage"**

#### 4.2 Go to Advanced DNS

1. Click **"Advanced DNS"** tab
2. You'll see your current DNS records

#### 4.3 Add CNAME Record

**If you see existing CNAME for "www":**
- Click the trash icon to delete it first

**Add new CNAME record:**
1. Click **"Add New Record"**
2. Select **"CNAME Record"** from dropdown
3. Fill in:
   - **Type**: CNAME Record
   - **Host**: `www`
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: Automatic (or 300)
4. Click **"Save Changes"** (green checkmark)

#### 4.4 Add A Records for Root Domain (Optional but Recommended)

**For ankidev.space (without www):**

**First A Record:**
1. Click **"Add New Record"**
2. Select **"A Record"**
3. Fill in:
   - **Type**: A Record
   - **Host**: `@`
   - **Value**: `76.76.21.21`
   - **TTL**: Automatic
4. Click **"Save Changes"**

**Second A Record:**
1. Click **"Add New Record"**
2. Select **"A Record"**
3. Fill in:
   - **Type**: A Record
   - **Host**: `@`
   - **Value**: `76.76.21.98`
   - **TTL**: Automatic
4. Click **"Save Changes"**

### Step 5: Wait for DNS Propagation

**Time needed:** 10-30 minutes (can take up to 48 hours)

**Check status:**
1. Go back to Vercel dashboard
2. Settings → Domains
3. You'll see status next to www.ankidev.space

**Status indicators:**
- 🟡 **Pending**: DNS not propagated yet
- ✅ **Valid Configuration**: DNS configured correctly
- 🔒 **SSL Active**: Certificate issued (automatic)

### Step 6: Verify Domain

Once DNS propagates, Vercel will automatically:
1. ✅ Verify domain ownership
2. 🔒 Issue SSL certificate (free)
3. 🌐 Make your site live

**You'll see:**
```
✅ www.ankidev.space
   Valid Configuration
   SSL Certificate: Active
```

### Step 7: Test Your Live Site

1. Open browser
2. Go to: https://www.ankidev.space
3. Your portfolio should load with HTTPS! 🎉

**Test everything:**
- ✅ All pages load
- ✅ Contact form works
- ✅ All links work
- ✅ HTTPS is active (🔒 in browser)
- ✅ Mobile responsive

---

## 🎯 Optional: Redirect Root Domain

To redirect `ankidev.space` → `www.ankidev.space`:

### In Vercel Dashboard

1. Settings → Domains
2. Click **"Add"** again
3. Enter: `ankidev.space` (without www)
4. Click **"Add"**
5. Select: **"Redirect to www.ankidev.space"**
6. Click **"Add"**

Now both URLs will work:
- `ankidev.space` → redirects to → `www.ankidev.space`
- `www.ankidev.space` → your portfolio

---

## 🔧 Troubleshooting

### Domain Shows "Invalid Configuration"

**Cause:** DNS not configured correctly

**Solution:**
1. Check Namecheap DNS records
2. Verify CNAME: `www` → `cname.vercel-dns.com`
3. Wait 30 minutes for propagation
4. Clear browser cache

### "DNS Not Propagated Yet"

**Cause:** DNS changes take time

**Solution:**
1. Wait 10-30 minutes
2. Check DNS propagation: https://dnschecker.org/
3. Enter: `www.ankidev.space`
4. Should show CNAME pointing to Vercel

### SSL Certificate Not Issued

**Cause:** Domain not verified yet

**Solution:**
1. Ensure DNS is correct
2. Wait for "Valid Configuration" status
3. SSL issues automatically (5-10 minutes)
4. Refresh Vercel dashboard

### Site Shows "404 Not Found"

**Cause:** Domain added but not configured

**Solution:**
1. Check deployment is successful
2. Verify environment variables are set
3. Redeploy: `vercel --prod`
4. Check Vercel logs for errors

### "This site can't be reached"

**Cause:** DNS not propagated or incorrect

**Solution:**
1. Check DNS records in Namecheap
2. Wait longer (up to 48 hours)
3. Try different network/device
4. Clear DNS cache: `ipconfig /flushdns` (Windows)

---

## 📊 Check DNS Propagation

### Online Tools

**DNSChecker:**
1. Go to: https://dnschecker.org/
2. Enter: `www.ankidev.space`
3. Select: CNAME
4. Click "Search"
5. Should show: `cname.vercel-dns.com`

**What's My DNS:**
1. Go to: https://www.whatsmydns.net/
2. Enter: `www.ankidev.space`
3. Select: CNAME
4. Check global propagation

### Command Line

**Windows (PowerShell):**
```powershell
nslookup www.ankidev.space
```

**Should show:**
```
Name:    cname.vercel-dns.com
Address: [Vercel IP]
Aliases: www.ankidev.space
```

---

## ✅ Final Checklist

- [ ] Logged into Vercel dashboard
- [ ] Navigated to Settings → Domains
- [ ] Added www.ankidev.space
- [ ] Noted DNS configuration from Vercel
- [ ] Logged into Namecheap
- [ ] Went to Advanced DNS
- [ ] Added CNAME record (www → cname.vercel-dns.com)
- [ ] Added A records (@ → Vercel IPs)
- [ ] Saved all changes
- [ ] Waited 30 minutes
- [ ] Checked Vercel shows "Valid Configuration"
- [ ] SSL certificate active
- [ ] Tested https://www.ankidev.space
- [ ] All features working
- [ ] Mobile responsive verified

---

## 🎉 Success!

Once complete, your portfolio will be live at:

**🌐 https://www.ankidev.space**

Features:
- ✅ Custom domain
- ✅ Free SSL certificate (HTTPS)
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ 99.99% uptime
- ✅ Unlimited bandwidth

---

## 📞 Need Help?

### Vercel Support
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs/concepts/projects/domains
- Support: https://vercel.com/support

### Namecheap Support
- Dashboard: https://ap.www.namecheap.com/
- DNS Guide: https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/
- Live Chat: 24/7 available

### Your Contact
- Email: aankit.sssingh@gmail.com
- GitHub: [@AnkitBana](https://github.com/AnkitBana)

---

**Your portfolio is almost live! Just add the domain in Vercel and configure DNS.** 🚀

**Time needed:** 10-15 minutes + 30 minutes DNS propagation

---

**Last Updated**: 2026-05-18  
**Author**: Ankit Kumar Gautam  
**Domain**: www.ankidev.space  
**Contact**: aankit.sssingh@gmail.com