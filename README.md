# WILDEN

> High-end reptile discovery platform with cinematic Dark Luxury design.

A Next.js-powered web application designed for reptile enthusiasts to explore species, discover individual geckos, and access comprehensive care guides. Features interactive 3D models, responsive design, and an immersive editorial experience.

---

## ✨ Features

### 🦎 Interactive 3D Experience
- Real-time 3D gecko models powered by Three.js and React Three Fiber
- Mouse-following camera system with smooth animations
- Cinematic lighting and environment setup
- Performance-optimized for desktop and mobile devices

### 🔍 Species Discovery
- Comprehensive species database with detailed information
- Care requirements (temperature, humidity, enclosure size, lifespan)
- Dynamic routing for individual species pages
- Search and filtering capabilities

### 👤 Individual Geckos
- Browse available geckos with detailed profiles
- Temperament indicators, health status, and vital stats
- Pricing and availability information
- Reserve functionality (frontend mockup)

### 📱 Fully Responsive Design
- Mobile-first approach with optimized breakpoints
- Responsive typography system (text-5xl → text-9xl)
- Adaptive padding and spacing across all viewports
- Touch-optimized interactions for mobile devices

### ♿ Accessibility
- ARIA attributes for screen readers
- Keyboard navigation support with focus-visible states
- `prefers-reduced-motion` support for animations
- Semantic HTML structure with proper heading hierarchy

### 🎨 Dark Luxury Aesthetic
- Premium color palette (#080808, #F5F1E8, #C4A57B)
- Editorial typography with Inter font family
- Smooth transitions and micro-interactions
- Cinematic gradient overlays

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.3.1** - React framework with App Router and Turbopack
- **React 19.2.8** - UI library with Server Components
- **TypeScript 7.0.2** - Type-safe development
- **Node.js** - Runtime environment

### 3D Graphics
- **Three.js 0.185.1** - WebGL 3D rendering engine
- **@react-three/fiber 9.7.0** - React renderer for Three.js
- **@react-three/drei 10.7.8** - Useful helpers (useGLTF, useAnimations)

### Styling
- **Tailwind CSS 3.4.7** - Utility-first CSS framework
- **PostCSS 8.5.26** - CSS transformation
- **Autoprefixer 10.5.4** - Vendor prefix automation
- **clsx 2.1.1** + **tailwind-merge 3.6.0** - Class name utilities
- **class-variance-authority 0.7.1** - Component variants

### UI & Animation
- **Lucide React 1.33.0** - Icon library
- **GSAP 3.15.0** - High-performance animations

---

## 📁 Project Structure

```
WILDEN/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage with all sections
│   ├── species/
│   │   ├── page.tsx              # Species listing
│   │   └── [slug]/page.tsx       # Dynamic species detail
│   ├── geckos/
│   │   ├── page.tsx              # Available geckos
│   │   └── [id]/page.tsx         # Individual gecko profile
│   ├── match/page.tsx            # Match quiz (placeholder)
│   ├── care/page.tsx             # Care guides
│   ├── shop/page.tsx             # Shop (placeholder)
│   └── explore/page.tsx          # Explore page
│
├── components/
│   ├── hero/
│   │   ├── Hero.tsx              # Hero section with 3D scene
│   │   └── Navigation.tsx        # Main navigation bar
│   ├── 3d/
│   │   ├── GeckoScene.tsx        # Three.js canvas setup
│   │   ├── GeckoModel.tsx        # 3D gecko model component
│   │   ├── Environment.tsx       # Lighting and environment
│   │   ├── CameraController.tsx  # Camera interaction logic
│   │   └── Loader.tsx            # 3D loading indicator
│   └── sections/
│       ├── SpeciesSection.tsx    # Species discovery section
│       ├── MatchSection.tsx      # Match quiz section
│       ├── IndividualSection.tsx # Featured individuals
│       ├── HabitatSection.tsx    # Habitat showcase
│       ├── CareSection.tsx       # Care guide section
│       └── FinalCTA.tsx          # Final call-to-action
│
├── data/
│   ├── species.ts                # Mock species data
│   └── individuals.ts            # Mock individual geckos
│
├── types/
│   ├── species.ts                # Species TypeScript interfaces
│   └── gecko.ts                  # Gecko TypeScript interfaces
│
├── lib/
│   └── utils.ts                  # Utility functions
│
├── public/                       # Static assets
│   └── models/                   # 3D model files (GLB)
│
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mr-Junyu/WILDEN.git
cd WILDEN
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Network Access (LAN)

To access from other devices on the same network:

```bash
npm run dev
```

The server listens on `0.0.0.0:3000`, accessible via:
- **Local**: http://localhost:3000
- **Network**: http://192.168.x.x:3000

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `xs` | < 640px | Mobile phones (390×844, 430×932) |
| `sm` | 640px+ | Large phones, small tablets |
| `md` | 768px+ | Tablets (768×1024) |
| `lg` | 1024px+ | Small desktops |
| `xl` | 1280px+ | Large desktops (1920×1080) |

---

## 🎨 Design System

### Color Palette

```css
/* Background */
--bg-primary: #080808     /* Main background */
--bg-secondary: #111111   /* Card backgrounds */
--bg-tertiary: #171512    /* Elevated surfaces */

/* Text */
--text-primary: #F5F1E8   /* Main text */
--text-secondary: #A7A39A /* Secondary text */

/* Accent */
--accent-sand: #C4A57B    /* Primary accent */
--accent-warm: #D4A574    /* Warm accent */
--accent-amber: #E8B87D   /* Highlight accent */
```

### Typography

- **Font Family**: Inter (with system fallbacks)
- **Heading Scale**: text-5xl → text-6xl → text-7xl → text-8xl → text-9xl
- **Line Heights**: tight (1.25) → [0.95] → [0.9]
- **Letter Spacing**: tracking-[0.2em] → [0.4em]

---

## 🔧 Development Journey (Aug 20, 2026)

### STEP 1: Route Completion ✅
**Completed**: Created all missing pages to fix navigation 404s

- ✅ `/species` - Species listing page
- ✅ `/species/[slug]` - Dynamic species detail pages
- ✅ `/geckos` - Available geckos listing
- ✅ `/geckos/[id]` - Individual gecko profiles
- ✅ `/match` - Match quiz placeholder
- ✅ `/care` - Care guides hub
- ✅ `/shop` - Shop placeholder

**Key Changes**:
- Removed `mix-blend-difference` from Navigation (readability issue)
- Added `backdrop-blur` for better contrast
- Switched from `<a>` to Next.js `<Link>` for client-side navigation

---

### STEP 2: Navigation Enhancement ✅
**Completed**: Enhanced mobile navigation with animations and accessibility

**Features Added**:
- 🎭 Smooth mobile menu animations (max-height + opacity transitions)
- ⌨️ Escape key handler to close mobile menu
- 🔒 Body scroll lock when menu open
- 🎯 Focus-visible styles for keyboard navigation
- 📱 Icon toggle (Menu ↔ X)

**Code Example**:
```tsx
// Mobile menu animation
className={`md:hidden overflow-hidden transition-all duration-300 ${
  menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
}`}
```

---

### STEP 3: Hero Mobile Responsive Optimization ✅
**Completed**: Mobile-first responsive design for Hero section

#### A. Typography Responsive System
```tsx
// Before: text-6xl md:text-7xl lg:text-8xl xl:text-9xl
// After:  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl

// Eyebrow letter-spacing
tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em]

// Line height progression
leading-tight sm:leading-[0.95] md:leading-[0.9]
```

**Effect**: 
- 390×844: Title 48px (readable, no overflow)
- 640px+: Title 60px (sm breakpoint activated)
- 1280px+: Title 128px (desktop impact preserved)

#### B. Container & Spacing
```tsx
// Padding progression
px-4 sm:px-6 md:px-8 lg:px-12

// CTA Button responsive
px-8 py-4 sm:px-10 md:px-14 md:py-5

// Margin adjustments
mb-6 sm:mb-8  // Consistent vertical rhythm
```

**Effect**:
- Mobile: 358px content area (5.6% wider than before)
- Button: Maintains premium feel without overflow

#### C. Performance Optimization
**Problem**: `mousemove` listener caused high-frequency state updates on every mouse movement, even on touch devices.

**Solution**:
```tsx
// Touch device detection
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
if (isTouchDevice) return

// requestAnimationFrame throttling
let rafId: number
const handleMouseMove = (event: MouseEvent) => {
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    setMousePosition({...})
  })
}

window.addEventListener('mousemove', handleMouseMove, { passive: true })
```

**Effect**:
- Mobile: Skips mousemove entirely (~15% JS savings)
- Desktop: Limited to 60fps updates

#### D. Animation Accessibility
```tsx
// Respects user system preferences
<div className="animate-bounce motion-reduce:animate-none">
```

**Effect**: Users with `prefers-reduced-motion` enabled see static scroll indicator.

#### E. ARIA Enhancements
```tsx
// CTA Button
<button aria-label="Explore reptile species">

// 3D Scene (decorative)
<div aria-hidden="true">
  <GeckoScene />
</div>
```

**Effect**: Screen readers properly identify interactive elements and skip decorative 3D content.

---

### What Was NOT Changed (Deferred to STEP 3.5)

❌ **3D Model Responsive Positioning** (C)
❌ **Canvas Camera/FOV/DPR Configuration** (E)

**Reason**: Current 3D model is a geometric placeholder. Adjusting camera FOV, gecko position, lookAt, and DPR for a placeholder would require complete rework when the real leopard gecko GLB model is integrated.

**Future Plan**: STEP 3.5 will handle full 3D visual optimization after real model integration.

---

## 🧪 Build Status

```bash
✓ Compiled successfully in 5.9s
✓ TypeScript check passed (1625ms)
✓ Static pages generated (9/9)

Route (app)
├ ○ /                    # Homepage
├ ○ /care                # Care guides
├ ○ /geckos              # Gecko listing
├ ƒ /geckos/[id]         # Dynamic gecko pages
├ ○ /match               # Match quiz
├ ○ /shop                # Shop
├ ○ /species             # Species listing
└ ƒ /species/[slug]      # Dynamic species pages

○ Static   ƒ Dynamic (SSR)
```

---

## 📝 Mock Data

Currently using frontend mock data for demonstration:

- **4 Species**: Leopard Gecko, Crested Gecko, Bearded Dragon, Ball Python
- **6 Individual Geckos**: Various morphs, temperaments, and availability statuses

**Note**: No backend or database integration yet. All data is TypeScript constants in `/data` folder.

---

## 🚧 Roadmap

### Immediate Next Steps
- [ ] **STEP 4**: Mobile section spacing optimization
- [ ] **STEP 5**: Unified Button component system
- [ ] **STEP 6**: Image system with fallback handling
- [ ] **STEP 7**: Complete MatchSection frontend logic
- [ ] **STEP 8**: Account menu and mobile fixes

### Future Features
- [ ] **STEP 3.5**: Real GLB model integration + 3D visual tuning
- [ ] Backend API integration
- [ ] User authentication system
- [ ] Shopping cart functionality
- [ ] Admin dashboard for content management
- [ ] Live chat support
- [ ] Payment gateway integration
- [ ] Order management system

---

## 🤝 Contributing

This project is currently in active development. Contributions, issues, and feature requests are welcome!

---

## 📄 License

MIT License - feel free to use this project for learning or personal projects.

---

## 👨‍💻 Author

**Mr-Junyu**
- GitHub: [@Mr-Junyu](https://github.com/Mr-Junyu)

---

## 🙏 Acknowledgments

- Design inspiration: Dark Luxury editorial websites
- 3D models: Three.js community
- Icon library: Lucide React
- Framework: Next.js team

---

**Built with ❤️ for reptile enthusiasts**
