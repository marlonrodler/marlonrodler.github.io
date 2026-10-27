// Portfolio content in English. Same keys as content/pt-BR.mjs.
// Only things verified in the projects (code, README or published site) go here.

export default {
  lang: 'en',
  short: 'EN',
  label: 'English',
  path: '/en/',
  meta: {
    title: 'Marlon Rodler · Software developer',
    description:
      'Portfolio of Marlon Rodler, software developer. Complete web apps built with React, Node.js and Supabase, and tools for Salesforce developers.',
    url: 'https://marlonrodler.github.io/en/',
    image: 'https://marlonrodler.github.io/assets/img/og-en.png',
  },

  person: {
    name: 'Marlon Rodler',
    role: 'Software developer',
    photo: { src: '/assets/img/marlon-160.webp', alt: 'Photo of Marlon Rodler' },
  },

  links: {
    github: 'https://github.com/marlonrodler',
    linkedin: 'https://www.linkedin.com/in/marlonrodler/',
    email: null,
  },

  ui: {
    skip: 'Skip to content',
    nav: { label: 'Main', projects: 'Projects', about: 'About', contact: 'Contact' },
    menu: 'Menu',
    closeMenu: 'Close menu',
    theme: { label: 'Theme', auto: 'Automatic', light: 'Light', dark: 'Dark' },
    language: 'Language',
    openApp: 'Open the app',
    viewCode: 'View the code',
    privateCode: 'Private code',
    problem: 'The problem',
    solution: 'What I built',
    highlights: 'Highlights',
    stack: 'Technologies',
    role: 'My role',
    screenshotNote: 'Images are real screens from the published sites.',
    newTab: '(opens in a new tab)',
    footer: 'Hand-built site, with HTML, CSS and a little JavaScript.',
    footerCode: 'Site source code',
  },

  hero: {
    title: 'I build web apps, from idea to launch.',
    lead:
      'I understand the problem, design the screens, set up the database and ship it. At work, I develop on Salesforce. In my own projects, I use React, Node.js and Supabase.',
    primary: 'See projects',
    secondary: 'Get in touch',
    indexTitle: 'Live projects',
  },

  featuredTitle: 'Featured projects',
  featuredLead: 'Three published projects, each built to solve a real problem.',

  featured: [
    {
      id: 'player-ascend',
      name: 'Player Ascend',
      kind: 'Web app for players of ARAM Mayhem, a League of Legends mode',
      theme: 'ascend',
      problem:
        'ARAM Mayhem has no official ranked queue. People who play this mode have no way to tell whether they are improving from one match to the next.',
      solution:
        'A program on the player’s computer reads matches while League of Legends is open and sends the data to the site, which scores every match and shows progress over time.',
      highlights: [
        'Performance Score: a 0 to 100 score for every match that goes beyond KDA.',
        'Ascend Points and a custom 10-tier ladder, from Cardboard to Legendary.',
        'Friend comparison and a global leaderboard only for people who opt in. By default, only you see your data.',
        'Accounts are approved by hand and deactivated after 20 days without use, to fit the free plan.',
      ],
      stack: ['React', 'Vite', 'Supabase', 'Vercel', 'Data Dragon (Riot)'],
      role: 'Solo project: idea, screens, database and deployment.',
      links: { app: 'https://playerascend.vercel.app/', code: null },
      media: {
        type: 'browser+phone',
        desktop: { src: '/assets/img/player-ascend-desktop-800.webp', w: 800, h: 500, alt: 'Player Ascend home screen on a computer, with the login and an overview of Performance Score, Ascend Points and tiers (in Portuguese)' },
        phone: { src: '/assets/img/player-ascend-mobile-375.webp', w: 375, h: 812, alt: 'Player Ascend login screen on a phone, with the tier ladder (in Portuguese)' },
        host: 'playerascend.vercel.app',
      },
    },
    {
      id: 'owldit',
      name: 'Owldit',
      kind: 'App that alerts you when earnings reports come out for your Brazilian stocks',
      theme: 'owldit',
      problem:
        'Keeping up with quarterly earnings and material facts for every company in a portfolio takes time. And people outside finance often don’t know what to look at.',
      solution:
        'An app that follows the stocks you choose and sends a simple alert to your phone or computer when an earnings report or material fact is released. It only alerts: it never tells you to buy or sell.',
      highlights: [
        'Installable as an app (PWA), with notifications on phone and computer.',
        'Available in Portuguese and English, with light, dark or automatic theme.',
      ],
      stack: ['React', 'Vite', 'PWA', 'Web Push', 'Supabase', 'Vercel'],
      role: 'Solo project: idea, screens, database and deployment.',
      links: { app: 'https://owldit.vercel.app/', code: null },
      media: {
        type: 'phone',
        phone: { src: '/assets/img/owldit-mobile-375.webp', w: 375, h: 812, alt: 'Owldit sign-in screen on a phone, with the owl and the login form (in Portuguese)' },
      },
    },
    {
      id: 'reldor',
      name: 'Reldor',
      kind: 'Command-line tool with an AI plugin for Salesforce developers',
      theme: 'reldor',
      problem:
        'AI writes Salesforce code fast, but it can’t see the whole org: the flow that runs before the trigger, the rule that breaks another team’s test. On top of that, Git compares lines, not metadata items, so two developers editing the same profile end up in a conflict.',
      solution:
        'A command that builds an index of the project and works out those facts with scripts, plus a plugin that teaches the AI (Kiro or Claude Code) to use that command. The script finds the facts, not the AI, so the answer is always the same.',
      highlights: [
        'Shows what happens when a record is saved, in the real order of execution.',
        'Merges profiles and permission sets item by item, with no false conflicts.',
        'Clean commit: separates your work from what came from the org in a retrieve.',
        'Never runs anything in Git or the org: it checks and hands you ready-to-run commands.',
        '107 automated tests on GitHub Actions, on Windows and Ubuntu, with Node 18 and 22.',
      ],
      stack: ['Node.js', 'MCP', 'GitHub Actions', 'Salesforce CLI'],
      role: 'Solo project: idea, code, tests and documentation.',
      links: { app: null, code: 'https://github.com/marlonrodler/reldor' },
      media: {
        type: 'terminal',
        title: 'How Reldor works',
        lines: [
          ['you', 'You make a request'],
          ['arrow', 'the AI, with the Reldor skill'],
          ['arrow', 'runs the reldor command'],
          ['arrow', 'scripts read the project index'],
          ['back', 'the command returns the facts as JSON'],
          ['back', 'the AI explains the result'],
        ],
        footnote: 'Reads metadata only, never records, and runs on the user’s own computer.',
      },
    },
  ],

  othersTitle: 'Other projects',
  othersLead:
    'React study projects built in 2023, before I used AI in my daily work. In 2026 they got a new look, bug fixes and tests.',
  others: [
    {
      name: 'Typing Speed',
      summary: 'Typing game in Portuguese: every correct word earns points and extra seconds on the clock.',
      stack: ['React', 'Vite'],
      image: { src: '/assets/img/typing-speed-640.webp', w: 640, h: 422, alt: 'Typing Speed match showing time, points and four words to type' },
      links: { app: 'https://marlonrodler.github.io/typing-speed/', code: 'https://github.com/marlonrodler/typing-speed' },
    },
    {
      name: 'Champions Challenge',
      summary: 'Challenge to name every League of Legends champion before time runs out.',
      stack: ['React', 'Vite', 'Data Dragon'],
      image: { src: '/assets/img/champions-challenge-640.webp', w: 640, h: 422, alt: 'Champions Challenge match with champion cards and the score' },
      links: { app: 'https://marlonrodler.github.io/leagueoflegends-game/', code: 'https://github.com/marlonrodler/leagueoflegends-game' },
    },
    {
      name: 'Pokédex',
      summary: 'Pokédex with search by name or number, types, stats and descriptions, using PokéAPI.',
      stack: ['React', 'Vite', 'PokéAPI'],
      image: { src: '/assets/img/pokedex-640.webp', w: 640, h: 422, alt: 'Red Pokédex showing Charizard on its screen' },
      links: { app: 'https://marlonrodler.github.io/pokedex-react/', code: 'https://github.com/marlonrodler/pokedex-react' },
    },
  ],

  about: {
    title: 'About',
    paragraphs: [
      'I’m a software developer. At work, I develop on Salesforce: Apex, Lightning Web Components and the delivery process between environments.',
      'In my free time, I build my own projects from scratch to launch. I start by understanding the problem of the people who will use it, then design the screens, set up the database and ship. I pay special attention to what prevents mistakes: rules the system checks on its own, text that explains the next step, and screens that work well on a phone.',
    ],
  },

  skillsTitle: 'Tools I use',
  skillsLead: 'Grouped by kind of work, with the project where each one shows up.',
  skills: [
    { group: 'Screens and interfaces', items: ['React', 'Vite', 'Accessible HTML and CSS', 'PWA'], where: 'Player Ascend and Owldit' },
    { group: 'Database and server', items: ['Supabase (Postgres and auth)', 'Node.js', 'Web Push'], where: 'Player Ascend, Owldit and Reldor' },
    { group: 'Salesforce', items: ['Apex', 'Lightning Web Components', 'Salesforce CLI', 'fflib'], where: 'At work and in Reldor' },
    { group: 'Quality and deployment', items: ['Git', 'GitHub Actions', 'Automated tests', 'Vercel', 'GitHub Pages'], where: 'Reldor and every site' },
  ],

  contact: {
    title: 'Contact',
    lead: 'Hiring a developer or want to talk about one of my projects? Message me on LinkedIn.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
};
