# Harsh Indian — Portfolio

> **Builder today. Founder-minded problem solver tomorrow.**

A portfolio website built with vanilla HTML, CSS, and JavaScript. This site presents the identity, work, social presence, and future vision of **Harsh Indian** — a former educator at Hartron, currently pursuing MCA at MMDU Mullana and teaching online.

## 🔗 Live Demo

👉 [harshxindian.github.io](https://harshxindian.github.io)

---

## ✨ Features

### 🌓 Dark & Light Theme

- **Full theme toggle** — switch between dark and light mode with a single click
- **Persistent preference** — theme choice is saved to `localStorage` across sessions
- **Dual toggle locations** — toggle button in both the header (compact icon) and footer (with track switch)
- **Synced icons** — moon/sun icons swap in both locations simultaneously
- **Complete CSS variable system** — over 70 custom properties control all colors, backgrounds, borders, and shadows for each theme

### 🖱️ Scroll-to-Top Button

- **Progress indicator** — circular SVG ring fills as you scroll down the page
- **Smooth reveal** — appears after scrolling 400px with a fade + scale animation
- **Instant reset** — clicking scrolls to top and resets the progress ring

### 🎨 Interactive UI & Animations

- **Dark-themed glassmorphism UI** — modern aesthetic with ambient gradients, blur effects, and grid overlays
- **Scroll-triggered reveal animations** — powered by IntersectionObserver (respects `prefers-reduced-motion`)
- **Rotating identity questions** — cycles through common questions every 3.6 seconds in the About section
- **Quote carousel** — two personal quotes rotate every 5 seconds with a smooth fade + slide transition
- **Skills catalog** — interactive skill buttons organized into 6 categories; click to highlight active skill
- **Filterable & paginated project gallery** — filter by All / Completed / Practice / Upcoming with 5 projects per page and exit/enter animations

### 📱 Responsive Design

- **Seamless across all devices** — works on desktop, tablet, and mobile
- **Three breakpoints** — 1080px (tablet), 820px (small tablet), 560px (mobile)
- **Mobile hamburger menu** — smooth open/close with animated hamburger-to-close transition
- **Adaptive layouts** — footer grid restructures from 4-column to 2×2 to single-column as viewport shrinks

### 🧩 Additional Features

- **Sticky header with scroll-aware styling** — morphs between rounded pill and compact card states
- **Active navigation highlighting** — current section automatically detected on scroll
- **Identity dialog** — custom `<dialog>` element explaining the choice of "Indian" over caste identity
- **Contact form** — integrated with **EmailJS** for sending messages directly from the site
- **Social presence grid** — links to Instagram, LinkedIn, GitHub, YouTube, Email, WhatsApp, and website
- **Principles & Vision roadmap** — personal values and future goals presented in card layouts
- **Resume download** — downloadable resume placeholder
- **Responsive footer** — grid adapts from 4 columns → 2×2 → single column with balanced layout

---

## 🧱 Tech Stack

| Layer               | Technology                                                 |
| ------------------- | ---------------------------------------------------------- |
| **Structure**       | HTML5                                                      |
| **Styling**         | CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism) |
| **Interactivity**   | Vanilla JavaScript (ES6+)                                  |
| **Email Service**   | EmailJS                                                    |
| **Version Control** | Git                                                        |

---

## 📁 Project Structure

```
resume_/
├── index.html              # Main HTML document
├── styles.css              # Complete stylesheet
├── script.js               # JavaScript functionality
├── email.js                # EmailJS initialization
├── assets/
│   ├── profile-placeholder.svg
│   ├── resume-placeholder.txt
│   └── whatsapp-logo.svg
└── README.md               # This file
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Harsh-v3/resume-.git
cd resume-
```

### 2. Open the website

Simply open `index.html` in your browser — no build tools or server required.

```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

### 3. (Optional) Configure EmailJS

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages. To use it with your own account:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service, template, and get your public key
3. Update `email.js`:

```js
emailjs.init("YOUR_PUBLIC_KEY");
```

4. In `script.js`, update the `sendForm` parameters:

```js
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", contactForm);
```

---

## 🎨 Design Highlights

- **Color Palette (Dark)**: Deep navy background (`#060914`), teal accent (`#8cd6c1`), gold accent (`#e0bb7a`)
- **Color Palette (Light)**: Soft off-white background (`#eef1f6`), deeper teal (`#1a7a6a`), muted gold (`#b88a3a`)
- **Typography**: Serif headings (Palatino/Georgia) for elegance + sans-serif body (Aptos/Segoe UI) for readability
- **Glass Cards**: `backdrop-filter: blur()` with semi-transparent backgrounds and subtle borders
- **Ambient Lighting**: Fixed radial gradients create atmospheric depth
- **Grid Pattern**: Subtle 64px grid overlay with radial mask for texture

---

## 📄 Sections Overview

| #   | Section                 | Description                                              |
| --- | ----------------------- | -------------------------------------------------------- |
| 1   | **Hero**                | Name, tagline, resume download, and contact CTA          |
| 2   | **About**               | Personal intro, rotating identity questions, quick facts |
| 3   | **Skills**              | 6 skill categories with interactive tool buttons         |
| 4   | **Projects**            | Filterable & paginated project cards                     |
| 5   | **Hobbies & Interests** | Writing, music, tech exploration, etc.                   |
| 6   | **Future Vision**       | 3-point roadmap: products, voice, initiatives            |
| 7   | **Principles**          | 6 core values with descriptions                          |
| 8   | **Quote**               | Rotating personal philosophy quotes (carousel)           |
| 9   | **Social Presence**     | Links to all platforms                                   |
| 10  | **Contact**             | EmailJS-powered contact form                             |

---

## 🆕 What's New (Latest Updates)

- **Dark / Light theme toggle** — complete dual-theme support with CSS custom properties and persistent storage
- **Scroll-to-top button** — circular progress indicator that fills as you scroll
- **Quote carousel** — two quotes rotate with smooth fade animation every 5 seconds
- **Responsive footer improvements** — 2×2 grid layout between 1080px–560px for better readability
- **Header theme toggle button** — compact icon button in the header for quick theme switching
- **Improved accessibility** — better ARIA labels, focus outlines, and prefers-reduced-motion support
- **CSS variable refactoring** — 70+ custom properties for easier theming and maintenance
- **Mobile navigation fixes** — light theme compatibility for mobile dropdown and hamburger menu

---

## 👤 About the Creator

**Harsh Indian** is a former educator at Hartron (1 year), now pursuing MCA at MMDU Mullana and teaching online — languages and computer-related topics. He believes in building practical projects that solve real problems and uses "Indian" as his surname to reject caste-based identity and stand for national identity above all.

- 📧 Email: [harshwebdev015@gmail.com](mailto:harshwebdev015@gmail.com)
- 🔗 LinkedIn: [Harsh Indian](https://www.linkedin.com/in/harsh-x-indian015/)
- 🐙 GitHub: [Harsh-v3](https://github.com/Harsh-v3)
- 📸 Instagram: [@Harshxindian](https://www.instagram.com/harshxindian/)
- ▶️ YouTube: [Harshxindian](https://www.youtube.com/@harshxindian)

---

## 🌱 Future Improvements

- [ ] Blog section with markdown articles
- [ ] Project detail pages with live demos
- [ ] Testimonials / recommendations section
- [ ] Performance optimizations (image lazy loading, CSS minification)
- [ ] Accessibility audit and ARIA improvements
- [ ] Backend integration with a headless CMS

---

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome. Feel free to open an issue or reach out directly.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Harsh Indian</strong>
</p>

---

## 🏷️ GitHub Profile Setup

### Repository Description

> Portfolio website — Dark/Light themed glassmorphism UI built with vanilla HTML, CSS & JavaScript showcasing skills, projects, and vision.

### Topics

| Topic                  | Context                        |
| ---------------------- | ------------------------------ |
| `portfolio`            | Personal portfolio website     |
| `personal-website`     | Individual website             |
| `portfolio-website`    | Career/project showcase        |
| `vanilla-js`           | Pure JavaScript (no framework) |
| `vanilla-css`          | Pure CSS (no framework)        |
| `glassmorphism`        | Glassmorphism design trend     |
| `responsive-design`    | Mobile-first responsive layout |
| `dark-theme`           | Dark mode UI                   |
| `light-theme`          | Light mode UI                  |
| `theme-toggle`         | Dark/light theme switch        |
| `emailjs`              | EmailJS integration            |
| `frontend-development` | Frontend project               |
| `web-development`      | Web development project        |
| `html-css-javascript`  | Core web stack                 |
| `harsh-indian`         | Personal name                  |

### GitHub Profile README

Short bio for the GitHub profile README (`Harsh-v3/Harsh-v3`):

> **Harsh Indian** — Educator, writer & tech student building practical projects that solve real problems. I use "Indian" to reject caste identity and stand for national identity. Portfolio: [harshxindian.github.io](https://harshxindian.github.io)

### LinkedIn / Resume Headline

> **Frontend Developer | MCA Student at MMDU | Former Educator at Hartron | Teaching Languages & Computer Topics Online**
