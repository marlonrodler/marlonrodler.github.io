// Tema (automático, claro, escuro), menu do celular e cabeçalho ao rolar.
(() => {
  const root = document.documentElement;

  // Tema
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const current = () => root.dataset.theme || 'auto';
  const paint = () => buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.themeChoice === current())));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let afterPaint = () => {};
  const apply = (mode) => {
    root.dataset.theme = mode;
    try {
      if (mode === 'auto') localStorage.removeItem('theme');
      else localStorage.setItem('theme', mode);
    } catch (_) { /* navegação privada: o tema vale só nesta visita */ }
    paint();
    afterPaint();
  };
  const isDark = () => getComputedStyle(document.body).backgroundColor === 'rgb(0, 0, 0)';
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const mode = b.dataset.themeChoice;
      const prev = current();
      if (mode === prev) return;
      // A cor da página vai mudar? (ex.: trocar Automático por Escuro num sistema já escuro não muda nada)
      const before = isDark();
      root.dataset.theme = mode;
      const changes = isDark() !== before;
      root.dataset.theme = prev;
      if (!changes || !document.startViewTransition || reduce.matches) { apply(mode); return; }
      // O tema novo se espalha num círculo a partir do botão clicado
      const r = b.getBoundingClientRect();
      const x = r.left + r.width / 2, y = r.top + r.height / 2;
      root.style.setProperty('--vt-x', `${x}px`);
      root.style.setProperty('--vt-y', `${y}px`);
      root.style.setProperty('--vt-r', `${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px`);
      document.startViewTransition(() => apply(mode));
    })
  );
  paint();

  // "Gota" dos controles segmentados (tema e idioma): desliza até a opção ativa
  const segs = document.querySelectorAll('.seg');
  const placeThumb = (seg, animate) => {
    const thumb = seg.querySelector('.seg__thumb');
    const active = seg.querySelector('[aria-pressed="true"], [aria-current="true"]');
    if (!thumb || !active || !active.offsetWidth) return;
    const moved = thumb.style.getPropertyValue('--x') !== `${active.offsetLeft}px`;
    thumb.style.setProperty('--x', `${active.offsetLeft}px`);
    thumb.style.setProperty('--w', `${active.offsetWidth}px`);
    if (animate && moved && !reduce.matches) {
      thumb.classList.remove('is-moving');
      void thumb.offsetWidth; // reinicia a animação
      thumb.classList.add('is-moving');
      active.classList.remove('is-picked');
      void active.offsetWidth;
      active.classList.add('is-picked');
    }
  };
  segs.forEach((seg) => {
    const thumb = document.createElement('span');
    thumb.className = 'seg__thumb';
    thumb.setAttribute('aria-hidden', 'true');
    seg.prepend(thumb);
    seg.classList.add('has-thumb', 'no-anim');
    placeThumb(seg, false);
    requestAnimationFrame(() => requestAnimationFrame(() => seg.classList.remove('no-anim')));
    new ResizeObserver(() => { seg.classList.add('no-anim'); placeThumb(seg, false); requestAnimationFrame(() => seg.classList.remove('no-anim')); }).observe(seg);
  });
  // Depois de cada troca de tema, a gota vai até a opção nova (nos dois controles: topo e menu)
  afterPaint = () => segs.forEach((seg) => placeThumb(seg, true));

  // Idioma: a gota desliza e só depois a página troca
  document.querySelectorAll('[data-lang-link]').forEach((a) =>
    a.addEventListener('click', (ev) => {
      if (reduce.matches || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
      ev.preventDefault();
      const seg = a.closest('.seg');
      seg.querySelector('[aria-current="true"]')?.removeAttribute('aria-current');
      a.setAttribute('aria-current', 'true');
      placeThumb(seg, true);
      setTimeout(() => { location.href = a.href; }, 260);
    })
  );

  // Menu do celular
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const label = document.querySelector('[data-nav-label]');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    root.classList.toggle('nav-open', open);
    label.textContent = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
    // Teclado: ao abrir, o foco vai para o primeiro link do menu
    if (open && toggle.matches(':focus-visible')) setTimeout(() => nav.querySelector('a')?.focus(), 60);
  });
  nav?.addEventListener('click', (ev) => { if (ev.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && root.classList.contains('nav-open')) { setOpen(false); toggle.focus(); }
  });
  matchMedia('(min-width: 960px)').addEventListener('change', (m) => { if (m.matches) setOpen(false); });

  // Linha sob o cabeçalho só depois de rolar
  const header = document.querySelector('[data-header]');
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Idioma: lembra a escolha para a próxima visita
(() => {
  document.querySelectorAll('[data-lang-link]').forEach((a) =>
    a.addEventListener('click', () => {
      try { localStorage.setItem('lang', a.getAttribute('lang')); } catch (_) { /* sem armazenamento */ }
    })
  );
})();
