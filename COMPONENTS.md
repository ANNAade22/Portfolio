# Component Documentation

## 🎨 Effects Components

### SilkBackground
**Location:** `components/effects/SilkBackground.tsx`

A canvas-based animated noise texture that creates a subtle, dynamic background across the entire viewport.

**Features:**
- Procedural noise generation
- Configurable speed and intensity
- Fixed positioning with no pointer events
- Soft-light blend mode for subtle effect

**Configuration in portfolio-plan.json:**
```json
"Silk": {
  "speed": 5,
  "scale": 1,
  "color": "#7B7481",
  "noiseIntensity": 1.5
}
```

---

### ClickSpark
**Location:** `components/effects/ClickSpark.tsx`

Interactive sparkle animation that triggers on every mouse click.

**Features:**
- Radial spark particles
- Configurable count, size, and radius
- Fade-out animation
- No interference with UI interactions

**Configuration in portfolio-plan.json:**
```json
"ClickSpark": {
  "sparkColor": "#fff",
  "sparkSize": 10,
  "sparkRadius": 15,
  "sparkCount": 8,
  "duration": 400
}
```

---

## 🎯 UI Components

### BlurText
**Location:** `components/ui/BlurText.tsx`

Animated text that reveals from blur with staggered timing.

**Props:**
- `text: string` - The text to animate
- `delay: number` - Milliseconds between each word/character (default: 150)
- `animateBy: 'words' | 'chars'` - Animation unit (default: 'words')
- `direction: 'top' | 'bottom'` - Entry direction (default: 'top')
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
<BlurText 
  text="Hello World" 
  delay={150} 
  animateBy="words"
  direction="top"
/>
```

---

### ProfileCard
**Location:** `components/ui/ProfileCard.tsx`

3D tilt-enabled profile card with smooth mouse tracking.

**Props:**
- `name: string` - User's name
- `title: string` - Job title or role
- `handle: string` - Social media handle
- `status: string` - Online status text
- `contactText: string` - Button text
- `avatarUrl: string` - Path to avatar image
- `showUserInfo?: boolean` - Show/hide user details
- `enableTilt?: boolean` - Enable 3D tilt effect (default: true)
- `enableMobileTilt?: boolean` - Enable tilt on mobile (default: false)

**Features:**
- 3D perspective tilt on mouse movement
- Gradient background with glassmorphism
- Avatar with fallback to initial letter
- Online status indicator
- Hover scale animation

---

### SomaliStar
**Location:** `components/ui/SomaliStar.tsx`

Decorative SVG star with glow effect and rotation animation.

**Features:**
- 5-pointed star shape
- Continuous rotation animation (20s cycle)
- Glow/drop-shadow effect
- Path animation on mount

**Configuration:**
- Colors and glow controlled via CSS
- Size: 96x96 (can be adjusted via className)

---

### CardSwap
**Location:** `components/ui/CardSwap.tsx`

Stacked card carousel with automatic rotation and manual controls.

**Props:**
- `cards: Card[]` - Array of project cards
- `cardDistance?: number` - Horizontal spacing (default: 60)
- `verticalDistance?: number` - Vertical offset (default: 70)
- `delay?: number` - Auto-rotation delay in ms (default: 5000)
- `pauseOnHover?: boolean` - Pause on hover (default: false)

**Card Interface:**
```typescript
interface Card {
  title: string;
  description: string;
  tech: string[];
  linkText: string;
  linkUrl: string;
}
```

**Features:**
- Stacked 3D card layout
- Automatic rotation with configurable timing
- Pagination dots for manual navigation
- Smooth transitions with easing
- Scale and opacity depth effect
- Hover pause option

---

## 📄 Section Components

### Hero
**Location:** `components/sections/Hero.tsx`

Landing section with heading, animated text, profile card, and CTA.

**Features:**
- Full-height section
- Responsive grid layout (1 column mobile, 2 columns desktop)
- Centered Somali Star background
- Scroll-to-projects button
- BlurText animation
- ProfileCard with tilt

**Configuration:**
```json
"hero": {
  "heading": "Your main headline",
  "blurText": { ... },
  "profileCard": { ... },
  "cta": {
    "text": "Button text",
    "target": "projects"
  }
}
```

---

### Projects
**Location:** `components/sections/Projects.tsx`

Project showcase with CardSwap animation.

**Features:**
- Section title and subtitle
- CardSwap carousel component
- Responsive container (max-width: 6xl)
- ID anchor for navigation (#projects)

**Configuration:**
```json
"projects": {
  "title": "Section title",
  "subtitle": "Section description",
  "cardSwap": {
    "cards": [ ... ],
    "cardDistance": 60,
    "verticalDistance": 70,
    "delay": 5000
  }
}
```

---

### About
**Location:** `components/sections/About.tsx`

About section with summary text and skills grid.

**Features:**
- Scroll-triggered fade-in animations
- Staggered children animations
- Responsive skills grid (2 cols mobile, 4 cols desktop)
- Hover scale effect on skill cards
- Glassmorphism card design

**Configuration:**
```json
"about": {
  "summary": "Your bio text",
  "skills": ["Skill 1", "Skill 2", ...]
}
```

---

### Footer
**Location:** `components/sections/Footer.tsx`

Call-to-action footer with contact button.

**Features:**
- Centered content layout
- Scroll-triggered fade-in
- Hover scale button animation
- Automatic link handling (mailto: or http)
- Copyright notice with current year

**Configuration:**
```json
"footer": {
  "cta": "Your CTA text",
  "button": {
    "text": "Button text",
    "color": "#1f6feb",
    "action": "mailto:you@example.com"
  }
}
```

---

## 🎨 Styling System

### Tailwind Classes

**Custom Colors (from palette):**
- `bg-background` - Main background (#011627)
- `bg-panel` - Panel background (#0b111b)
- `bg-panelSoft` - Semi-transparent panel
- `bg-accent` - Accent color (#1f6feb)
- `text-text` - Main text color (#f5f6fa)

**Custom Utilities:**
- `.glow` - Drop shadow in current color
- `.glow-accent` - Blue glow effect

### Animation System

All animations use **Framer Motion** for:
- Smooth 60fps performance
- Spring physics
- Gesture recognition
- Scroll-triggered animations
- Stagger effects

**Common Patterns:**

Fade in on scroll:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>
```

Hover scale:
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

Stagger children:
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>
```

---

## 🔧 Configuration System

All content is driven by `portfolio-plan.json`:

**Benefits:**
- No code changes needed for content updates
- Centralized configuration
- Type-safe with TypeScript
- Hot-reload on save

**Structure:**
```json
{
  "palette": { ... },        // Color scheme
  "globalLayers": { ... },   // Effects configuration
  "sections": {              // Page sections
    "hero": { ... },
    "projects": { ... },
    "about": { ... },
    "footer": { ... }
  }
}
```

---

## 🚀 Performance Optimizations

1. **Canvas Effects:** Optimized pixel operations with reduced density
2. **Framer Motion:** Hardware-accelerated transforms
3. **Next.js:** Server-side rendering and automatic code splitting
4. **Image Optimization:** Use Next.js Image component for production
5. **Lazy Loading:** Components load on demand
6. **Debounced Events:** Mouse tracking with spring physics

---

## 📱 Responsive Design

All components are responsive:

- **Mobile (< 768px):** Single column, touch-optimized
- **Tablet (768px - 1024px):** Two columns where applicable
- **Desktop (> 1024px):** Full multi-column layouts

**Breakpoints:**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

---

## 🎯 Best Practices

1. **Always test animations** on lower-end devices
2. **Keep card content concise** for better readability
3. **Use high-quality images** (avatar, project screenshots)
4. **Maintain contrast** for accessibility
5. **Test all links** before deploying
6. **Optimize images** before adding to /public folder

---

Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

