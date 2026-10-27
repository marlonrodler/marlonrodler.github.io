// Tema (automático, claro, escuro), menu do celular e cabeçalho ao rolar.
(() => {
  const root = document.documentElement;

  // Tema
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const current = () => root.dataset.theme || 'auto';
  const paint = () => buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.themeChoice === current())));
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const mode = b.dataset.themeChoice;
      root.dataset.theme = mode;
      try {
        if (mode === 'auto') localStorage.removeItem('theme');
        else localStorage.setItem('theme', mode);
      } catch (_) { /* navegação privada: o tema vale só nesta visita */ }
      paint();
    })
  );
  paint();

  // Menu do celular
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const label = document.querySelector('[data-nav-label]');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    root.classList.toggle('nav-open', open);
    label.textContent = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
  };
  toggle?.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav?.addEventListener('click', (ev) => { if (ev.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && root.classList.contains('nav-open')) { setOpen(false); toggle.focus(); }
  });
  matchMedia('(min-width: 760px)').addEventListener('change', (m) => { if (m.matches) setOpen(false); });

  // Linha sob o cabeçalho só depois de rolar
  const header = document.querySelector('[data-header]');
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
