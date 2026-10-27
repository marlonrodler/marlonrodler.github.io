import { icons } from './icons.mjs';

// Escapa texto para HTML.
const e = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const ext = (href, label, t, cls = 'btn', icon = icons.external) =>
  `<a class="${cls}" href="${e(href)}" target="_blank" rel="noopener noreferrer">${e(label)}${icon}<span class="sr-only"> ${e(t.ui.newTab)}</span></a>`;

const tags = (list) => `<ul class="tags">${list.map((s) => `<li>${e(s)}</li>`).join('')}</ul>`;

function media(p) {
  const m = p.media;
  const img = (i, cls, eager) =>
    `<img class="${cls}" src="${e(i.src)}" width="${i.w}" height="${i.h}" alt="${e(i.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  if (m.type === 'browser+phone') {
    return `<figure class="media media--combo">
      <div class="browser">
        <div class="browser__bar" aria-hidden="true"><span></span><span></span><span></span><em>${e(m.host)}</em></div>
        ${img(m.desktop, 'browser__shot')}
      </div>
      <div class="phone phone--overlap">${img(m.phone, 'phone__shot')}</div>
    </figure>`;
  }
  if (m.type === 'phone') {
    return `<figure class="media media--phone"><div class="phone">${img(m.phone, 'phone__shot')}</div></figure>`;
  }
  if (m.type === 'terminal') {
    const glyph = { you: '›', arrow: '→', back: '←' };
    return `<figure class="media media--terminal">
      <div class="terminal" role="img" aria-label="${e(m.title)}: ${e(m.lines.map((l) => l[1]).join(', '))}">
        <div class="terminal__bar" aria-hidden="true"><span></span><span></span><span></span><em>${e(m.title)}</em></div>
        <ol class="terminal__flow" aria-hidden="true">
          ${m.lines.map(([k, s]) => `<li class="flow--${k}"><b>${glyph[k]}</b>${e(s)}</li>`).join('')}
        </ol>
      </div>
      <figcaption>${e(m.footnote)}</figcaption>
    </figure>`;
  }
  return '';
}

function project(p, t, i) {
  const links = [
    p.links.app ? ext(p.links.app, t.ui.openApp, t, 'btn btn--filled') : '',
    p.links.code
      ? ext(p.links.code, t.ui.viewCode, t, p.links.app ? 'btn btn--plain' : 'btn btn--filled', icons.github)
      : `<span class="private">${icons.lock}${e(t.ui.privateCode)}</span>`,
  ].join('');
  return `<article class="project project--${e(p.theme)}${i % 2 ? ' project--flip' : ''}" id="${e(p.id)}" aria-labelledby="${e(p.id)}-title">
    <header class="project__head">
      <h3 id="${e(p.id)}-title">${e(p.name)}</h3>
      <p class="project__kind">${e(p.kind)}</p>
      <div class="project__actions">${links}</div>
    </header>
    ${media(p)}
    <div class="project__body">
      <dl class="project__story">
        <div><dt>${e(t.ui.problem)}</dt><dd>${e(p.problem)}</dd></div>
        <div><dt>${e(t.ui.solution)}</dt><dd>${e(p.solution)}</dd></div>
      </dl>
      <h4 class="project__sub">${e(t.ui.highlights)}</h4>
      <ul class="project__list">${p.highlights.map((h) => `<li>${e(h)}</li>`).join('')}</ul>
      <div class="project__meta">
        <div><h4 class="project__sub">${e(t.ui.stack)}</h4>${tags(p.stack)}</div>
        <div><h4 class="project__sub">${e(t.ui.role)}</h4><p>${e(p.role)}</p></div>
      </div>
    </div>
  </article>`;
}

function other(o, t) {
  return `<li class="other">
    ${o.image ? `<img class="other__shot" src="${e(o.image.src)}" width="${o.image.w}" height="${o.image.h}" alt="${e(o.image.alt)}" loading="lazy" decoding="async">` : ''}
    <div class="other__body">
      <h3>${e(o.name)}</h3>
      <p>${e(o.summary)}</p>
      ${tags(o.stack)}
      <span class="other__links">
        ${ext(o.links.app, t.ui.openApp, t, 'link')}
        ${ext(o.links.code, t.ui.viewCode, t, 'link', icons.github)}
      </span>
    </div>
  </li>`;
}

export function render(t, languages = [t]) {
  const L = t.links;
  const contactLinks = [
    L.linkedin && `<li>${ext(L.linkedin, t.contact.linkedin, t, 'contact-link', icons.linkedin)}</li>`,
    L.github && `<li>${ext(L.github, t.contact.github, t, 'contact-link', icons.github)}</li>`,
    L.email && `<li><a class="contact-link" href="mailto:${e(L.email)}">${e(t.contact.email)}${icons.mail}<span class="contact-link__detail">${e(L.email)}</span></a></li>`,
  ].filter(Boolean).join('');
  const headerSocial = [
    L.github && `<a class="icon-btn" href="${e(L.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub ${e(t.ui.newTab)}">${icons.github}</a>`,
    L.linkedin && `<a class="icon-btn" href="${e(L.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ${e(t.ui.newTab)}">${icons.linkedin}</a>`,
  ].filter(Boolean).join('');
  const nav = [
    ['#projetos', t.ui.nav.projects],
    ['#experiencia', t.ui.nav.experience],
    ['#sobre', t.ui.nav.about],
    ['#contato', t.ui.nav.contact],
  ];
  const themeBtn = (mode, icon) =>
    `<button type="button" class="seg__btn" data-theme-choice="${mode}" aria-pressed="false" title="${e(t.ui.theme[mode])}">${icon}<span class="sr-only">${e(t.ui.theme[mode])}</span></button>`;

  return `<!doctype html>
<html lang="${e(t.lang)}" data-theme="auto">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(t.meta.title)}</title>
<meta name="description" content="${e(t.meta.description)}">
<link rel="canonical" href="${e(t.meta.url)}">
${languages.length > 1 ? languages.map((l) => `<link rel="alternate" hreflang="${e(l.lang)}" href="${e(l.meta.url)}">`).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${e(languages[0].meta.url)}">` : ''}
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="website">
<meta property="og:locale" content="${e(t.lang.replace('-', '_'))}">
<meta property="og:title" content="${e(t.meta.title)}">
<meta property="og:description" content="${e(t.meta.description)}">
<meta property="og:url" content="${e(t.meta.url)}">
<meta property="og:image" content="${e(t.meta.image)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/images/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<script>try{var m=localStorage.getItem('theme');if(m==='light'||m==='dark')document.documentElement.dataset.theme=m}catch(_){}</script>
${languages.length > 1 && t.lang === languages[0].lang ? `<script>/* Na página padrão: vai para o idioma escolhido antes; na primeira visita, navegador fora do português vai para o inglês */try{var l=localStorage.getItem('lang'),p=${JSON.stringify(Object.fromEntries(languages.slice(1).map((l) => [l.lang, l.path])))};if(!l&&!/^pt/i.test(navigator.language||'')){l='en'}if(l&&p[l]&&!location.hash)location.replace(p[l])}catch(_){}</script>` : ''}
<link rel="stylesheet" href="/assets/site.css">
<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.person.name,
    jobTitle: t.person.role,
    url: t.meta.url,
    sameAs: [L.github, L.linkedin].filter(Boolean),
  })}</script>
</head>
<body>
<a class="skip" href="#conteudo">${e(t.ui.skip)}</a>
<header class="site-header" data-header>
  <div class="wrap site-header__inner">
    <a class="brand" href="#topo">${e(t.person.name)}</a>
    <nav class="nav" id="nav" aria-label="${e(t.ui.nav.label)}" data-nav>
      <ul>${nav.map(([h, l]) => `<li><a href="${h}">${e(l)}</a></li>`).join('')}</ul>
      <div class="nav__theme">
        <span>${e(t.ui.theme.label)}</span>
        <div class="seg" role="group" aria-label="${e(t.ui.theme.label)}">
        ${themeBtn('auto', icons.auto)}${themeBtn('light', icons.sun)}${themeBtn('dark', icons.moon)}
      </div>
      </div>
    </nav>
    <div class="site-header__tools">
      ${languages.length > 1 ? `<nav class="seg seg--lang" aria-label="${e(t.ui.language)}">${languages
        .map((l) => l.lang === t.lang
          ? `<a class="seg__btn seg__link" href="${e(l.path)}" aria-current="true" lang="${e(l.lang)}" title="${e(l.label)}">${e(l.short)}<span class="sr-only"> ${e(l.label)}</span></a>`
          : `<a class="seg__btn seg__link" href="${e(l.path)}" hreflang="${e(l.lang)}" lang="${e(l.lang)}" title="${e(l.label)}" data-lang-link>${e(l.short)}<span class="sr-only"> ${e(l.label)}</span></a>`)
        .join('')}</nav>` : ''}
      <div class="seg seg--theme" role="group" aria-label="${e(t.ui.theme.label)}">
        ${themeBtn('auto', icons.auto)}${themeBtn('light', icons.sun)}${themeBtn('dark', icons.moon)}
      </div>
      ${headerSocial}
      <button type="button" class="icon-btn nav-toggle" aria-expanded="false" aria-controls="nav" data-nav-toggle data-label-open="${e(t.ui.menu)}" data-label-close="${e(t.ui.closeMenu)}">
        <span class="nav-toggle__open">${icons.menu}</span><span class="nav-toggle__close">${icons.close}</span><span class="sr-only" data-nav-label>${e(t.ui.menu)}</span>
      </button>
    </div>
  </div>
</header>

<main id="conteudo" tabindex="-1">
  <section class="hero wrap" id="topo" aria-labelledby="hero-title">
    <div class="hero__intro">
      <p class="hero__who">
        ${t.person.photo ? `<img src="${e(t.person.photo.src)}" width="160" height="160" alt="${e(t.person.photo.alt)}" fetchpriority="high">` : ''}
        <span><strong>${e(t.person.name)}</strong><span>${e(t.person.role)}</span></span>
      </p>
      <h1 id="hero-title">${e(t.hero.title)}</h1>
      <p class="hero__lead">${e(t.hero.lead)}</p>
      <div class="hero__actions">
        <a class="btn btn--filled btn--accent" href="#projetos">${e(t.hero.primary)}</a>
        <a class="btn btn--plain" href="#contato">${e(t.hero.secondary)}</a>
      </div>
    </div>
    <nav class="hero__index" aria-label="${e(t.hero.indexTitle)}">
      <h2>${e(t.hero.indexTitle)}</h2>
      <ul>
        ${t.featured.map((p) => `<li><a href="#${e(p.id)}" class="idx idx--${e(p.theme)}"><span class="idx__mark" aria-hidden="true"></span><span class="idx__text"><strong>${e(p.name)}</strong><span>${e(p.kind)}</span></span></a></li>`).join('')}
      </ul>
    </nav>
  </section>

  <section class="section" id="projetos" aria-labelledby="projetos-title">
    <div class="wrap section__head">
      <h2 id="projetos-title">${e(t.featuredTitle)}</h2>
      <p>${e(t.featuredLead)}</p>
      <p class="note">${e(t.ui.screenshotNote)}</p>
    </div>
    <div class="wrap projects">
      ${t.featured.map((p, i) => project(p, t, i)).join('\n')}
    </div>
  </section>

  <section class="section" id="experiencia" aria-labelledby="experiencia-title">
    <div class="wrap section__head">
      <h2 id="experiencia-title">${e(t.experienceTitle)}</h2>
      <p>${e(t.experienceLead)}</p>
    </div>
    <div class="wrap exp">
      <ol class="timeline">
        ${t.experience.map((x) => `<li class="job${x.current ? ' job--current' : ''}">
          <p class="job__period">${e(x.period)}</p>
          <div class="job__body">
            <h3>${e(x.role)}</h3>
            <p class="job__company">${e(x.company)}</p>
            <ul class="job__points">${x.points.map((pt) => `<li>${e(pt)}</li>`).join('')}</ul>
            ${tags(x.tags)}
          </div>
        </li>`).join('')}
      </ol>
      <aside class="creds">
        <section class="cred" aria-labelledby="cert-title">
          <h3 id="cert-title">${e(t.certificationsTitle)}</h3>
          <ul class="cert-list">${t.certifications.map((c) => `<li>${icons.check}<span>${e(c)}</span></li>`).join('')}</ul>
          <p class="cred__note">${e(t.otherCertifications)}</p>
          ${ext(t.certificationsLink.href, t.certificationsLink.label, t, 'link')}
        </section>
        <section class="cred" aria-labelledby="edu-title">
          <h3 id="edu-title">${e(t.educationTitle)}</h3>
          <ul class="edu-list">${t.education.map((d) => `<li><strong>${e(d.course)}</strong><span>${e(d.school)} · ${e(d.period)}</span></li>`).join('')}</ul>
        </section>
      </aside>
    </div>
  </section>

  <section class="section" id="outros" aria-labelledby="outros-title">
    <div class="wrap section__head">
      <h2 id="outros-title">${e(t.othersTitle)}</h2>
      <p>${e(t.othersLead)}</p>
    </div>
    <div class="wrap"><ul class="others">${t.others.map((o) => other(o, t)).join('')}</ul></div>
  </section>

  <section class="section wrap about" id="sobre" aria-labelledby="sobre-title">
    <div class="about__text">
      <h2 id="sobre-title">${e(t.about.title)}</h2>
      ${t.about.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}
    </div>
    <div class="about__skills">
      <h2 class="h3">${e(t.skillsTitle)}</h2>
      <p class="muted">${e(t.skillsLead)}</p>
      <dl class="skills">
        ${t.skills.map((s) => `<div class="skill"><dt>${e(s.group)}</dt><dd><span>${s.items.map(e).join(', ')}</span><small>${e(s.where)}</small></dd></div>`).join('')}
      </dl>
    </div>
  </section>

  <section class="section wrap contact" id="contato" aria-labelledby="contato-title">
    <h2 id="contato-title">${e(t.contact.title)}</h2>
    <p>${e(t.contact.lead)}</p>
    <ul class="contact__links">${contactLinks}</ul>
  </section>
</main>

<footer class="site-footer">
  <div class="wrap site-footer__inner">
    <p>© <span data-year>${new Date().getFullYear()}</span> ${e(t.person.name)}</p>
    <p>${e(t.ui.footer)} <a href="https://github.com/marlonrodler/marlonrodler.github.io" target="_blank" rel="noopener noreferrer">${e(t.ui.footerCode)}<span class="sr-only"> ${e(t.ui.newTab)}</span></a></p>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}
