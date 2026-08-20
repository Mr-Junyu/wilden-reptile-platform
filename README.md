# WILDEN

> High-end reptile discovery platform with cinematic Dark Luxury design.

A Next.js-powered web application designed for reptile enthusiasts to explore species, discover individual geckos, and access comprehensive care guides. Features interactive 3D models, responsive design, and an immersive editorial experience.

**Current version: v2** — real Chameleon GLB integration + a full Hero / 3D responsive layout rebuild. See [What's New in v2](#-whats-new-in-v2) for the complete change list.

---

## 🆕 What's New in v2

### Added
- **Real 3D model**: Draco-compressed Chameleon GLB (`public/models/chameleon.glb`, 1.7 MB) replacing the geometric placeholder, with a local Draco decoder in `public/draco/`
- **Unified layout container** (`.wilden-container`): `max-width: 1440px` with a *continuously* interpolated gutter — `clamp(1rem, 0.5rem + 2.5vw, 3rem)`
- **Layout CSS variables**: `--wilden-gutter`, `--wilden-max`, `--nav-h`
- **Two-column Hero grid** at ≥1024px: `grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]` — copy left, Chameleon right
- **Container-query typography**: the H1 sizes itself against the width of its own column (`cqi`), not the viewport
- **Scene error boundary + load veil failsafe** so a failed GLB can never take the Hero copy down with it

### Changed
- `GeckoModel` → **`ChameleonModel`** (model identity unified to Chameleon across paths, variables and comments)
- Hero 3D layer moved **out of `absolute inset-0`** into its own grid cell — text and model can no longer overlap
- `min-h-screen` / `h-screen` → **`min-h-[100svh]`** (mobile URL-bar safe)
- Nav offset: hard-coded padding → **`calc(var(--nav-h) + …)`**, with the nav bar rendering at exactly `--nav-h`
- Navigation now shares the Hero container, so the WILDEN wordmark and the H1 sit on the same left axis
- H1: stepped `text-5xl … xl:text-9xl` → single continuous `clamp()`
- Camera `lookAt(0.8, 0.3, 0)` → **`lookAt(0, 0.3, 0)`** (the X offset was CSS compensation, no longer needed)
- Chameleon position: per-tier offsets → **`[0, 0, 0]`** on every tier; only `scale` varies, driven by cell aspect ratio
- `useTier()` no longer seeds `'desktop'` — the Canvas mounts only after the real tier is measured

### Fixed
- Text / 3D model overlap in the Hero
- Layout jitter and sideways jumps on resize (Tailwind's stepped `container` snapping at breakpoints)
- Logo / headline left-edge misalignment (Navigation used `px-6`, Hero used `px-4 sm:px-6 md:px-8 lg:px-12`)
- First-frame desktop composition flash on mobile devices, without introducing a hydration mismatch
- Hero bottom clipped by the mobile browser URL bar (`100vh` → `100svh`)

---

## ✨ Features

### 🦎 Interactive 3D Experience
- Real Chameleon GLB model (Draco-compressed) powered by Three.js and React Three Fiber
- The model itself turns to follow the cursor; the camera drifts subtly alongside it
- Cinematic lighting and environment setup
- Tiered quality (shadows / DPR / antialias / power preference) for desktop, tablet and mobile
- Error boundary + loading veil failsafe: a failed model never blocks the page

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
- One shared container with a continuously interpolated gutter — no breakpoint jumps
- Fluid `clamp()` typography, sized against the copy column via container queries
- CSS Grid separation of copy and 3D — no absolute-positioned overlap
- `100svh` heights, safe under mobile browser URL bars
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
- **@react-three/drei 10.7.8** - Useful helpers (useGLTF, useProgress)
- **Draco** - GLB mesh compression, decoded via the local decoder in `public/draco/`
- **@gltf-transform/cli 4.4.2** *(devDependency)* - GLB inspection and compression tooling

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
│   ├── globals.css               # Reset + layout tokens + .wilden-container
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
│   │   ├── Hero.tsx              # Hero grid: copy column + 3D column
│   │   └── Navigation.tsx        # Main navigation bar (defines --nav-h)
│   ├── 3d/
│   │   ├── GeckoScene.tsx        # Canvas setup, tier gate, error boundary
│   │   ├── GeckoModel.tsx        # ChameleonModel — loads chameleon.glb
│   │   ├── Environment.tsx       # Lighting, ground plane, fog
│   │   ├── CameraController.tsx  # Camera framing + mouse drift
│   │   └── Loader.tsx            # SceneLoader veil + progress bar
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
│   ├── models/
│   │   └── chameleon.glb         # Hero 3D model (Draco, 1.7 MB)
│   ├── draco/                    # Draco decoder (js + wasm)
│   └── images/                   # Species / individual imagery
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
git clone https://github.com/Mr-Junyu/wilden-reptile-platform.git
cd wilden-reptile-platform
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

## 📱 Responsive System

Sizes are **continuous functions of the viewport**, not stepped breakpoint values. The only genuine breakpoint left in the Hero is the single-column → two-column switch at `lg`.

| Layout mode | Width | Hero | 3D tier |
|-------------|-------|------|---------|
| Mobile | < 768px | Single column: copy → CTA → Chameleon | `mobile` — low power, no shadows |
| Tablet | 768–1023px | Single column, wider measure | `tablet` — low power on touch |
| Desktop | ≥ 1024px | Two columns `1fr / 0.9fr` | `desktop` — shadows, DPR 2, mouse follow |

Measured output across the verification matrix:

| Viewport | Gutter | Container | Copy column | H1 |
|----------|--------|-----------|-------------|-----|
| 390×844 | 17.8px | 354.5px | full | 48px |
| 430×932 | 18.8px | 392.5px | full | 50px |
| 768×1024 | 27.2px | 713.6px | full | 68px |
| 1024×768 | 33.6px | 956.8px | 482px | 75px |
| 1280×720 | 40px | 1200px | 605px | 94px |
| 1366×768 | 42.2px | 1281.7px | 646px | 100px |
| 1440×900 | 44px | 1352px | 681px | 104px |
| 1920×1080 | 48px | 1440px (centred) | 674px | 104px (capped) |

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

### Layout Tokens

```css
--wilden-gutter: clamp(1rem, 0.5rem + 2.5vw, 3rem);  /* continuous side padding */
--wilden-max: 1440px;                                 /* container ceiling */
--nav-h: clamp(4.5rem, 4rem + 1.5vw, 5.5rem);         /* nav bar renders at exactly this */
```

### Typography

- **Font Family**: Inter (with system fallbacks)
- **Hero H1**: `clamp(3rem, min(1.7rem + 5.333vw, 15.5cqi), 8rem)` — the `cqi` term caps the
  headline at 15.5% of its own column width, which is the largest size that keeps
  "COMPANION" on one line. Below 1024px the viewport term wins; above it the column term
  takes over. No media queries, no per-device values.
- **Hero subtitle**: `clamp(1.0625rem, 0.95rem + 0.5vw, 1.5rem)`
- **Line Height**: unitless `0.95` — scales continuously with the font size

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

### What Was Deferred From STEP 3 (now resolved in STEP 3.5) ✅

⏸️ **3D Model Responsive Positioning** (C) and **Canvas Camera/DPR Configuration** (E) were
deliberately skipped in STEP 3, because the model was still a geometric placeholder and any
tuning would have been thrown away on real-model integration. Both are addressed below.

---

### STEP 3.5-E-B: Hero + 3D Global Layout Rebuild ✅ *(v2)*
**Completed**: Structural fix for text/3D overlap and resize jitter, plus real model integration

#### A. Model identity unified to Chameleon
The hero asset is a **chameleon**, not a leopard gecko. References were audited first (exactly
one code reference existed), then the file was renamed — not deleted — and every identifier
followed:

```
public/models/leopard-gecko.glb  →  public/models/chameleon.glb   (1,732,704 bytes, unchanged)
MODEL_PATH                       →  CHAMELEON_MODEL_PATH
GeckoModel / GeckoModelProps     →  ChameleonModel / ChameleonModelProps
```

The `leopard-gecko` strings remaining in `data/species.ts` are a species slug and a `.jpg` —
unrelated to the 3D asset, intentionally untouched. Component *filenames* (`GeckoScene.tsx`,
`GeckoModel.tsx`) were kept to avoid a wide import churn.

#### B. Unified container — the root cause of the resize jitter
Tailwind's default `container` snaps from `100%` to a fixed `768px` at exactly 768px, so every
element on the page jumped sideways on a one-pixel resize. Navigation compounded it by using a
different gutter (`px-6`) from the Hero (`px-4 sm:px-6 md:px-8 lg:px-12`), which is why the logo
and the headline never shared a left edge.

```css
.wilden-container {
  width: 100%;
  max-width: var(--wilden-max);      /* 1440px */
  margin-inline: auto;
  padding-inline: var(--wilden-gutter);  /* clamp(1rem, 0.5rem + 2.5vw, 3rem) */
}
```

Both Navigation and Hero now use it. The gutter is continuous, so 767px → 768px produces no jump.

#### C. Hero becomes a real grid
```tsx
// Before: a full-bleed Canvas layer underneath the copy
<div className="absolute inset-0 w-full h-full z-0"><GeckoScene /></div>

// After: each owns a grid cell — overlap is now structurally impossible
<div className="grid min-h-[100svh] grid-cols-1
                lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]
                items-center gap-[clamp(2rem,4vw,4rem)]
                pt-[calc(var(--nav-h)+clamp(1.5rem,3vh,2.5rem))]
                pb-[clamp(7rem,14vh,9rem)]">
```

The split starts at `lg` rather than `md`: at 768px a `0.9fr` second column leaves the copy
~359px, which cannot hold a 68px "COMPANION" on one line. Portrait tablets stay single-column.

#### D. Height and nav safe area
`min-h-screen` / `h-screen` were replaced with `min-h-[100svh]` — on mobile browsers `100vh` is
the *expanded* viewport, so the bottom of the Hero was being clipped by the URL bar. The nav
offset is `calc(var(--nav-h) + …)` rather than a hard-coded `pt-24`, and `--nav-h` is not an
assumption: the Navigation bar row is rendered at exactly that height.

#### E. Fluid headline, sized by its column
```css
.hero-copy  { container-type: inline-size; }
.hero-title { font-size: clamp(3rem, min(1.7rem + 5.333vw, 15.5cqi), 8rem); line-height: .95; }
```

`15.5cqi` is 15.5% of the copy column's own width — the largest size that keeps a 9-character
word on one line. Under 1024px the viewport term wins; above it the column term takes over, so
the headline is always the biggest size that actually fits, at every width, without a single
media query. If the column ratio is ever retuned, the type follows automatically.

#### F. 3D composition driven by layout, not by compensation
```tsx
// Before — offsets that existed only to dodge the headline in a full-bleed canvas
desktop: [1.2, 0, 0]   tablet: [0.6, 0, 0.4]   mobile: [-0.05, 0, 2.0]
camera.lookAt(0.8, 0.3, 0)

// After — the grid cell does the positioning
position: [0, 0, 0]  on every tier
camera.lookAt(0, 0.3, 0)
```

Only `scale` still varies by tier (1.45 / 2.0 / 1.65), and only because the cells have different
aspect ratios. The mouse-follow rotation on the model itself is unchanged.

#### G. First-frame flash, without a hydration mismatch
`useTier()` used to seed `'desktop'`, so phones rendered one frame of the desktop composition.
Seeding `'mobile'` would just move the flash; reading `matchMedia` in a `useState` initialiser
would desync from the server HTML. Instead the hook returns `null` until measured and the Canvas
is gated on it:

```tsx
{tier !== null && <Canvas … />}
```

Server and first client render agree, so there is no mismatch — verified: the SSR HTML contains
zero `<canvas>` elements. The existing loading veil covers the one-tick gap. This also makes the
WebGL context parameters correct by construction: `antialias`, `powerPreference`, `dpr` and
`shadows` are read **once at context creation** and deliberately do not react to resize, because
WebGL cannot change them on a live context.

#### Known trade-offs (documented, not hidden)
- At 1024px and 1440px the headline lands at 75px / 104px rather than the originally targeted
  85–100px / 110–128px. This is a geometric limit of the `1fr / 0.9fr` split: 110px of
  "COMPANION" needs ~693px and the column is 681px. Raising it requires widening the copy
  column, which is a visual-design decision.
- At 1280×720 the Hero runs ~12px past the viewport; content is never clipped.
- On mobile the stacked Hero (copy + CTA + 3D) is ~1.1× viewport height by nature; compressing it
  into `100svh` would shrink the model to ~200px.

---

## 🧪 Build Status

```bash
✓ Compiled successfully in 5.2s
✓ TypeScript check passed (2.1s)
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

> **Note**: `npm run lint` is currently broken — `next lint` was removed in Next.js 16 and the
> script has not yet been migrated to the ESLint CLI. `npm run build` runs the TypeScript check
> and is the working quality gate.

---

## 📝 Mock Data

Currently using frontend mock data for demonstration:

- **4 Species**: Leopard Gecko, Crested Gecko, Bearded Dragon, Ball Python
- **6 Individual Geckos**: Various morphs, temperaments, and availability statuses

**Note**: No backend or database integration yet. All data is TypeScript constants in `/data` folder.

---

## 🚧 Roadmap

### Immediate Next Steps
- [x] **STEP 3.5**: Real GLB model integration + Hero/3D responsive layout rebuild *(v2)*
- [ ] **STEP C**: Playwright automated visual regression testing
- [ ] **STEP 4**: Mobile section spacing optimization (`py-32` rhythm)
- [ ] **STEP 5**: Unified Button component system
- [ ] **STEP 6**: Image system with fallback handling
- [ ] **STEP 7**: Complete MatchSection frontend logic
- [ ] **STEP 8**: Account menu and mobile fixes

### Known Issues
- [ ] Inter is declared in the font stack but never actually loaded (no `next/font` or import)
- [ ] `npm run lint` needs migrating off the removed `next lint` command
- [ ] `Environment.tsx` rock positions were composed for the old full-bleed canvas

### Future Features
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
