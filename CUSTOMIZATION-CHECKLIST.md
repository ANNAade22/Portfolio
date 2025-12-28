# ✅ Customization Checklist

Use this checklist to personalize your portfolio. Check off each item as you complete it!

## 🎯 Essential Updates (Do These First!)

### 1. Personal Information

- [x] Update your name in `portfolio-plan.json` → `sections.hero.profileCard.name`
- [x] Update your title/role → `sections.hero.profileCard.title`
- [x] Update your handle → `sections.hero.profileCard.handle`
- [x] Update contact email → `sections.footer.button.action`

### 2. Profile Photo

- [x] Add your photo to `/public` folder (e.g., `avatar.jpg`)
- [x] Update avatar path → `sections.hero.profileCard.avatarUrl`
  - Change from: `"/path/to/avatar.jpg"`
  - Change to: `"/avatar.jpg"` (or your filename)

### 3. Hero Section

- [x] Write your unique heading → `sections.hero.heading`
  - Make it personal and engaging!
  - Current: "I design thoughtful web apps for universities, turning research ideas into reliable products."
- [x] Update the blur text → `sections.hero.blurText.text`
  - Add your personality or a fun tagline
  - Current: "Curious mind. Clean code. Helpful experiences."

## 🚀 Projects (Most Important!)

### Project 1

- [x] Title → `sections.projects.cardSwap.cards[0].title`
  - Current: "Campus Nexus"
- [x] Description → `sections.projects.cardSwap.cards[0].description`
  - Current: "A multi-tenant dashboard where Al-Marwazi University teams plan events, publish updates, and review analytics in real time."
- [x] Tech stack → `sections.projects.cardSwap.cards[0].tech`
  - Current: `["Next.js", "TypeScript", "Supabase", "Tailwind CSS"]`
- [x] Link text → `sections.projects.cardSwap.cards[0].linkText`
  - Current: "Explore case study"
- [x] Link URL → `sections.projects.cardSwap.cards[0].linkUrl`
  - Current: `https://almarwazi.vercel.app/`
- [x] Image URL → `sections.projects.cardSwap.cards[0].imageUrl`
  - Current: `/imageProject1.png`
- [x] Image fit → `sections.projects.cardSwap.cards[0].imageFit`
  - Current: "contain"
- [x] Image position → `sections.projects.cardSwap.cards[0].imagePosition`
  - Current: "center"

### Project 2

- [x] Title → `sections.projects.cardSwap.cards[1].title`
  - Current: "Scholarship Radar"
- [x] Description → `sections.projects.cardSwap.cards[1].description`
  - Current: "Aggregates national scholarships, lets students filter by eligibility, and sends reminder emails ahead of deadlines."
- [x] Tech stack → `sections.projects.cardSwap.cards[1].tech`
  - Current: `["React", "Node.js", "PostgreSQL", "Resend"]`
- [x] Link text → `sections.projects.cardSwap.cards[1].linkText`
  - Current: "View live demo"
- [x] Link URL → `sections.projects.cardSwap.cards[1].linkUrl`
  - Current: `https://almarwazi.vercel.app/`
- [x] Image URL → `sections.projects.cardSwap.cards[1].imageUrl`
  - Current: `/imageProject2.png`
- [x] Image fit → `sections.projects.cardSwap.cards[1].imageFit`
  - Current: "cover"
- [x] Image position → `sections.projects.cardSwap.cards[1].imagePosition`
  - Current: "center"

### Project 3

- [x] Title → `sections.projects.cardSwap.cards[2].title`
  - Current: "LabFlow"
- [x] Description → `sections.projects.cardSwap.cards[2].description`
  - Current: "Digital lab notebook with versioned notes, experiment templates, and Firebase-backed collaboration for research assistants."
- [x] Tech stack → `sections.projects.cardSwap.cards[2].tech`
  - Current: `["Node.js", "Firebase", "Fastify", "Framer Motion"]`
- [x] Link text → `sections.projects.cardSwap.cards[2].linkText`
  - Current: "Read more"
- [x] Link URL → `sections.projects.cardSwap.cards[2].linkUrl`
  - Current: `https://github.com/anasabdulkadirhussein/labflow`
- [x] Image URL → `sections.projects.cardSwap.cards[2].imageUrl`
  - Current: `/imageProject3.png`
- [x] Image fit → `sections.projects.cardSwap.cards[2].imageFit`
  - Current: "contain"
- [x] Image position → `sections.projects.cardSwap.cards[2].imagePosition`
  - Current: "top"

**💡 Tip:** Add more projects by copying the card structure!

## 🎨 About Section

- [x] Write your bio → `sections.about.summary`

  - Current: "I’m Anas, a software engineer focused on building calm, useful tools for campus communities. I translate messy requirements into research-backed prototypes, test with real users, and iterate until the interaction feels effortless."
  - Make it your own story!

- [x] Skills updated in `sections.about.skills`
  - Current list: Next.js, React, TypeScript, Node.js, Express/Fastify, PostgreSQL, Firebase, Tailwind CSS, Framer Motion, Product discovery, Figma handoff

**💡 Tip:** List 6-12 skills for best visual balance

## 📬 Footer

- [x] Update CTA text → `sections.footer.cta`
  - Current: "Let’s build the next tool for students or faculty. I’m open to freelance work and collaborations."
- [x] Update button text → `sections.footer.button.text`
  - Current: "Email Anas"
- [x] Verify email link → `sections.footer.button.action`
  - Current: `mailto:anasadbulkadirhussein@gmail.com`

## 🎨 Optional: Color Customization

Want to change the color scheme? Update these in `palette`:

- [x] Background color → `palette.background`
- [ ] Panel color → `palette.panel`
- [x] Accent color (buttons, highlights) → `palette.accent`
- [ ] Text color → `palette.text`

**Note:** The current theme uses light blue accent colors (`#4189DD`) to match the Somali flag. Buttons with light blue backgrounds use white text for readability, while footer buttons use transparent backgrounds with light blue text and borders.

**🎨 Color Palette Suggestions:**

**Somali Flag Theme (Current):**

```json
{
  "background": "#011627",
  "accent": "#4189DD"
}
```

**Blue/Purple Theme:**

```json
{
  "background": "#011627",
  "accent": "#1f6feb"
}
```

**Green/Teal Theme:**

```json
{
  "background": "#0a1e1e",
  "accent": "#10b981"
}
```

**Orange/Warm Theme:**

```json
{
  "background": "#1a1106",
  "accent": "#f59e0b"
}
```

**Pink/Magenta Theme:**

```json
{
  "background": "#1a0a1a",
  "accent": "#ec4899"
}
```

## ⚙️ Optional: Animation Tuning

### Blur Text Speed

- [ ] Adjust word reveal delay → `sections.hero.blurText.delay`
  - Lower = faster (try 100)
  - Higher = slower (try 200)

### Card Swap Timing

- [ ] Auto-rotation speed → `sections.projects.cardSwap.delay`
  - Current: 5000ms (5 seconds)
  - Faster: 3000ms
  - Slower: 7000ms
- [ ] Pause on hover → `sections.projects.cardSwap.pauseOnHover`
  - `true` = pause when hovering
  - `false` = always rotate

### Click Sparks

- [ ] Spark count → `globalLayers.ClickSpark.sparkCount`
- [ ] Spark size → `globalLayers.ClickSpark.sparkSize`
- [ ] Animation speed → `globalLayers.ClickSpark.duration`

## 📱 Before You Deploy

- [ ] Test on mobile device (Chrome DevTools → Toggle Device Toolbar)
- [ ] Test all project links
- [ ] Test contact email link
- [ ] Check spelling and grammar
- [ ] Review all personal information
- [ ] Take a screenshot for social media!

## 🌐 Deployment

- [ ] Push code to GitHub
- [ ] Deploy to Vercel or Netlify
- [ ] Test live site
- [ ] Share your portfolio link! 🎉

---

## 📝 Quick Edit Reminder

To see changes:

1. Save `portfolio-plan.json`
2. Browser will auto-refresh
3. If it doesn't, manually refresh (Ctrl+R or Cmd+R)

---

## 🎯 Content Writing Tips

### For Your Heading:

- ❌ Generic: "I'm a developer"
- ✅ Engaging: "I build apps that make complex things feel simple"

### For Project Descriptions:

- ❌ Vague: "A cool web app"
- ✅ Specific: "A real-time collaboration tool that reduced team meeting time by 40%"

### For Your Bio:

- ❌ Resume-style: "Skilled developer with experience in..."
- ✅ Conversational: "I love solving puzzles, especially when they involve code and user experience"

---

## 🆘 Need Help?

- **File not updating?** Make sure you saved it (Ctrl+S)
- **Site not loading?** Check that `npm run dev` is still running
- **JSON error?** Use [JSONLint.com](https://jsonlint.com) to validate your JSON

---

Take your time with each section. A well-crafted portfolio is worth the effort! 💪✨
