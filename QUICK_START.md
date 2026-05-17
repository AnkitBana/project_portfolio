# ⚡ Quick Start Guide

## 🎯 The Problem You Had

**Old Workflow (Painful):**
```
Edit code
  ↓
git add .
  ↓
git commit
  ↓
git push
  ↓
git clone (on server)
  ↓
docker build
  ↓
docker run
  ↓
Finally see changes! 😫
```

## ✨ New Workflow (Easy!)

**Just run once:**
```bash
docker-compose up
```

**Then:**
```
Edit file → Save → Auto-refresh! 🎉
```

---

## 🚀 Super Simple Setup

### Start Development:
```bash
docker-compose up
```

That's it! Open http://localhost:3000

### Your Workflow:
```
1. Edit files in VS Code
2. Save (Ctrl+S)
3. See changes in browser automatically! ✨
```

### Stop Development:
```bash
Ctrl+C

# Or in another terminal:
docker-compose down
```

---

## 📝 Daily Workflow

### Morning:
```bash
docker-compose up
```

### During the day:
```
Edit → Save → Auto-refresh! ✨
(No git push, no docker build, nothing!)
```

### Evening:
```bash
docker-compose down
```

---

## 🎨 What Auto-Reloads?

✅ React components (`.tsx`, `.jsx`)  
✅ Styles (`.css`, Tailwind)  
✅ TypeScript files (`.ts`)  
✅ JSON data files  
✅ Configuration files  

**Changes appear in 1-2 seconds!**

---

## 🚀 When Ready to Deploy

### Save Your Work:
```bash
git add .
git commit -m "Updated portfolio"
git push
```

### Deploy to Production:
```bash
# Use the production config
docker-compose -f docker-compose.prod.yml up -d --build
```

---

## 🐛 Quick Fixes

### Changes not showing?
```bash
# Hard refresh browser
Ctrl + Shift + R
```

### Port 3000 in use?
```bash
docker-compose down
```

### Start fresh?
```bash
docker-compose down -v
docker-compose up
```

### See logs?
```bash
docker-compose logs -f
```

---

## 📊 File Overview

```
project_portfolio/
├── docker-compose.yml           # 🔥 Development (hot reload) - USE THIS!
├── docker-compose.prod.yml      # 🚀 Production (optimized)
├── docker/Dockerfile            # 📦 Production build
├── dev.bat                      # 🪟 Windows helper script
├── dev.sh                       # 🐧 Mac/Linux helper script
└── QUICK_START.md              # ⚡ This file!
```

---

## 🎯 Remember

### For Development (Daily):
```bash
docker-compose up
# Edit → Save → See changes instantly!
```

### For Production (Deployment):
```bash
docker-compose -f docker-compose.prod.yml up -d --build
# Optimized, fast, production-ready
```

---

## 💡 Pro Tips

### Run in background:
```bash
docker-compose up -d
docker-compose logs -f  # View logs
```

### Install new package:
```bash
docker-compose exec portfolio npm install package-name
```

### Access container shell:
```bash
docker-compose exec portfolio sh
```

### Rebuild if needed:
```bash
docker-compose up --build
```

---

## 🎉 That's It!

**No more:**
- ❌ git push after every change
- ❌ git clone repeatedly
- ❌ docker build every time
- ❌ docker run again and again

**Just:**
```bash
docker-compose up
```

**Then:**
- ✅ Edit
- ✅ Save
- ✅ See changes! 🚀

---

## 🆘 Need Help?

### Container won't start?
```bash
# Check Docker is running
docker info

# Check port 3000
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux
```

### Still having issues?
```bash
# Nuclear option - start completely fresh
docker-compose down -v
docker system prune -a
docker-compose up
```

---

**Made with ❤️ by Bob**

**Your development workflow is now 10x faster!** 🚀