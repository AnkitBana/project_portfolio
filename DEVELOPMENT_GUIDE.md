# 🚀 Development Guide - Hot Reload with Docker

## 🎯 Problem Solved

**Before:** Edit → git push → git clone → docker build → docker run (😫 Too much work!)

**Now:** Edit → Save → Auto-refresh! (✨ Magic!)

---

## 🔥 Quick Start - Development Mode

### Option 1: Docker Compose (Recommended)

```bash
# Start development server with hot reload
docker-compose -f docker-compose.dev.yml up

# Or run in background
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop
docker-compose -f docker-compose.dev.yml down
```

**That's it!** Now:
1. Edit any file in VS Code
2. Save (Ctrl+S)
3. Browser auto-refreshes! 🎉

### Option 2: Manual Docker Run

```bash
docker run -it --rm \
  -p 3000:3000 \
  -v "$(pwd):/app" \
  -v /app/node_modules \
  -w /app \
  -e WATCHPACK_POLLING=true \
  -e CHOKIDAR_USEPOLLING=true \
  node:20-alpine sh -c "npm install && npm run dev"
```

### Option 3: Without Docker (Fastest for Development)

```bash
npm install
npm run dev
```

---

## 📁 File Structure

```
project_portfolio/
├── docker-compose.yml          # Production deployment
├── docker-compose.dev.yml      # Development with hot reload ⭐
├── docker/
│   ├── Dockerfile             # Production build
│   └── nginx.conf             # Nginx config
└── src/                       # Your code (auto-reloads!)
```

---

## 🔄 Development Workflow

### Daily Development

```bash
# 1. Start dev server (first time or after pulling changes)
docker-compose -f docker-compose.dev.yml up

# 2. Open browser
http://localhost:3000

# 3. Edit files in VS Code
# Changes appear automatically! ✨

# 4. When done for the day
docker-compose -f docker-compose.dev.yml down
```

### Making Changes

```
Edit file in VS Code
    ↓
Save (Ctrl+S)
    ↓
Next.js detects change
    ↓
Rebuilds automatically
    ↓
Browser refreshes
    ↓
See your changes! 🎉
```

**No need to:**
- ❌ git push
- ❌ git clone
- ❌ docker build
- ❌ docker run
- ❌ Restart anything

---

## 🎨 What Gets Hot Reloaded?

✅ **Auto-reloads:**
- React components (`.tsx`, `.jsx`)
- Styles (`.css`, Tailwind)
- TypeScript files (`.ts`)
- JSON data files
- Configuration files

✅ **Instant feedback:**
- See changes in 1-2 seconds
- No manual refresh needed
- Preserves component state (when possible)

---

## 🐛 Troubleshooting

### Changes not appearing?

**Solution 1:** Hard refresh browser
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

**Solution 2:** Restart dev server
```bash
docker-compose -f docker-compose.dev.yml restart
```

**Solution 3:** Clear everything
```bash
docker-compose -f docker-compose.dev.yml down -v
docker-compose -f docker-compose.dev.yml up
```

### Port 3000 already in use?

```bash
# Find what's using port 3000
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux

# Kill the process or change port
docker-compose -f docker-compose.dev.yml down
```

### Slow on Windows?

Add to `.env.local`:
```env
WATCHPACK_POLLING=true
CHOKIDAR_USEPOLLING=true
```

---

## 🚀 Production Deployment

### When you're ready to deploy:

```bash
# 1. Test production build locally
docker-compose up --build

# 2. If everything works, commit and push
git add .
git commit -m "Updated portfolio"
git push

# 3. On your server, pull and deploy
git pull
docker-compose up -d --build
```

---

## 📊 Comparison

### Development Mode (docker-compose.dev.yml)
- ✅ Hot reload enabled
- ✅ Fast rebuilds
- ✅ Source maps for debugging
- ✅ Detailed error messages
- ⚡ Edit → Save → See changes (2 seconds)

### Production Mode (docker-compose.yml)
- ✅ Optimized build
- ✅ Nginx reverse proxy
- ✅ Gzip compression
- ✅ Security headers
- 🚀 Fast loading for users

---

## 🎯 Best Practices

### For Development:
```bash
# Always use dev mode
docker-compose -f docker-compose.dev.yml up

# Keep it running while coding
# Stop only when done for the day
```

### For Testing Production:
```bash
# Test production build before deploying
docker-compose up --build

# Check if everything works
# Then deploy to server
```

### For Deployment:
```bash
# On your server
git pull
docker-compose up -d --build

# Check logs
docker-compose logs -f
```

---

## 🔧 Advanced Tips

### Run specific commands in container:

```bash
# Install new package
docker-compose -f docker-compose.dev.yml exec nextjs-dev npm install package-name

# Run type check
docker-compose -f docker-compose.dev.yml exec nextjs-dev npm run type-check

# Run linter
docker-compose -f docker-compose.dev.yml exec nextjs-dev npm run lint

# Access container shell
docker-compose -f docker-compose.dev.yml exec nextjs-dev sh
```

### View real-time logs:

```bash
# All logs
docker-compose -f docker-compose.dev.yml logs -f

# Last 100 lines
docker-compose -f docker-compose.dev.yml logs --tail=100 -f
```

### Clean up everything:

```bash
# Remove containers and volumes
docker-compose -f docker-compose.dev.yml down -v

# Remove images too
docker-compose -f docker-compose.dev.yml down -v --rmi all
```

---

## 📝 Environment Variables

Create `.env.local` for development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Portfolio
NEXT_PUBLIC_CONTACT_EMAIL=aankit.sssingh@gmail.com

# Hot Reload (for Windows/slow systems)
WATCHPACK_POLLING=true
CHOKIDAR_USEPOLLING=true

# Ngrok (optional)
NGROK_AUTHTOKEN=your_token_here
```

---

## 🎉 Summary

### Development (Every Day):
```bash
docker-compose -f docker-compose.dev.yml up
# Edit → Save → Auto-refresh! ✨
```

### Production (When Deploying):
```bash
git add .
git commit -m "Changes"
git push

# On server:
git pull
docker-compose up -d --build
```

**No more repetitive git push/clone/build cycles!** 🚀

---

## 🆘 Need Help?

1. Check if Docker is running
2. Check if port 3000 is free
3. Try restarting: `docker-compose -f docker-compose.dev.yml restart`
4. Check logs: `docker-compose -f docker-compose.dev.yml logs -f`
5. Clean start: `docker-compose -f docker-compose.dev.yml down -v && docker-compose -f docker-compose.dev.yml up`

---

**Happy Coding! 🎨**

Made with ❤️ by Bob