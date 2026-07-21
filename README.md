# Harsh Indian — Personal Brand Portfolio

> **Builder today. Founder-minded problem solver tomorrow.**

A premium personal branding website built with vanilla HTML, CSS, and JavaScript. This portfolio presents the identity, work, social presence, and future vision of **Harsh Indian** — an educator, writer, and tech student from Haryana, India.

## 🔗 Live Demo

👉 [harshxindian.github.io](https://harshxindian.github.io)

---

## ✨ Features

- **Dark-themed glassmorphism UI** — modern aesthetic with ambient gradients, blur effects, and grid overlays
- **Responsive design** — works seamlessly across desktop, tablet, and mobile
- **Scroll-triggered reveal animations** — powered by IntersectionObserver (respects `prefers-reduced-motion`)
- **Sticky header with scroll-aware styling** — morphs between rounded pill and compact card states
- **Active navigation highlighting** — current section automatically detected on scroll
- **Mobile hamburger menu** — smooth open/close with animated hamburger-to-close transition
- **Identity dialog** — custom `<dialog>` element explaining the choice of "Indian" over caste identity
- **Rotating identity questions** — cycles through common questions every 3.6 seconds in the About section
- **Skills catalog** — interactive skill buttons organized into 6 categories (Frontend, Frameworks, Backend, Databases & Tools, Systems, Practical Skills)
- **Filterable project gallery** — filter projects by All / Completed / Practice / Upcoming
- **Paginated projects** — 5 projects per page with prev/next navigation and exit/enter animations
- **Contact form** — integrated with **EmailJS** for sending messages directly from the site
- **Social presence grid** — links to Instagram, LinkedIn, GitHub, YouTube, Email, and website
- **Principles & Vision roadmap** — personal values and future goals presented in card layouts
- **Resume download** — downloadable resume placeholder

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

- **Color Palette**: Deep navy background (`#060914`), teal accent (`#8cd6c1`), gold accent (`#e0bb7a`)
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
| 8   | **Quote**               | Personal philosophy statement                            |
| 9   | **Social Presence**     | Links to all platforms                                   |
| 10  | **Contact**             | EmailJS-powered contact form                             |

---

## 👤 About the Creator

**Harsh Indian** is a tech student, educator at Hartron, and writer who believes in building practical projects that solve real problems. He uses "Indian" as his surname to reject caste-based identity and stand for national identity above all.

- 📧 Email: [harshwebdev015@gmail.com](mailto:harshwebdev015@gmail.com)
- 🔗 LinkedIn: [Harsh Indian](https://www.linkedin.com/in/harsh-x-indian015/)
- 🐙 GitHub: [Harsh-v3](https://github.com/Harsh-v3)
- 📸 Instagram: [@Harshxindian](https://www.instagram.com/harshxindian/)
- ▶️ YouTube: [Harshxindian](https://www.youtube.com/@harshxindian)

---

## 🌱 Future Improvements

- [ ] Dark/light theme toggle
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

> Personal portfolio website — Dark-themed glassmorphism UI built with vanilla HTML, CSS & JavaScript showcasing skills, projects, and vision.

### Topics

| Topic                  | Context                        |
| ---------------------- | ------------------------------ |
| `portfolio`            | Personal portfolio website     |
| `personal-website`     | Individual branding site       |
| `portfolio-website`    | Career/project showcase        |
| `vanilla-js`           | Pure JavaScript (no framework) |
| `vanilla-css`          | Pure CSS (no framework)        |
| `glassmorphism`        | Glassmorphism design trend     |
| `responsive-design`    | Mobile-first responsive layout |
| `dark-theme`           | Dark mode UI                   |
| `emailjs`              | EmailJS integration            |
| `frontend-development` | Frontend project               |
| `web-development`      | Web development project        |
| `html-css-javascript`  | Core web stack                 |
| `personal-branding`    | Personal brand presence        |
| `harsh-indian`         | Personal brand name            |

### GitHub Profile README

Short bio for the GitHub profile README (`Harsh-v3/Harsh-v3`):

> **Harsh Indian** — Educator, writer & tech student building practical projects that solve real problems. I use "Indian" to reject caste identity and stand for national identity. Portfolio: [harshxindian.github.io](https://harshxindian.github.io)

### LinkedIn / Resume Headline

> \*\*Frontend Developer | Educator at Hartron | BCA Graduate | Building Practical, Impact-Driven Web Solutions
