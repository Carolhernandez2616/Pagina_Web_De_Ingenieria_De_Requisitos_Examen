// ── Active nav on scroll ──
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');
const backTop  = document.getElementById('back-top');

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(n => n.classList.remove('active'));
      const active = document.querySelector(`.nav-item[href="#${e.target.id}"]`);
      if (active) {
        active.classList.add('active');
        active.scrollIntoView({ block: 'nearest' });
      }
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => obs.observe(s));

// ── Back to top visibility ──
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
});

// ── Sidebar toggle (mobile) ──
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Close sidebar on nav click (mobile)
navItems.forEach(n => n.addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
}));

// Year in footer
document.getElementById('footer-year').textContent = new Date().getFullYear();
