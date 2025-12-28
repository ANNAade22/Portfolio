# Interactive Portfolio

A modern, interactive portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features sophisticated animations and effects based on the portfolio-plan.json configuration.

## ✨ Features

- **Silk Noise Background**: Animated noise texture that creates a subtle, dynamic background
- **Click Spark Effect**: Interactive sparkle animation on every click
- **Somali Star**: Centered SVG element with glow effect and rotation animation
- **Hero Section**:
  - Animated blur text with word-by-word reveal
  - 3D tilt profile card with smooth mouse tracking
  - Smooth scroll navigation to projects
- **Projects Section**:
  - Stacked card carousel with automatic rotation
  - Interactive card swapping animation
  - Pagination dots for manual navigation
- **About Section**: Skills grid with hover animations
- **Footer**: Contact CTA with smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd "C:\Users\Anas\Desktop\my Porto"
```

2. Install dependencies (already done if you followed the setup):

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

Edit the `portfolio-plan.json` file to customize:

- **Color palette**: Background, panel, accent, and text colors
- **Global effects**: Silk animation speed, star appearance, click spark properties
- **Content**: Hero heading, profile info, projects, skills, and footer text
- **Animation timing**: Delays, durations, and interaction behaviors

### Example Customizations

**Update your profile:**

```json
"profileCard": {
  "name": "Your Name",
  "title": "Your Title",
  "handle": "@yourhandle",
  "avatarUrl": "/your-avatar.jpg"
}
```

**Add your projects:**

```json
"cards": [
  {
    "title": "Your Project",
    "description": "Project description",
    "tech": ["React", "Node.js"],
    "linkText": "View Project",
    "linkUrl": "https://yourproject.com"
  }
]
```

**Update contact email:**

```json
"footer": {
  "button": {
    "action": "mailto:your@email.com"
  }
}
```

## 📁 Project Structure

```
my-porto/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout with effects
│   └── page.tsx              # Main homepage
├── components/
│   ├── effects/
│   │   ├── ClickSpark.tsx    # Click interaction effect
│   │   └── SilkBackground.tsx # Animated noise background
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Projects.tsx      # Projects showcase
│   │   ├── About.tsx         # About & skills
│   │   └── Footer.tsx        # Footer with CTA
│   └── ui/
│       ├── BlurText.tsx      # Animated blur text
│       ├── ProfileCard.tsx   # 3D tilt profile card
│       ├── SomaliStar.tsx    # Decorative star SVG
│       └── CardSwap.tsx      # Project card carousel
├── portfolio-plan.json       # Configuration file
├── tailwind.config.js        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance Features

- Server-side rendering with Next.js
- Optimized animations with Framer Motion
- Canvas-based effects for smooth performance
- Responsive design for all devices
- Lazy loading and code splitting

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js and Tailwind CSS
