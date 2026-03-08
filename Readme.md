# KACIMI Mohamed — Portfolio

![Version](https://img.shields.io/badge/version-2.0.0-6c63ff?style=flat-square)
![Status](https://img.shields.io/badge/status-live-00d4aa?style=flat-square)
![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-yellow?style=flat-square)

A modern, sleek personal portfolio built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, just clean hand-crafted code.

---

## Live Preview

Open `index.html` in any modern browser. No build step, no server required.

---

## Tech Stack

| Layer        | Technology                                       |
| ------------ | ------------------------------------------------ |
| Markup       | HTML5 (semantic)                                 |
| Styling      | Custom CSS3 (CSS variables, Grid, Flexbox)       |
| Scripting    | Vanilla JavaScript (ES6+)                        |
| Fonts        | Syne (display) + DM Sans (body) via Google Fonts |
| Icons        | Font Awesome 6                                   |
| Typed effect | Typed.js 2.1                                     |
| Email        | EmailJS                                          |

> Bootstrap has been fully removed. All UI components are hand-built.

---

## Project Structure

```
Portfolio/
├── index.html                  # Main entry point
├── README.md
└── assets/
    ├── css/
    │   └── style.css           # All styles (CSS variables, layout, animations)
    ├── js/
    │   └── main.js             # Interactions, animations, form handling
    └── imgs/
        ├── images.png
        ├── jupyter-logo.png
        ├── cpge_lycee_moulay_idriss_logo.jpg
        └── Youtube_logo.png
```

---

## Features

- **Custom animated cursor** — smooth ring cursor with hover scaling (desktop)
- **Hero section** — animated glow blobs, grid overlay, staggered load-in animations
- **Typed.js integration** — cycling role descriptions with custom cursor character
- **Scroll reveal** — IntersectionObserver-powered fade-in on scroll
- **Animated skill bars** — fire when the section enters the viewport
- **Mobile responsive** — hamburger nav, single-column layouts, touch-friendly
- **Floating label form** — contact form with CSS floating label animation
- **Toast notifications** — replaces Bootstrap alerts for form feedback
- **Smooth scroll + active nav** — highlights current section in navbar

---

## Design System

```css
/* Core palette */
--bg: #080810 /* Deep space background */ --accent: #6c63ff
    /* Purple — primary accent */ --accent-2: #00d4aa
    /* Teal — secondary accent */ --text: #e8e8f0 /* Primary text */
    --text-muted: #6b6b88 /* Muted / label text */ /* Fonts */
    --font-display: "Syne" /* Headings, brand, numbers */ --font-body: "DM Sans"
    /* Body copy, UI labels */;
```

To retheme the portfolio, update the CSS variables in `:root` inside `style.css`.

---

## Sections

| #   | Section     | Description                               |
| --- | ----------- | ----------------------------------------- |
| 01  | À propos    | Bio, key skills, stat counters            |
| 02  | Formation   | Vertical timeline of academic history     |
| 03  | Projets     | Project cards with hover overlay          |
| 04  | Compétences | Animated skill bars grouped by category   |
| 05  | Langues     | Language cards with dot-level indicators  |
| 06  | Contact     | Floating label form + EmailJS integration |

---

## EmailJS Configuration

The contact form uses EmailJS. To connect your own account:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Update these three values in `assets/js/main.js`:

```js
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
```

---

## Customization

**Add a project** — Duplicate a `.project-card` block in `index.html` and update the image, tags, title, description, and GitHub link.

**Update skills** — Edit the `data-width` attribute on `.skill-fill` elements (value = percentage, 0–100).

**Change typed strings** — Edit the `strings` array in `main.js`:

```js
new Typed('#typed-description', {
  strings: ['Your role', 'Another title', '...'],
  ...
});
```

**Adjust colors** — All colors reference CSS variables, so a single edit in `:root` propagates everywhere.

---

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## Author

**KACIMI Mohamed**
M1 Système d'Information & Innovation Digitale — IAE Savoie Mont Blanc

- [LinkedIn](https://www.linkedin.com/in/mohamed-kacimi/)
- [GitHub](https://github.com/medkacimi)

---

_Built from scratch with HTML, CSS & JavaScript — no frameworks needed._
