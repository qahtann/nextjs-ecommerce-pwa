# 🛍️ Next.js E-Commerce PWA

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-Ready-4285F4)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, production-ready Progressive Web App (PWA) e-commerce store built with Next.js 15. Features offline support, installable on home screen, fast loading, and a beautiful responsive UI.

![E-Commerce PWA Preview](https://via.placeholder.com/1200x600/1e293b/ffffff?text=Next.js+E-Commerce+PWA)

## ✨ Features

- 🚀 **Progressive Web App** - Installable, offline-capable, and fast
- 📱 **Mobile-First Design** - Responsive and touch-friendly interface
- 🎨 **Modern UI** - Beautiful design with shadcn/ui components
- 🌙 **Dark Mode** - System preference detection with manual toggle
- 🛒 **Shopping Cart** - Persistent cart with localStorage
- ❤️ **Wishlist** - Save favorite products
- 🔍 **Search & Filters** - Advanced product search and filtering
- 💳 **Checkout Flow** - Complete checkout process (mock)
- ⚡ **Performance** - Optimized for Core Web Vitals
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 📦 **Offline Support** - Service worker caches content for offline browsing

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PWA**: Service Worker + Web App Manifest
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📦 Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd nextjs-ecommerce-pwa-1
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy this PWA is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```

## 📱 PWA Features

### Installation

The app can be installed on:
- **Desktop**: Look for the install prompt in the address bar (Chrome/Edge)
- **Mobile**: Use "Add to Home Screen" option in browser menu
- **Custom Install Button**: Appears in header when installation is available

### Offline Support

- Service worker caches app shell and static assets
- Offline page shown when navigation fails
- Cached products and cart persist offline
- Stale-while-revalidate strategy for optimal performance

### Testing PWA Features

1. **Lighthouse Audit**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run PWA audit
   - Aim for 90+ score

2. **Offline Testing**:
   - Open DevTools → Network tab
   - Enable "Offline" mode
   - Navigate the app
   - Verify cached content loads

3. **Install Testing**:
   - Use Chrome DevTools → Application → Manifest
   - Check installability criteria
   - Test install prompt on mobile device

## 📁 Project Structure

```
nextjs-ecommerce-pwa-1/
├── app/                    # Next.js App Router pages
│   ├── products/          # Products listing and detail
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout flow
│   ├── wishlist/          # Wishlist page
│   ├── account/           # User account page
│   ├── offline/           # Offline fallback page
│   ├── layout.tsx         # Root layout
│   ├── manifest.ts        # PWA manifest
│   └── providers.tsx     # Theme & SW providers
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer
│   ├── ecommerce/         # ProductCard, CartSheet
│   └── home/              # Home page components
├── lib/
│   ├── store/             # Zustand stores (cart, wishlist)
│   ├── data.ts            # Mock product data
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
├── public/
│   ├── sw.js              # Service worker
│   └── offline.html       # Offline fallback
└── hooks/                  # Custom React hooks
```

## 📞 Support

- Telegram: https://t.me/qahtan_n
- Twitter: https://x.com/qahtann_
