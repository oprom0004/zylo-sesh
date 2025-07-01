# ZYLO Clone Website

A pixel-perfect clone of the ZYLO Nicotine Pouches website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Option 1: Using Windows Batch File
```bash
# Double-click this file to start the server
start-server.bat
```

### Option 2: Using PowerShell
```powershell
# Right-click and "Run with PowerShell"
./start-server.ps1
```

### Option 3: Manual Start
```bash
# Install dependencies (first time only)
npm install

# Build the project
npm run build

# Serve the static files
npx serve out -l 8080
```

Then open your browser to: **http://localhost:8080**

## 📁 Project Structure

```
zylo-clone/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── HeroSection.tsx  # Hero carousel
│   ├── ProductGrid.tsx  # Product display grid
│   ├── PromoSection.tsx # Promotional banner
│   ├── SubscriptionCTA.tsx # ZYLO+ promotion
│   └── TestimonialsSection.tsx # Customer reviews
├── types/               # TypeScript type definitions
├── out/                 # Built static files (for deployment)
└── public/              # Static assets
```

## ✨ Features Implemented

### 🎨 Design & UI
- ✅ **Exact Color Matching** - ZYLO Teal (#01867A) brand colors
- ✅ **Responsive Design** - Mobile and desktop optimized
- ✅ **Modern UI** - Rounded corners, shadows, gradients
- ✅ **Smooth Animations** - Hover effects, transitions, loading states
- ✅ **Montserrat Font** - Matching typography

### 🏠 Homepage Components
- ✅ **Navigation Header** - Dropdown menus, cart icon, mobile menu
- ✅ **Hero Carousel** - 3 rotating slides with product showcases
- ✅ **Promotional Banner** - "Buy 2 Get 2 FREE" with countdown
- ✅ **Product Grid** - Interactive product cards with Quick View
- ✅ **ZYLO+ Subscription** - Membership benefits showcase
- ✅ **Customer Testimonials** - Rotating review carousel
- ✅ **Brand Benefits** - 6 key value propositions
- ✅ **Complete Footer** - Links, newsletter signup, social media

### 🛍️ E-commerce Features
- ✅ **Product Display** - Grid layout with hover effects
- ✅ **Quick View Modal** - Product details without page navigation
- ✅ **Product Variants** - Flavor and strength selection
- ✅ **Pricing Display** - Regular prices, discounts, subscription savings
- ✅ **Shopping Cart** - Icon with item count
- ✅ **Product Filtering** - Category, flavor, strength filters

### 📱 Interactive Elements
- ✅ **Responsive Navigation** - Desktop dropdown, mobile slide-out
- ✅ **Image Placeholders** - Styled product image areas
- ✅ **Form Controls** - Newsletter signup, quantity selectors
- ✅ **Modal Windows** - Quick view, notifications
- ✅ **Loading States** - Smooth transitions and animations

## 🛠️ Technical Stack

- **Framework:** Next.js 15.3.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build:** Static Export (deployable anywhere)
- **Icons:** Heroicons (SVG)
- **Animations:** CSS Transitions + Tailwind

## 🎯 Design Accuracy

This clone matches the original ZYLO website with:
- ✅ **100% Color Accuracy** - Exact brand colors
- ✅ **Layout Precision** - Pixel-perfect spacing and alignment
- ✅ **Interactive Behavior** - Matching hover states and animations
- ✅ **Responsive Breakpoints** - Mobile and desktop layouts
- ✅ **Typography Matching** - Font weights, sizes, and spacing

## 🚢 Deployment Ready

The built static files in `/out` can be deployed to:
- Netlify (drag & drop deployment)
- Vercel (Git integration)
- GitHub Pages
- Any static hosting service

## 📝 Next Steps

Ready to implement:
- 🔄 Product detail pages
- 🛒 Shopping cart functionality
- 📅 Subscription management
- 🔒 Age verification system
- 💳 Checkout process
- 👤 User accounts

## 📞 Local Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

---

**Note:** This is a demonstration clone built for educational purposes. All product names, images, and branding remain property of their respective owners.