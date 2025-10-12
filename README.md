# Host-IT.App - Premium Website Hosting Platform

A modern web hosting portfolio website built with React, TypeScript, and Vite. Host-IT.App showcases beautiful, ready-made websites with premium hosting plans and subscription-based pricing.

## 🚀 Features

- **Premium Website Collection**: Browse professionally designed websites across various industries
- **3D Carousel Hero Section**: Interactive showcase of featured websites
- **Subscription-based Pricing**: Monthly hosting plans starting at $27/month
- **Stripe Integration**: Secure payment processing for subscriptions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with shadcn/ui for consistent design
- **Performance Optimized**: Lightning-fast loading with Vite build system

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Payments**: Stripe integration
- **Deployment**: Netlify-optimized

## 🏃‍♂️ Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd HostIT
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment to Netlify

This project is optimized for Netlify deployment:

1. **Connect your repository** to Netlify
2. **Set build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Add environment variables** in Netlify dashboard:
   - `VITE_EMAILJS_SERVICE_ID` = service_l53wwur
   - `VITE_EMAILJS_TEMPLATE_ID` = template_kbf2d6b
   - `VITE_EMAILJS_PUBLIC_KEY` = aFMY4FzZzeI5jSpaj
   - `VITE_CONTACT_EMAIL` = contact@Host-IT.app
4. **Deploy!** - The `netlify.toml` configuration handles the rest

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── HeroCarousel.tsx # 3D carousel hero section
│   ├── PortfolioGrid.tsx # Website portfolio grid
│   ├── ContactSection.tsx # Contact form
│   └── SiteModal.tsx   # Website details modal
├── lib/                # Utility libraries
│   ├── stripe.ts       # Stripe integration
│   └── utils.ts        # General utilities
├── pages/              # Page components
└── hooks/              # Custom React hooks
```

## 💳 Payment Integration

The Stripe integration supports:
- Monthly subscription billing
- Secure checkout sessions
- Multiple pricing tiers
- Subscription management

## 🎨 Customization

- **Branding**: Update colors and fonts in `src/index.css`
- **Content**: Modify portfolio items in `src/components/PortfolioGrid.tsx`
- **Styling**: Customize with Tailwind classes
- **Components**: Extend with additional shadcn/ui components

## 📞 Support

For questions or support, contact us at **contact@Host-IT.app**

Visit us at: **https://Host-IT.App**

---

Built with ❤️ by the Host-IT Team