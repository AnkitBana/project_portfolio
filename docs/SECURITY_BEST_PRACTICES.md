# 🔐 Security Best Practices

## Overview
This document outlines security measures implemented in this project and best practices to follow.

---

## 🛡️ Implemented Security Measures

### 1. Git Pre-Commit Hooks
**Location**: `.husky/pre-commit` and `.husky/pre-commit.bat`

Automatically scans commits for:
- `.env` files
- Passwords and API keys
- SMTP credentials
- Secret tokens
- Private keys

**How it works**:
- Runs before every commit
- Blocks commits containing sensitive data
- Provides clear error messages

### 2. Environment Variable Protection
**Files**:
- `.env.local` - Local development (gitignored)
- `.env.example` - Template with placeholders
- `.gitignore` - Excludes all `.env*.local` files

**Rules**:
- ✅ Use `.env.local` for real credentials
- ✅ Use `.env.example` for documentation
- ❌ Never commit `.env.local`
- ❌ Never put real credentials in documentation

### 3. Secrets Ignore File
**Location**: `.secretsignore`

Defines patterns to ignore when scanning for secrets:
- Example files
- Documentation
- Test files
- Placeholder patterns

---

## 📋 Security Checklist

### Before Every Commit
- [ ] No `.env` files in staging
- [ ] No real passwords in code
- [ ] No API keys in documentation
- [ ] Placeholders used in examples
- [ ] Pre-commit hook passes

### Before Deployment
- [ ] Environment variables set in platform
- [ ] HTTPS enabled
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Input validation implemented

### Regular Maintenance
- [ ] Rotate credentials every 90 days
- [ ] Review access logs
- [ ] Update dependencies
- [ ] Scan for vulnerabilities
- [ ] Review Git history

---

## 🔑 Credential Management

### Gmail App Passwords
**Setup**:
1. Enable 2FA on Gmail account
2. Go to: https://myaccount.google.com/apppasswords
3. Create app password for "Portfolio Contact Form"
4. Store in `.env.local` only
5. Never commit to Git

**Rotation**:
- Rotate every 90 days
- Revoke immediately if exposed
- Use unique password per application

### API Keys
**Best Practices**:
- Use environment variables
- Restrict by domain/IP
- Set usage limits
- Monitor usage
- Rotate regularly

---

## 🚨 Incident Response

### If Credentials Are Exposed

1. **Immediate Actions** (within 5 minutes):
   - Revoke exposed credentials
   - Generate new credentials
   - Update `.env.local`
   - Test functionality

2. **Git Cleanup** (within 1 hour):
   - Remove from current files
   - Consider rewriting Git history
   - Force push if necessary
   - Notify team members

3. **Documentation** (within 24 hours):
   - Document incident
   - Update security measures
   - Review prevention steps
   - Train team if needed

**See**: `docs/SECURITY_INCIDENT_RESPONSE.md` for detailed steps

---

## 🔍 Security Scanning

### Manual Scan
```powershell
# Search for potential secrets
git log --all --full-history -S "password" --source --pretty=format:"%H %s"

# Check current files
git grep -i "password\|api.key\|secret"
```

### Automated Tools
- **Husky**: Pre-commit hooks (installed)
- **git-secrets**: AWS secrets scanner (optional)
- **truffleHog**: Deep history scanner (optional)
- **GitGuardian**: Continuous monitoring (optional)

---

## 📝 Code Review Guidelines

### What to Look For
- Hardcoded credentials
- API keys in code
- Database connection strings
- Private keys
- Session secrets
- OAuth tokens

### Red Flags
```javascript
// ❌ BAD
const password = "mypassword123"
const apiKey = "sk_live_abc123xyz"

// ✅ GOOD
const password = process.env.SMTP_PASS
const apiKey = process.env.API_KEY
```

---

## 🌐 Production Security

### Vercel Deployment
**Environment Variables**:
- Set in Vercel dashboard
- Never in code or Git
- Use different values per environment
- Encrypt sensitive values

**Security Headers**:
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

---

## 🔐 HTTPS & SSL

### Requirements
- ✅ HTTPS only in production
- ✅ Valid SSL certificate
- ✅ HSTS enabled
- ✅ Secure cookies
- ✅ CSP headers

### Verification
```powershell
# Check SSL certificate
curl -I https://your-domain.com

# Test security headers
curl -I https://your-domain.com | grep -i "x-frame\|x-content\|strict"
```

---

## 📊 Monitoring & Alerts

### What to Monitor
- Failed login attempts
- Unusual API usage
- Error rates
- Response times
- Security scan results

### Alert Triggers
- Credentials exposed
- Unusual traffic patterns
- Failed deployments
- Security vulnerabilities
- Certificate expiration

---

## 🎓 Training Resources

### Security Fundamentals
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Security Academy](https://portswigger.net/web-security)
- [Security Headers](https://securityheaders.com/)

### Git Security
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Git Secrets Management](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)

### Node.js Security
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [npm Security](https://docs.npmjs.com/about-security-audits)

---

## 📞 Support

### Security Issues
- **Email**: aankit.sssingh@gmail.com
- **GitHub**: Report via Issues (for non-sensitive matters)
- **Emergency**: Revoke credentials first, then contact

### Resources
- `docs/SECURITY_INCIDENT_RESPONSE.md` - Incident handling
- `docs/TROUBLESHOOTING.md` - Common issues
- `.husky/pre-commit` - Hook implementation

---

## ✅ Quick Reference

### Safe Patterns
```bash
# Environment variables
SMTP_PASS=your_password_here
API_KEY=your_api_key_here

# Placeholders
password: "your_password"
apiKey: "your_api_key"
```

### Unsafe Patterns
```bash
# Real credentials
SMTP_PASS=abc123xyz456
API_KEY=sk_live_real_key_here

# Hardcoded values
password: "mypassword123"
apiKey: "real_api_key_value"
```

---

**Remember**: Security is everyone's responsibility!

---

**Last Updated**: 2026-05-18  
**Version**: 1.0  
**Author**: Security Team