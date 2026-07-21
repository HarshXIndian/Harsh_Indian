document.documentElement.classList.add("js");

const siteHeader = document.querySelector(".site-header");
const brandLink = document.querySelector(".site-header__brand");
const menuToggle = document.querySelector(".menu-toggle");
const headerActionLinks = document.querySelectorAll(".site-nav a, .header-cta");
const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const filterButtons = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");
const projectsGrid = document.querySelector("#projects-grid");
const projectsPrevBtn = document.querySelector("#projects-prev");
const projectsNextBtn = document.querySelector("#projects-next");
const projectsPageIndicator = document.querySelector(
  "#projects-page-indicator",
);

const contactForm = document.querySelector(".contact-form");
const skillButtons = document.querySelectorAll(".skill-tool");

const identityQuestionText = document.querySelector("#identity-question-text");
const identityDialog = document.querySelector("#identity-dialog");
const identityDialogOpen = document.querySelector(".identity-dialog-open");
const identityDialogClose = document.querySelector(".identity-dialog__close");

const identityQuestions = [
  'Why do you write "Indian" after your name?',
  "Why not use your caste surname like everyone else?",
  "We already know you are Indian, so why make it a statement?",
  "Are you trying to say you are more Indian than the rest of us?",
];

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const projectFilterAnimationMs = 340;
let activeProjectFilter =
  document.querySelector(".project-filter.is-active")?.dataset.filter || "all";
let projectFilterTimer = null;

const projectsPerPage = 5;
let projectsCurrentPage = 1;
let projectsActiveFilteredIds = [];

const getFilteredProjectIds = (filter) => {
  return Array.from(projectCards)
    .filter((card) => {
      const category = card.dataset.category;
      return filter === "all" || category === filter;
    })
    .map((card) => card.id);
};

const updateProjectsPaginationUI = () => {
  if (!projectsPageIndicator || !projectsPrevBtn || !projectsNextBtn) {
    return;
  }

  const total =
    Math.ceil(projectsActiveFilteredIds.length / projectsPerPage) || 1;

  // Hide pagination when only one page exists.
  if (projectsPrevBtn && projectsNextBtn && projectsPageIndicator) {
    const shouldHide = total <= 1;
    projectsPrevBtn.classList.toggle("is-hidden", shouldHide);
    projectsNextBtn.classList.toggle("is-hidden", shouldHide);
    projectsPageIndicator.classList.toggle("is-hidden", shouldHide);

    // Also hide the wrapper if present.
    const wrapper = projectsPrevBtn.closest(".projects-pagination");
    if (wrapper) wrapper.classList.toggle("is-hidden", shouldHide);
  }

  projectsPageIndicator.textContent = `Page ${projectsCurrentPage}`;

  projectsPrevBtn.disabled = projectsCurrentPage <= 1;
  projectsNextBtn.disabled = projectsCurrentPage >= total;

  projectsPrevBtn.setAttribute(
    "aria-disabled",
    String(projectsPrevBtn.disabled),
  );
  projectsNextBtn.setAttribute(
    "aria-disabled",
    String(projectsNextBtn.disabled),
  );
};

const renderProjectsPage = () => {
  if (!projectsGrid) return;

  projectsActiveFilteredIds = getFilteredProjectIds(activeProjectFilter);

  const total =
    Math.ceil(projectsActiveFilteredIds.length / projectsPerPage) || 1;
  projectsCurrentPage = Math.min(projectsCurrentPage, total);
  if (projectsCurrentPage < 1) projectsCurrentPage = 1;

  updateProjectsPaginationUI();

  const startIndex = (projectsCurrentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const idsToShow = new Set(
    projectsActiveFilteredIds.slice(startIndex, endIndex),
  );

  // Re-introduce entry/exit animation between pages/filters.
  const cards = Array.from(projectCards);
  const leaving = cards.filter((card) => !card.classList.contains("is-hidden"));

  leaving.forEach((card) => {
    card.classList.add("is-leaving");
  });

  const apply = () => {
    cards.forEach((card) => {
      const shouldShow = idsToShow.has(card.id);
      if (shouldShow) {
        card.classList.add("is-entering");
        card.classList.remove("is-hidden", "is-leaving");
      } else {
        card.classList.add("is-hidden");
        card.classList.remove("is-entering", "is-leaving");
      }
    });

    if (prefersReducedMotion) {
      cards.forEach((card) => {
        card.classList.remove("is-entering", "is-leaving");
      });
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        cards.forEach((card) => {
          card.classList.remove("is-entering");
        });
      });
    });
  };

  if (prefersReducedMotion) {
    // No animations.
    apply();
    return;
  }

  window.setTimeout(apply, projectFilterAnimationMs);
};

const setProjectFilter = (filter, activeButton = null) => {
  if (
    filter === activeProjectFilter &&
    activeButton?.classList.contains("is-active")
  ) {
    return;
  }

  activeProjectFilter = filter;
  window.clearTimeout(projectFilterTimer);

  filterButtons.forEach((button) => {
    const isActive = activeButton
      ? button === activeButton
      : button.dataset.filter === filter;

    button.classList.toggle("is-active", isActive);
  });

  // Re-render page-limited projects.
  projectsCurrentPage = 1;
  renderProjectsPage();
};

const skillCatalog = {
  html: {
    category: "Frontend",
    title: "HTML",
    summary:
      "Semantic page structure for landing pages, branded sections, and content-driven layouts.",
    project: "Infinite Scroll Website",
    link: "#project-infinite-scroll-website",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Infinite_Scroll",
    codeLabel: "View Code",
  },
  css: {
    category: "Frontend",
    title: "CSS",
    summary:
      "Layout, spacing, responsiveness, and visual polish for modern web interfaces.",
    project: "Infinite Scroll Website",
    link: "#project-infinite-scroll-website",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Infinite_Scroll",
    codeLabel: "View Code",
  },
  scss: {
    category: "Frontend",
    title: "SCSS",
    summary:
      "Structured styling for reusable sections, cleaner organization, and scalable UI work.",
    project: "Infinite Scroll Website",
    link: "#project-infinite-scroll-website",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Infinite_Scroll",
    codeLabel: "View Code",
  },
  javascript: {
    category: "Frontend",
    title: "JavaScript",
    summary:
      "Interactive behavior, dynamic UI updates, and cleaner user experience across projects.",
    project: "Quiz Game",
    link: "#project-quiz-game",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Quiz-Application",
    codeLabel: "View Code",
  },
  "frontend-dev": {
    category: "Frontend",
    title: "Frontend Development",
    summary:
      "Bringing structure, design, responsiveness, and interaction together into usable interfaces.",
    project: "Infinite Scroll Website",
    link: "#project-infinite-scroll-website",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Infinite_Scroll",
    codeLabel: "View Code",
  },
  bootstrap: {
    category: "Frameworks",
    title: "Bootstrap",
    summary:
      "Fast responsive section building and utility-based layout work for practical web pages.",
    project: "E-Book Website",
    link: "#project-ebook-website",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Ebook_Website",
    codeLabel: "View Code",
  },
  tailwind: {
    category: "Frameworks",
    title: "Tailwind CSS",
    summary:
      "Utility-first styling for quick iteration, cleaner spacing systems, and modern UI structure.",
    project: "Infinite Scroll Website",
    link: "#project-infinite-scroll-website",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Infinite_Scroll",
    codeLabel: "View Code",
  },
  jquery: {
    category: "Frameworks",
    title: "jQuery",
    summary:
      "Useful for lightweight DOM interaction and faster scripting in simpler web projects.",
    project: "Quiz Game",
    link: "#project-quiz-game",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Quiz-Application",
    codeLabel: "View Code",
  },
  wordpress: {
    category: "Frameworks",
    title: "WordPress",
    summary:
      "Comfortable with content-driven website structure, customization, and practical web publishing workflows.",
    project: "Content Publishing Workflow",
    link: "#projects",
    linkLabel: "Open Work Section",
    codeUrl: "#",
    codeLabel: "View Code",
  },
  nodejs: {
    category: "Backend",
    title: "Node.js",
    summary:
      "Backend fundamentals for building APIs, handling logic, and supporting project workflows.",
    project: "Student Learning Platform",
    link: "#project-student-learning-platform",
    linkLabel: "Open Project",
    codeUrl: "",
    codeLabel: "View Code",
  },
  php: {
    category: "Backend",
    title: "PHP",
    summary:
      "Server-side logic and dynamic web application basics for practical website development.",
    project: "Dynamic Website Practice",
    link: "#projects",
    linkLabel: "Open Work Section",
    codeUrl: "#",
    codeLabel: "View Code",
  },
  python: {
    category: "Backend",
    title: "Python",
    summary:
      "General-purpose programming for logic building, scripting, and learning core development patterns.",
    project: "Programming Practice",
    link: "#projects",
    linkLabel: "Open Work Section",
    codeUrl: "#",
    codeLabel: "View Code",
  },
  java: {
    category: "Backend",
    title: "Java",
    summary:
      "Object-oriented programming fundamentals and structured problem-solving through code.",
    project: "Programming Practice",
    link: "#projects",
    linkLabel: "Open Work Section",
    codeUrl: "https://github.com/yourname",
    codeLabel: "View Code",
  },
  c: {
    category: "Backend",
    title: "C",
    summary:
      "Core programming logic, fundamentals, and a stronger base for understanding how code works.",
    project: "Programming Practice",
    link: "#projects",
    linkLabel: "Open Work Section",
    codeUrl: "https://github.com/yourname",
    codeLabel: "View Code",
  },
  cpp: {
    category: "Backend",
    title: "C++",
    summary:
      "Structured programming and problem-solving practice with a focus on logic and fundamentals.",
    project: "Programming Practice",
    link: "#projects",
    linkLabel: "Open Work Section",
    codeUrl: "https://github.com/yourname",
    codeLabel: "View Code",
  },
  mysql: {
    category: "Databases & Tools",
    title: "MySQL",
    summary:
      "Database basics for storing, structuring, and retrieving project data in practical applications.",
    project: "Student Learning Platform",
    link: "#project-student-learning-platform",
    linkLabel: "Open Project",
    codeUrl: "",
    codeLabel: "View Code",
  },
  git: {
    category: "Databases & Tools",
    title: "Git",
    summary:
      "Version control for managing changes, testing iterations, and keeping project history organized.",
    project: "Infinite Scroll Website",
    link: "#project-infinite-scroll-website",
    linkLabel: "Open Project",
    codeUrl: "https://github.com/Harsh-v3/Infinite_Scroll",
    codeLabel: "View Code",
  },
  vscode: {
    category: "Databases & Tools",
    title: "VS Code",
    summary:
      "My main code editor for day-to-day development, debugging, writing, and front-end iteration.",
    project: "Daily Development Workflow",
    link: "#projects",
    linkLabel: "Open Work Section",
    codeUrl: "https://github.com/yourname",
    codeLabel: "View Code",
  },
  canva: {
    category: "Databases & Tools",
    title: "Canva",
    summary:
      "Fast visual support for presentations, post creatives, quick layouts, and simple branded assets.",
    project: "Content & Presentation Support",
    link: "#socials",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  "ai-tools": {
    category: "Databases & Tools",
    title: "AI Tools",
    summary:
      "Used for research support, idea expansion, drafting, and faster productivity in creative workflows.",
    project: "Workflow Support",
    link: "#projects",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },

  networking: {
    category: "Systems",
    title: "Networking",
    summary:
      "Good practical understanding of network basics, connectivity, and system-level technical awareness.",
    project: "System Knowledge",
    link: "#about",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  linux: {
    category: "Systems",
    title: "Linux",
    summary:
      "Comfortable with Linux basics for development environment awareness and system understanding.",
    project: "System Knowledge",
    link: "#about",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  kali: {
    category: "Systems",
    title: "Kali Linux",
    summary:
      "Comfortable with Kali Linux for security learning, tooling exploration, and defensive security fundamentals.",
    project: "Security & Learning",
    link: "#projects",
    linkLabel: "Open Projects",
    codeUrl: "",
    codeLabel: "",
  },
  ubuntu: {
    category: "Systems",
    title: "Ubuntu",
    summary:
      "Familiar with Ubuntu for daily development workflow, setup, and practical learning.",
    project: "System Knowledge",
    link: "#about",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  windows: {
    category: "Systems",
    title: "Windows OS",
    summary:
      "Strong day-to-day working knowledge of Windows for development, teaching, and practical workflows.",
    project: "System Knowledge",
    link: "#about",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  "technical-knowledge": {
    category: "Systems",
    title: "Technical Knowledge",
    summary:
      "Comfortable with practical computer basics, systems understanding, and learning through hands-on work.",
    project: "Technical Foundation",
    link: "#about",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  "digital-marketing": {
    category: "Practical Skills",
    title: "Digital Marketing",
    summary:
      "Awareness of audience reach, promotion, and digital presentation beyond just code.",
    project: "Brand & Content Work",
    link: "#socials",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  teaching: {
    category: "Practical Skills",
    title: "Teaching",
    summary:
      "Teaching students at Hartron while continuing to improve clarity, structure, and delivery.",
    project: "Hartron Teaching Work",
    link: "#about",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
  communication: {
    category: "Practical Skills",
    title: "Communication",
    summary:
      "Clear explanation, presentation, and student-facing interaction as part of both teaching and project work.",
    project: "Teaching & Presentation Work",
    link: "#about",
    linkLabel: "Open Related Section",
    codeUrl: "",
    codeLabel: "",
  },
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const syncHeaderState = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("is-scrolled", window.scrollY > 28);
};

const setCurrentLink = () => {
  const offset = window.scrollY + window.innerHeight * 0.28;

  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const link = document.querySelector(`.site-nav a[href="#${id}"]`);

    if (!link) {
      return;
    }

    const inView =
      offset >= section.offsetTop &&
      offset < section.offsetTop + section.offsetHeight;

    link.classList.toggle("is-current", inView);
  });
};

const handleScroll = () => {
  syncHeaderState();
  setCurrentLink();
};

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("load", handleScroll);

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

if (skillButtons.length) {
  // Quick Look removed: keep only visual active state.
  skillButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const skillKey = button.dataset.skill;
      skillButtons.forEach((b) => {
        const isActive = b.dataset.skill === skillKey;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", String(isActive));
      });
    });
  });
}

if (
  identityQuestionText &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  let questionIndex = 0;

  window.setInterval(() => {
    questionIndex = (questionIndex + 1) % identityQuestions.length;
    identityQuestionText.classList.add("is-switching");

    window.setTimeout(() => {
      identityQuestionText.textContent = identityQuestions[questionIndex];
      identityQuestionText.classList.remove("is-switching");
    }, 240);
  }, 3600);
}

if (
  identityQuestionText &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  identityQuestionText.textContent = identityQuestions[0];
}

if (identityDialog && identityDialogOpen && identityDialogClose) {
  const openIdentityDialog = () => {
    if (identityDialog.hasAttribute("open")) {
      return;
    }

    if (typeof identityDialog.showModal === "function") {
      identityDialog.showModal();
    } else {
      identityDialog.setAttribute("open", "open");
    }
  };

  const closeIdentityDialog = () => {
    if (!identityDialog.hasAttribute("open")) {
      return;
    }

    if (typeof identityDialog.close === "function") {
      identityDialog.close();
    } else {
      identityDialog.removeAttribute("open");
    }
  };

  identityDialogOpen.addEventListener("click", openIdentityDialog);
  identityDialogClose.addEventListener("click", closeIdentityDialog);

  identityDialog.addEventListener("click", (event) => {
    if (event.target === identityDialog) {
      closeIdentityDialog();
    }
  });
}

if (siteHeader && menuToggle) {
  const closeMenu = () => {
    siteHeader.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const shouldOpen = !siteHeader.classList.contains("menu-open");
    siteHeader.classList.toggle("menu-open", shouldOpen);
    menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  });

  headerActionLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.contains(event.target)) {
      closeMenu();
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    projectsCurrentPage = 1;
    setProjectFilter(button.dataset.filter, button);
  });
});

if (projectsPrevBtn && projectsNextBtn && projectsPageIndicator) {
  projectsPrevBtn.addEventListener("click", () => {
    if (projectsCurrentPage <= 1) return;
    projectsCurrentPage -= 1;
    renderProjectsPage();
  });

  projectsNextBtn.addEventListener("click", () => {
    const total =
      Math.ceil(projectsActiveFilteredIds.length / projectsPerPage) || 1;
    if (projectsCurrentPage >= total) return;
    projectsCurrentPage += 1;
    renderProjectsPage();
  });
}

// Initial render
if (projectsGrid) {
  renderProjectsPage();
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (!submitButton) return;

    const previousLabel = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const statusEl = document.querySelector("#contact-status");

    // EmailJS integration (requires emailjs.init in email.js)
    emailjs
      .sendForm("service_lgsa1on", "template_hirxanf", contactForm)
      .then(() => {
        contactForm.reset();
        if (statusEl) statusEl.textContent = "Message sent ✅";
      })
      .catch((error) => {
        console.error(error);
        if (statusEl)
          statusEl.textContent = "Failed to send ❌ Please try again.";
      })
      .finally(() => {
        submitButton.textContent = previousLabel;
        submitButton.disabled = false;

        if (statusEl) {
          window.setTimeout(() => {
            statusEl.textContent = "";
          }, 5000);
        }
      });
  });
}
