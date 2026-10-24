document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menú');
  nav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.matchMedia('(min-width: 801px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px 35px 0px' });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

document.querySelector('#year').textContent = new Date().getFullYear();

const dateInput = document.querySelector('#date');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = localToday;

document.querySelector('#order-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const product = document.querySelector('#product').value.trim();
  const date = dateInput.value;
  const details = document.querySelector('#details').value.trim();
  const lines = ['Hola Paola, conocí Repostería M y C en la web y quisiera consultar por un pedido.'];
  if (product) lines.push(`Preparación: ${product}`);
  if (date) {
    const [year, month, day] = date.split('-');
    lines.push(`Fecha: ${day}/${month}/${year}`);
  }
  if (details) lines.push(`Mi idea: ${details}`);
  lines.push('¿Podemos conversar los detalles?');
  window.open(`https://wa.me/56961630944?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
});
