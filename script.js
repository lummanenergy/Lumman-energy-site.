const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? '✕' : '☰';
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
  if(menuBtn) menuBtn.textContent='☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
