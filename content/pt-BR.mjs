// Conteúdo do portfólio em português (Brasil).
// A versão em inglês fica em content/en.mjs, com as mesmas chaves.
// Só entra aqui o que foi verificado nos projetos (código, README ou site publicado).

export default {
  lang: 'pt-BR',
  short: 'PT',
  label: 'Português',
  path: '/', // onde a página é publicada
  meta: {
    title: 'Marlon Rodler · Desenvolvedor Salesforce',
    description:
      'Portfólio de Marlon Rodler, desenvolvedor Salesforce com 6 certificações. Apex, LWC, Flow e integrações no trabalho; aplicações web completas com React, Node.js e Supabase nos projetos próprios.',
    url: 'https://marlonrodler.github.io/',
    image: 'https://marlonrodler.github.io/assets/img/og.png',
  },

  person: {
    name: 'Marlon Rodler',
    role: 'Desenvolvedor Salesforce · 6x certificado',
    // Foto recortada, com fundo transparente (o círculo atrás vem do CSS). Use null para esconder.
    photo: { src: '/assets/img/marlon-160.webp', alt: 'Foto de Marlon Rodler' },
  },

  // Deixe null o que ainda não tem; o site esconde o link.
  links: {
    github: 'https://github.com/marlonrodler',
    linkedin: 'https://www.linkedin.com/in/marlonrodler/',
    email: null, // ex.: 'voce@exemplo.com' (deixe null para não mostrar)
  },

  ui: {
    skip: 'Pular para o conteúdo',
    nav: { label: 'Principal', projects: 'Projetos', experience: 'Experiência', about: 'Sobre', contact: 'Contato' },
    menu: 'Menu',
    closeMenu: 'Fechar menu',
    theme: { label: 'Tema', auto: 'Automático', light: 'Claro', dark: 'Escuro' },
    language: 'Idioma',
    openApp: 'Abrir o app',
    viewCode: 'Ver o código',
    privateCode: 'Código privado',
    problem: 'O problema',
    solution: 'O que eu fiz',
    highlights: 'Destaques',
    stack: 'Tecnologias',
    role: 'Minha participação',
    screenshotNote: 'As imagens são telas reais dos sites publicados.',
    statusHint: {
      Beta: 'No ar, em teste com usuários reais. Novas contas são aprovadas manualmente.',
      'Em desenvolvimento': 'O repositório tem a primeira versão, usada em uma apresentação. Uma nova versão está sendo construída.',
    },
    newTab: '(abre em nova aba)',
    footer: 'Site feito à mão, com HTML, CSS e um pouco de JavaScript.',
    footerCode: 'Código do site',
  },

  hero: {
    title: 'Desenvolvo na plataforma Salesforce e crio aplicações web, da ideia ao lançamento.',
    lead:
      'Há mais de 5 anos trabalho com a plataforma Salesforce, desenvolvendo com Apex, Lightning Web Components, Flow e integrações. Nos meus projetos, crio aplicações completas com React, Node.js e Supabase.',
    primary: 'Ver projetos',
    secondary: 'Entrar em contato',
    indexTitle: 'Projetos publicados',
  },

  featuredTitle: 'Projetos em destaque',
  featuredLead: 'Três projetos publicados, cada um criado para resolver um problema real.',

  featured: [
    {
      id: 'player-ascend',
      name: 'Player Ascend',
      status: 'Beta',
      kind: 'Aplicativo web para quem joga ARAM Desordem, de League of Legends',
      theme: 'ascend',
      problem:
        'O ARAM Desordem não tem fila ranqueada oficial. Quem joga esse modo não tem como saber se está melhorando de uma partida para a outra.',
      solution:
        'Um programa no computador do jogador lê as partidas enquanto o LoL está aberto e envia os dados para o site, que dá uma nota para cada partida e mostra a evolução ao longo do tempo.',
      highlights: [
        'Performance Score: nota de 0 a 100 para cada partida, que vai além do KDA.',
        'Ascend Points e uma escala própria de 10 níveis, do Papelão ao Lendário.',
        'Comparação com amigos e ranking geral só para quem quiser participar. Por padrão, só você vê os seus dados.',
        'Contas aprovadas manualmente e desativadas depois de 20 dias sem uso, para caber no plano gratuito.',
      ],
      stack: ['React', 'Vite', 'Supabase', 'Vercel', 'Data Dragon (Riot)'],
      role: 'Projeto feito sozinho: ideia, telas, banco de dados e publicação.',
      links: { app: 'https://playerascend.vercel.app/', code: null },
      media: {
        type: 'browser+phone',
        desktop: { src: '/assets/img/player-ascend-desktop-800.webp', w: 800, h: 500, alt: 'Tela inicial do Player Ascend no computador, com o login e a explicação de Performance Score, Ascend Points e níveis' },
        phone: { src: '/assets/img/player-ascend-mobile-375.webp', w: 375, h: 812, alt: 'Tela de login do Player Ascend no celular, com a escala de níveis' },
        host: 'playerascend.vercel.app',
      },
    },
    {
      id: 'owldit',
      name: 'Owldit',
      status: 'Beta',
      kind: 'Aplicativo que avisa quando saem os balanços das suas ações da B3',
      theme: 'owldit',
      problem:
        'Acompanhar os balanços trimestrais e os fatos relevantes de cada empresa da carteira dá trabalho. E quem não é da área nem sabe direito o que olhar.',
      solution:
        'Um aplicativo que acompanha as ações escolhidas e manda um aviso simples no celular ou no computador quando sai um balanço ou fato relevante. Ele só avisa: não recomenda comprar nem vender.',
      highlights: [
        'Pode ser instalado como aplicativo (PWA) e manda notificações no celular e no computador.',
        'Disponível em português e inglês, com tema claro, escuro ou automático.',
      ],
      stack: ['React', 'Vite', 'PWA', 'Web Push', 'Supabase', 'Vercel'],
      role: 'Projeto feito sozinho: ideia, telas, banco de dados e publicação.',
      links: { app: 'https://owldit.vercel.app/', code: null },
      media: {
        type: 'phone',
        phone: { src: '/assets/img/owldit-mobile-375.webp', w: 375, h: 812, alt: 'Tela de entrada do Owldit no celular, com a coruja e o formulário de login' },
      },
    },
    {
      id: 'reldor',
      name: 'Reldor',
      kind: 'Ferramenta de linha de comando, com plugin de IA, para quem desenvolve na plataforma Salesforce',
      theme: 'reldor',
      status: 'Em desenvolvimento',
      problem:
        'A IA escreve código para a plataforma Salesforce rápido, mas não enxerga a org inteira: o flow que roda antes da trigger, a regra que quebra o teste de outro time. Quem desenvolve só descobre o impacto depois, quando algo quebra.',
      solution:
        'Uma ferramenta que lê os metadados do projeto e levanta esses fatos com scripts, mais um plugin que ensina a IA a usá-la. A ideia é mostrar o impacto de cada mudança antes do commit.',
      highlights: [
        'Quem descobre os fatos é o script, não a IA, então a resposta é sempre a mesma.',
        'Feita para funcionar com o Kiro e o Claude Code.',
        'Não executa nada no Git nem na org: quem decide e roda os comandos é você.',
      ],
      stack: ['Node.js', 'MCP', 'GitHub Actions', 'Salesforce CLI'],
      role: 'Projeto feito sozinho: ideia, código, testes e documentação.',
      links: { app: null, code: 'https://github.com/marlonrodler/reldor' },
      media: {
        type: 'terminal',
        title: 'Como o Reldor funciona',
        lines: [
          ['you', 'Você faz um pedido'],
          ['arrow', 'a IA, com a skill do Reldor'],
          ['arrow', 'roda o comando reldor'],
          ['arrow', 'os scripts leem o índice do projeto'],
          ['back', 'o comando devolve os fatos em JSON'],
          ['back', 'a IA explica o resultado'],
        ],
        footnote: 'Lê só metadados, nunca registros, e roda no computador de quem usa.',
      },
    },
  ],

  experienceTitle: 'Experiência',
  experienceLead: 'Mais de 5 anos desenvolvendo na plataforma Salesforce, em projetos para grandes clientes dos setores financeiro, varejo e industrial.',
  experience: [
    {
      role: 'Desenvolvedor Salesforce',
      company: 'Ília Digital',
      period: 'mai. 2024 – atual',
      current: true,
      points: [
        'Desenvolvo em Apex (triggers, batches, schedules e integrações) e crio componentes em Lightning Web Components.',
        'Organizo o código com o framework fflib e os princípios SOLID, para facilitar a manutenção e os testes.',
        'Cuido da modelagem de dados e da segurança, participo da definição de requisitos com o negócio e ajudo a espalhar boas práticas no time.',
      ],
      tags: ['Apex', 'LWC', 'fflib', 'SOLID', 'Integrações'],
    },
    {
      role: 'Desenvolvedor Salesforce',
      company: 'Nescara',
      period: 'jan. 2022 – mai. 2024',
      points: [
        'Desenvolvi em Apex, com classes, triggers, batches, schedules e integrações.',
        'Criei componentes em Aura e Lightning Web Components.',
        'Fiz deploys em produção e versionei o trabalho com Salesforce DX e scratch orgs.',
      ],
      tags: ['Apex', 'Aura', 'LWC', 'Salesforce DX'],
    },
    {
      role: 'Desenvolvedor Salesforce',
      company: 'C3C Software',
      period: 'abr. 2021 – jan. 2022',
      points: [
        'Desenvolvi em Apex com orientação a objetos e SOLID: triggers, batches, schedules e integrações.',
        'Criei componentes em Aura e LWC e fiz deploys em produção.',
        'Desenhei soluções técnicas, repassei para o time e treinei quem estava chegando.',
      ],
      tags: ['Apex', 'Aura', 'LWC'],
    },
    {
      role: 'Desenvolvedor web back-end',
      company: 'SRVCloud',
      period: 'ago. 2020 – mar. 2021',
      points: ['Criei e mantive web services, com orientação a objetos e versionamento no Git.'],
      tags: ['Web services', 'Git'],
    },
  ],
  certificationsTitle: '6 certificações Salesforce',
  certifications: [
    'Platform Developer II',
    'Platform Developer I',
    'JavaScript Developer I',
    'Platform App Builder',
    'Administrator',
    'Associate',
  ],
  certificationsLink: { label: 'Ver no Trailblazer', href: 'https://trailblazer.me/id/marlonrodler' },
  otherCertifications: 'Também: Scrum Foundation.',
  educationTitle: 'Formação',
  education: [
    { course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', school: 'FATEC São Paulo', period: '2018 – 2021' },
    { course: 'Formação Salesforce', school: 'Pragma School', period: '2020 – 2021' },
    { course: 'Técnico em Informática', school: 'ETEC', period: '2017 – 2018' },
  ],

  othersTitle: 'Outros projetos',
  othersLead:
    'Projetos de estudo em React, feitos em 2023, antes de eu usar IA no dia a dia. Em 2026, ganharam visual novo, correções e testes.',
  others: [
    {
      name: 'Typing Speed',
      summary: 'Jogo de digitação em português: cada palavra certa vale pontos e mais segundos no relógio.',
      stack: ['React', 'Vite'],
      image: { src: '/assets/img/typing-speed-640.webp', w: 640, h: 422, alt: 'Partida do Typing Speed com tempo, pontos e quatro palavras para digitar' },
      links: { app: 'https://marlonrodler.github.io/typing-speed/', code: 'https://github.com/marlonrodler/typing-speed' },
    },
    {
      name: 'Champions Challenge',
      summary: 'Desafio de acertar o nome de todos os campeões de League of Legends antes que o tempo acabe.',
      stack: ['React', 'Vite', 'Data Dragon'],
      image: { src: '/assets/img/champions-challenge-640.webp', w: 640, h: 422, alt: 'Partida do Champions Challenge com cartas de campeões e o placar de acertos' },
      links: { app: 'https://marlonrodler.github.io/leagueoflegends-game/', code: 'https://github.com/marlonrodler/leagueoflegends-game' },
    },
    {
      name: 'Pokédex',
      summary: 'Pokédex com busca por nome ou número, tipos, atributos e descrição, usando a PokéAPI.',
      stack: ['React', 'Vite', 'PokéAPI'],
      image: { src: '/assets/img/pokedex-640.webp', w: 640, h: 422, alt: 'Pokédex vermelha mostrando o Charizard na tela' },
      links: { app: 'https://marlonrodler.github.io/pokedex-react/', code: 'https://github.com/marlonrodler/pokedex-react' },
    },
  ],

  about: {
    title: 'Sobre',
    paragraphs: [
      'Sou desenvolvedor Salesforce e crio soluções escaláveis com Apex, Lightning Web Components e integrações com sistemas externos, sempre pensando em desempenho, facilidade de manutenção e resultado para o negócio.',
      'Tenho experiência em projetos complexos, com processamento assíncrono, modelagem de dados e integrações via API. Além do código, uso bastante as ferramentas low-code da plataforma, principalmente o Flow Builder, seguindo as boas práticas da Salesforce.',
      'Nas horas livres, crio meus próprios projetos do zero até o lançamento: entendo o problema de quem vai usar, desenho as telas, monto o banco de dados e publico.',
    ],
  },

  skillsTitle: 'Ferramentas que uso',
  skillsLead: 'Separadas pelo tipo de trabalho, com o projeto onde cada uma aparece.',
  skills: [
    { group: 'Telas e interfaces', items: ['React', 'Vite', 'HTML e CSS com acessibilidade', 'PWA'], where: 'Player Ascend e Owldit' },
    { group: 'Banco de dados e servidor', items: ['Supabase (Postgres e login)', 'Node.js', 'Web Push'], where: 'Player Ascend, Owldit e Reldor' },
    { group: 'Salesforce', items: ['Apex', 'Lightning Web Components', 'Aura', 'SOQL', 'Flow Builder', 'Integrações via API', 'fflib', 'Salesforce DX e CLI'], where: 'No trabalho e no Reldor' },
    { group: 'Qualidade e publicação', items: ['Git', 'GitHub Actions', 'Testes automatizados', 'Vercel', 'GitHub Pages'], where: 'No Reldor e em todos os sites' },
  ],

  contact: {
    title: 'Contato',
    lead: 'Tem uma vaga para desenvolvedor ou quer conversar sobre algum projeto? Me chame no LinkedIn.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
};
