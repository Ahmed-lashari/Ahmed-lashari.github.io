/* ============================================================
   THEME TOGGLE
   ============================================================ */
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');

// Respect OS preference on first visit
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
html.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ============================================================
   SCROLL-BASED FADE-IN
   ============================================================ */
const targets = document.querySelectorAll(
  '.glass-card, .timeline-item, .project-card, .skill-group, .hero-content, .hero-eyebrow'
);

targets.forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.setProperty('--i', i % 6); // stagger reset per group
});

// Hero content visible immediately
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  setTimeout(() => heroContent.classList.add('visible'), 80);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

targets.forEach(el => observer.observe(el));

/* ============================================================
   NAV — shrink on scroll + active link highlight
   ============================================================ */
const nav = document.getElementById('nav');
let lastScroll = 0;

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Compact nav after scrolling 60px
  if (y > 60) {
    nav.style.height = '52px';
    nav.style.boxShadow = 'var(--shadow-sm)';
  } else {
    nav.style.height = '60px';
    nav.style.boxShadow = 'none';
  }

  // Active section highlight
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (y >= top) current = sec.id;
  });

  navLinks.forEach(link => {
    link.style.color = '';
    link.style.background = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
      link.style.background = 'var(--accent-soft)';
    }
  });

  lastScroll = y;
}, { passive: true });

/* ============================================================
   SMOOTH SCROLL OFFSET (account for fixed nav)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});
