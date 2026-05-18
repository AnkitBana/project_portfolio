# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Docker. Features a clean design, smooth animations, and easy deployment with Ngrok tunneling.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion for engaging user experience
- **Type-Safe**: Full TypeScript support with Zod validation
- **Docker Ready**: Containerized for easy deployment
- **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- **Static Data**: JSON-based content management (Phase 1)
- **Future-Ready**: Structured for easy backend integration (Phase 2)

## 📋 Sections

1. **Hero** - Eye-catching landing section with CTA buttons
2. **About** - Professional summary and background
3. **Skills** - Technical skills with proficiency visualization
4. **Projects** - Portfolio projects with filtering and search
5. **Blog** - Technical blog posts and articles
6. **Testimonials** - Client and colleague testimonials
7. **Contact** - Contact form and social links

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Validation**: Zod

### Backend
- **API Routes**: Next.js API Routes
- **Email Service**: Nodemailer
- **Validation**: Server-side validation

### Infrastructure
- **Containerization**: Docker
- **Web Server**: Nginx
- **Tunneling**: Ngrok
- **Package Manager**: npm

## 📦 Installation

### Prerequisites

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

2. **Docker** (optional, for containerized deployment)
   - Download from: https://www.docker.com/

3. **Ngrok** (optional, for external access)
   - Sign up at: https://ngrok.com/
   - Get your auth token

### Setup Steps

1. **Clone or navigate to the project**
   ```bash
   cd project_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local with your details
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npm run type-check
```

### Project Structure

```
project_portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── common/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # UI primitives
│   ├── data/                  # Static JSON data
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── testimonials.json
│   │   └── blog.json
│   ├── schemas/               # Zod validation schemas
│   ├── lib/                   # Utilities and helpers
│   ├── types/                 # TypeScript types
│   └── styles/                # Global styles
├── public/                    # Static assets
├── docker/                    # Docker configuration
├── docs/                      # Documentation
└── scripts/                   # Build and deployment scripts
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker-compose build
```

### Run Containers

```bash
docker-compose up -d
```

### View Logs

```bash
docker-compose logs -f
```

### Stop Containers

```bash
docker-compose down
```

## 🌐 Ngrok Setup

1. **Sign up for Ngrok**
   - Visit: https://ngrok.com/
   - Create an account and get your auth token

2. **Add token to environment**
   ```bash
   # In .env.local
   NGROK_AUTHTOKEN=your_token_here
   ```

3. **Start Ngrok tunnel**
   ```bash
   ngrok http 3000
   ```

## 📝 Customization

### Update Personal Information

1. **Edit data files** in `src/data/`:
   - `projects.json` - Your projects
   - `skills.json` - Your skills
   - `testimonials.json` - Client testimonials
   - `blog.json` - Blog posts

2. **Update Hero section** in `src/components/sections/Hero.tsx`:
   - Change name, tagline, and description
   - Update social media links

3. **Modify colors** in `tailwind.config.ts`:
   - Customize primary and secondary colors
   - Adjust theme settings

### Add Images

Place your images in the `public/images/` directory:
```
public/
├── images/
│   ├── projects/
│   ├── blog/
│   ├── testimonials/
│   └── profile.jpg
```

## 🔒 Environment Variables

Required environment variables (see `.env.example` and `.env.local.example`):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Portfolio
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com

# Email Configuration (Contact Form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your@gmail.com
CONTACT_EMAIL=aankit.sssingh@gmail.com

# Ngrok (optional)
NGROK_AUTHTOKEN=your_ngrok_token
```

### Email Setup

The contact form requires email configuration. See [Email Setup Guide](docs/EMAIL_SETUP.md) for detailed instructions on:
- Setting up Gmail with App Passwords
- Configuring alternative email providers
- Testing the contact form
- Troubleshooting common issues

## 🎨 Styling

This project uses Tailwind CSS with custom configurations:

- **Custom Colors**: Primary and secondary color palettes
- **Custom Animations**: Fade, slide, and scale animations
- **Responsive Breakpoints**: Mobile-first design
- **Dark Mode**: Ready for dark mode implementation

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## ✅ Backend Features (Implemented)

- [x] Contact Form API with email notifications
- [x] Server-side validation
- [x] Auto-reply emails to form submissions
- [x] SMTP email integration (Gmail, SendGrid, etc.)

## 🔮 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Authentication system
- [ ] Admin panel for content management
- [ ] Blog CMS integration (Contentful, Sanity)
- [ ] Analytics dashboard
- [ ] Rate limiting for API routes
- [ ] CAPTCHA for spam prevention

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**
   - Run `npm install` to install dependencies
   - Check that Node.js is properly installed

2. **Port already in use**
   - Change port: `npm run dev -- -p 3001`
   - Or kill the process using port 3000

3. **TypeScript errors**
   - Run `npm run type-check` to see all errors
   - Ensure all dependencies are installed

4. **Docker build fails**
   - Check Docker is running
   - Verify Dockerfile syntax
   - Check available disk space

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ankit Kumar Gautam**
- GitHub: [@AnkitBana](https://github.com/AnkitBana)
- LinkedIn: [Ankit Kumar Gautam](https://www.linkedin.com/in/ankitkrgautam)
- Email: aankit.sssingh@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All open-source contributors

## 📞 Support

For support, email aankit.sssingh@gmail.com or open an issue on GitHub.

---

**Built with ❤️ using Next.js and TypeScript**