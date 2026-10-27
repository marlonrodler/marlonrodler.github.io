// Portfolio content in English. Same keys as content/pt-BR.mjs.
// Only things verified in the projects (code, README or published site) go here.

export default {
  lang: 'en',
  short: 'EN',
  label: 'English',
  path: '/en/',
  meta: {
    title: 'Marlon Rodler · Salesforce Developer',
    description:
      'Portfolio of Marlon Rodler, 6x certified Salesforce developer. Apex, LWC, Flow and integrations at work; complete web apps with React, Node.js and Supabase in personal projects.',
    url: 'https://marlonrodler.github.io/en/',
    image: 'https://marlonrodler.github.io/assets/img/og-en.png',
  },

  person: {
    name: 'Marlon Rodler',
    role: 'Salesforce Developer · 6x certified',
    photo: { src: '/assets/img/marlon-160.webp', alt: 'Photo of Marlon Rodler' },
  },

  links: {
    github: 'https://github.com/marlonrodler',
    linkedin: 'https://www.linkedin.com/in/marlonrodler/',
    email: null,
  },

  ui: {
    skip: 'Skip to content',
    nav: { label: 'Main', projects: 'Projects', experience: 'Experience', about: 'About', contact: 'Contact' },
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
    statusHint: { Beta: 'Live and being tested with real users. New accounts are approved manually.' },
    newTab: '(opens in a new tab)',
    footer: 'Hand-built site, with HTML, CSS and a little JavaScript.',
    footerCode: 'Site source code',
  },

  hero: {
    title: 'I develop on the Salesforce platform and build web apps, from idea to launch.',
    lead:
      'For over 5 years I’ve worked on the Salesforce platform, building with Apex, Lightning Web Components, Flow and integrations. In my own projects, I build complete apps with React, Node.js and Supabase.',
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
      status: 'Beta',
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
      status: 'Beta',
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
      kind: 'Command-line tool with an AI plugin for developers working on the Salesforce platform',
      theme: 'reldor',
      problem:
        'AI writes code for the Salesforce platform fast, but it can’t see the whole org: the flow that runs before the trigger, the rule that breaks another team’s test. On top of that, Git compares lines, not metadata items, so two developers editing the same profile end up in a conflict.',
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

  experienceTitle: 'Experience',
  experienceLead: 'Over 5 years developing on the Salesforce platform, on projects for large clients in finance, retail and manufacturing.',
  experience: [
    {
      role: 'Salesforce Developer',
      company: 'Ília Digital',
      period: 'May 2024 – present',
      current: true,
      points: [
        'I develop in Apex (triggers, batches, schedules and integrations) and build Lightning Web Components.',
        'I structure the code with the fflib framework and SOLID principles, to make it easier to maintain and test.',
        'I handle data modeling and security, help define requirements with the business and spread good practices across the team.',
      ],
      tags: ['Apex', 'LWC', 'fflib', 'SOLID', 'Integrations'],
    },
    {
      role: 'Salesforce Developer',
      company: 'Nescara',
      period: 'Jan 2022 – May 2024',
      points: [
        'Developed in Apex, with classes, triggers, batches, schedules and integrations.',
        'Built components with Aura and Lightning Web Components.',
        'Deployed to production and versioned work with Salesforce DX and scratch orgs.',
      ],
      tags: ['Apex', 'Aura', 'LWC', 'Salesforce DX'],
    },
    {
      role: 'Salesforce Developer',
      company: 'C3C Software',
      period: 'Apr 2021 – Jan 2022',
      points: [
        'Developed in Apex with object-oriented design and SOLID: triggers, batches, schedules and integrations.',
        'Built Aura and LWC components and deployed to production.',
        'Designed technical solutions, handed them off to the team and onboarded new members.',
      ],
      tags: ['Apex', 'Aura', 'LWC'],
    },
    {
      role: 'Back-end Web Developer',
      company: 'SRVCloud',
      period: 'Aug 2020 – Mar 2021',
      points: ['Built and maintained web services, with object-oriented design and Git version control.'],
      tags: ['Web services', 'Git'],
    },
  ],
  certificationsTitle: '6 Salesforce certifications',
  certifications: [
    'Platform Developer II',
    'Platform Developer I',
    'JavaScript Developer I',
    'Platform App Builder',
    'Administrator',
    'Associate',
  ],
  certificationsLink: { label: 'See on Trailblazer', href: 'https://trailblazer.me/id/marlonrodler' },
  otherCertifications: 'Also: Scrum Foundation.',
  educationTitle: 'Education',
  education: [
    { course: 'Associate degree in Systems Analysis and Development', school: 'FATEC São Paulo', period: '2018 – 2021' },
    { course: 'Salesforce training', school: 'Pragma School', period: '2020 – 2021' },
    { course: 'IT technical high school', school: 'ETEC', period: '2017 – 2018' },
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
      'I’m a Salesforce developer who builds scalable solutions with Apex, Lightning Web Components and integrations with external systems, always focused on performance, maintainability and real business impact.',
      'I’ve worked on complex projects involving asynchronous processing, data modeling and API integrations. Beyond code, I make heavy use of the platform’s low-code tools, especially Flow Builder, following Salesforce best practices.',
      'In my free time, I build my own projects from scratch to launch: I understand the problem of the people who will use it, design the screens, set up the database and ship.',
    ],
  },

  skillsTitle: 'Tools I use',
  skillsLead: 'Grouped by kind of work, with the project where each one shows up.',
  skills: [
    { group: 'Screens and interfaces', items: ['React', 'Vite', 'Accessible HTML and CSS', 'PWA'], where: 'Player Ascend and Owldit' },
    { group: 'Database and server', items: ['Supabase (Postgres and auth)', 'Node.js', 'Web Push'], where: 'Player Ascend, Owldit and Reldor' },
    { group: 'Salesforce', items: ['Apex', 'Lightning Web Components', 'Aura', 'SOQL', 'Flow Builder', 'API integrations', 'fflib', 'Salesforce DX and CLI'], where: 'At work and in Reldor' },
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
