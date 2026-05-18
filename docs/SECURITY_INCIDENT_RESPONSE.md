# 🚨 SECURITY INCIDENT - EXPOSED CREDENTIALS

## ⚠️ CRITICAL: Immediate Action Required

**Date**: 2026-05-18  
**Severity**: HIGH  
**Status**: REQUIRES IMMEDIATE ACTION

---

## 🔍 What Happened

Your Gmail app password was accidentally committed to Git repository in the file:
- **File**: `docs/DEPLOY_TO_CUSTOM_DOMAIN.md`
- **Commit**: `5dfee3377aba0a73434730baa92338e7055b45c3`
- **Date**: 2026-05-18 16:14:00
- **Exposed**: SMTP credentials (email and app password)

---

## 🚨 IMMEDIATE ACTIONS (Do This NOW!)

### 1. Revoke Gmail App Password (5 minutes)

**CRITICAL: Do this immediately before anything else!**

1. Go to: https://myaccount.google.com/apppasswords
2. Sign in with: `aankit.sssingh@gmail.com`
3. Find the app password you created for this portfolio
4. Click **Remove** or **Revoke**
5. Confirm removal

**Why this is critical**: Anyone with access to your Git repository can use this password to send emails from your account.

---

### 2. Generate New App Password (5 minutes)

After revoking the old one:

1. Go to: https://myaccount.google.com/apppasswords
2. Click **Create app password**
3. Name it: "Portfolio Contact Form - New"
4. Copy the 16-character password
5. Save it securely (password manager recommended)

---

### 3. Update .env.local (2 minutes)

Replace the old password with the new one:

```bash
# Open .env.local and update:
SMTP_PASS=YOUR_NEW_16_CHAR_PASSWORD
```

**DO NOT** commit this file to Git!

---

### 4. Remove Credentials from Documentation (DONE BELOW)

The credentials will be removed from `docs/DEPLOY_TO_CUSTOM_DOMAIN.md` and replaced with placeholders.

---

## 📋 What We're Fixing

### Files Being Updated:
1. ✅ `docs/DEPLOY_TO_CUSTOM_DOMAIN.md` - Remove real credentials
2. ✅ `docs/SECURITY_INCIDENT_RESPONSE.md` - This file (instructions)
3. ✅ `.gitignore` - Verify .env files are excluded

### Git History:
⚠️ **Important**: The credentials are in Git history. Options:

**Option A: Force Push (Recommended if repo is private/not shared)**
```powershell
# This rewrites history - use with caution!
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch docs/DEPLOY_TO_CUSTOM_DOMAIN.md" \
  --prune-empty --tag-name-filter cat -- --all

git push origin --force --all
```

**Option B: Accept and Move Forward (If repo is already public)**
- Revoke the exposed password (DONE in step 1)
- Update documentation with placeholders
- Commit the fixes
- The old password is now useless

---

## ✅ Verification Checklist

After completing the actions above:

- [ ] Old Gmail app password revoked
- [ ] New Gmail app password generated
- [ ] `.env.local` updated with new password
- [ ] Contact form tested with new credentials
- [ ] Documentation updated (no real credentials)
- [ ] `.gitignore` verified (contains `.env*.local`)
- [ ] Changes committed to Git

---

## 🛡️ Prevention Measures

### Never Commit These Files:
```
.env
.env.local
.env*.local
*.pem
*.key
secrets.json
credentials.json
```

### Always Use Placeholders in Documentation:
```bash
# ❌ WRONG
SMTP_PASS=fcreaepzyvgfovkd

# ✅ CORRECT
SMTP_PASS=your_gmail_app_password_here
```

### Use Environment Variables:
- Development: `.env.local` (gitignored)
- Production: Platform environment variables (Vercel, etc.)
- Documentation: Placeholders only

---

## 📞 If You Need Help

1. **Gmail Security**: https://support.google.com/accounts/answer/185833
2. **Git History Cleanup**: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
3. **Contact**: aankit.sssingh@gmail.com

---

## 📚 Learn More

- [OWASP Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)
- [Git Secrets Tool](https://github.com/awslabs/git-secrets)

---

**Remember**: Security is not a one-time task. Always review before committing!

---

**Created**: 2026-05-18  
**Last Updated**: 2026-05-18  
**Status**: Active Incident - Requires User Action