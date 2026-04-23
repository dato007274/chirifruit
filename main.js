// ── NAVBAR SCROLL + HERO STATE + PARALLAX ──
const navbar = document.getElementById('navbar');
const heroFilm = document.getElementById('heroFilm');
const heroVideo = document.getElementById('heroVideo');

if (navbar) {
  const onScroll = () => {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);

    if (heroFilm) {
      const heroBottom = heroFilm.getBoundingClientRect().bottom;
      if (heroBottom > 80) {
        navbar.classList.add('nav-hero');
      } else {
        navbar.classList.remove('nav-hero');
      }
    }

    // Parallax: video drifts upward at half scroll speed while hero is visible
    if (heroVideo && heroFilm) {
      const heroRect = heroFilm.getBoundingClientRect();
      if (heroRect.bottom > 0) {
        const offset = window.scrollY * 0.35;
        heroVideo.style.transform = `translateY(${offset}px)`;
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  });
});

// ── VIDEO GALLERY — HOVER TO PLAY ──
document.querySelectorAll('.vgallery-card').forEach(card => {
  const video = card.querySelector('.vgallery-video');
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  // Touch support: tap to toggle
  card.addEventListener('click', () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
});

// ── INTERSECTION OBSERVER (scroll-reveal) ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.product-card, .value-card, .branch-card, .trust-item, .vgallery-card').forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(28px)';
  el.style.transition = `opacity 0.55s ${i * 0.07}s ease, transform 0.55s ${i * 0.07}s ease`;
  revealObserver.observe(el);
});

const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);

// ── SHOP FILTERS ──
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

// ── CONTACT FORM ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = contactForm.querySelector('[type=submit]');
    const orig = btn.textContent;
    btn.textContent = 'გაგზავნილია ✓';
    btn.style.background = 'var(--green)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent      = orig;
      btn.style.background = '';
      btn.disabled         = false;
      contactForm.reset();
    }, 3500);
  });
}
