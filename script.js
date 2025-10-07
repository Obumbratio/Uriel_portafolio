const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');
const yearSpan = document.getElementById('current-year');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
