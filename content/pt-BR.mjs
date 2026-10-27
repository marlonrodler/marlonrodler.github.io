// Conteúdo do portfólio em português (Brasil).
// Para criar a versão em inglês: copie este arquivo para content/en.mjs,
// traduza os textos e adicione o idioma em build.mjs.
// Só entra aqui o que foi verificado nos projetos (código, README ou site publicado).

export default {
  lang: 'pt-BR',
  path: '/', // onde a página é publicada
  meta: {
    title: 'Marlon Rodler · Desenvolvedor de software',
    description:
      'Portfólio de Marlon Rodler, desenvolvedor de software. Produtos completos em React, Node.js e Supabase, e ferramentas para desenvolvimento Salesforce.',
    url: 'https://marlonrodler.github.io/',
    image: 'https://marlonrodler.github.io/assets/img/og.png',
  },

  person: {
    name: 'Marlon Rodler',
    role: 'Desenvolvedor de software',
    photo: { src: '/assets/img/marlon-320.webp', alt: 'Foto de Marlon Rodler' },
  },

  // Deixe null o que ainda não tem; o site esconde o link.
  links: {
    github: 'https://github.com/marlonrodler',
    linkedin: null, // ex.: 'https://www.linkedin.com/in/seu-perfil/'
    email: null, // ex.: 'voce@exemplo.com'
  },

  ui: {
    skip: 'Pular para o conteúdo',
    nav: { projects: 'Projetos', about: 'Sobre', contact: 'Contato' },
    menu: 'Menu',
    closeMenu: 'Fechar menu',
    theme: { label: 'Tema', auto: 'Automático', light: 'Claro', dark: 'Escuro' },
    otherLanguage: null, // ex.: { label: 'English', href: '/en/' }
    openApp: 'Abrir o app',
    viewCode: 'Ver o código',
    privateCode: 'Código privado',
    problem: 'O problema',
    solution: 'O que eu construí',
    highlights: 'Destaques',
    stack: 'Tecnologias',
    role: 'Minha parte',
    screenshotNote: 'Telas reais do site publicado.',
    newTab: '(abre em nova aba)',
    footer: 'Site estático feito à mão: HTML, CSS e um pouco de JavaScript.',
    footerCode: 'Código do site',
  },

  hero: {
    title: 'Construo produtos de software do começo ao fim.',
    lead:
      'Defino o problema, desenho a interface, modelo os dados e coloco no ar. No trabalho, desenvolvo em Salesforce; nos projetos próprios, uso React, Node.js e Supabase.',
    primary: 'Ver projetos',
    secondary: 'Entrar em contato',
    indexTitle: 'Projetos no ar',
  },

  featuredTitle: 'Projetos em destaque',
  featuredLead: 'Três produtos publicados, cada um nascido de um problema concreto.',

  featured: [
    {
      id: 'player-ascend',
      name: 'Player Ascend',
      kind: 'App web para jogadores de ARAM Desordem (League of Legends)',
      theme: 'ascend',
      problem:
        'O ARAM Desordem não tem fila ranqueada oficial. Quem joga esse modo não tem como saber se está evoluindo de uma partida para a outra.',
      solution:
        'Um agente no computador do jogador lê as partidas com o LoL aberto e envia para o site, que dá uma nota para cada partida e acompanha o progresso ao longo do tempo.',
      highlights: [
        'Performance Score: uma nota de 0 a 100 por partida, que vai além do KDA.',
        'Ascend Points e uma escada própria de 10 níveis, de Papelão a Lendário.',
        'Comparação com amigos e placar geral só para quem ativa: por padrão, só você vê os seus dados.',
        'Contas aprovadas à mão e inativadas após 20 dias sem uso, para caber no plano gratuito.',
      ],
      stack: ['React', 'Vite', 'Supabase', 'Vercel', 'Data Dragon (Riot)'],
      role: 'Projeto individual: produto, interface, dados e publicação.',
      links: { app: 'https://playerascend.vercel.app/', code: null },
      media: {
        type: 'browser+phone',
        desktop: { src: '/assets/img/player-ascend-desktop-800.webp', w: 800, h: 500, alt: 'Tela inicial do Player Ascend no computador, com login e a explicação de Performance Score, Ascend Points e níveis' },
        phone: { src: '/assets/img/player-ascend-mobile-375.webp', w: 375, h: 812, alt: 'Tela de login do Player Ascend no celular, com a escada de níveis' },
        host: 'playerascend.vercel.app',
      },
    },
    {
      id: 'owldit',
      name: 'Owldit',
      kind: 'App instalável que avisa sobre balanços de ações da B3',
      theme: 'owldit',
      problem:
        'Acompanhar balanços trimestrais e fatos relevantes de cada empresa da carteira toma tempo, e para quem não é da área nem fica claro o que olhar.',
      solution:
        'Um app que acompanha as ações escolhidas e manda um aviso simples no celular ou no computador quando sai um balanço ou fato relevante. Ele avisa; não recomenda compra nem venda.',
      highlights: [
        'Instalável como app (PWA), com notificações Web Push no celular e no computador.',
        'Interface em português e inglês, com tema claro, escuro ou automático.',
      ],
      stack: ['React', 'Vite', 'PWA', 'Web Push', 'Supabase', 'Vercel'],
      role: 'Projeto individual: produto, interface, dados e publicação.',
      links: { app: 'https://owldit.vercel.app/', code: null },
      media: {
        type: 'phone',
        phone: { src: '/assets/img/owldit-mobile-375.webp', w: 375, h: 812, alt: 'Tela de entrada do Owldit no celular, com a coruja e o formulário de login' },
      },
    },
    {
      id: 'reldor',
      name: 'Reldor',
      kind: 'Ferramenta de linha de comando e plugin de IA para desenvolvimento Salesforce',
      theme: 'reldor',
      problem:
        'A IA escreve código Salesforce rápido, mas não enxerga a org inteira: o flow que roda antes da trigger, a regra que quebra o teste de outro time. E o Git compara linhas, não itens de metadado, então dois devs no mesmo profile viram conflito.',
      solution:
        'Um comando que monta um índice do projeto e calcula esses fatos com scripts, e um plugin que ensina a IA (Kiro ou Claude Code) a usar o comando. Quem descobre os fatos é o script, não a IA, por isso as respostas se repetem.',
      highlights: [
        'Mostra o que acontece quando um registro é salvo, na ordem real de execução.',
        'Merge item a item de profiles e permission sets, sem conflito falso.',
        'Commit limpo: separa o seu trabalho do que veio da org no retrieve.',
        'Não executa nada no Git nem na org: confere e entrega os comandos prontos.',
        '107 testes rodando no GitHub Actions, em Windows e Ubuntu, com Node 18 e 22.',
      ],
      stack: ['Node.js', 'MCP', 'GitHub Actions', 'Salesforce CLI'],
      role: 'Projeto individual: design da ferramenta, código, testes e documentação.',
      links: { app: null, code: 'https://github.com/marlonrodler/reldor' },
      media: {
        type: 'terminal',
        title: 'Como o Reldor funciona',
        lines: [
          ['you', 'Você fala'],
          ['arrow', 'a IA, com a skill do Reldor'],
          ['arrow', 'roda o comando reldor'],
          ['arrow', 'scripts leem o índice do projeto'],
          ['back', 'o comando devolve fatos em JSON'],
          ['back', 'a IA explica o resultado'],
        ],
        footnote: 'Só lê metadados, nunca registros, e roda na máquina de quem usa.',
      },
    },
  ],

  othersTitle: 'Outros projetos',
  othersLead:
    'Projetos de estudo em React, anteriores ao uso de IA no meu fluxo. Estão passando por uma modernização de visual, desempenho e acessibilidade.',
  others: [
    {
      name: 'Typing Speed',
      summary: 'Jogo de digitação em português: cada palavra certa soma pontos e segundos no relógio.',
      stack: ['React'],
      status: 'Em modernização',
      links: { app: 'https://marlonrodler.github.io/typing-speed/', code: 'https://github.com/marlonrodler/typing-speed' },
    },
    {
      name: 'Champions Challenge',
      summary: 'Desafio para acertar o nome de todos os campeões de League of Legends antes de o tempo acabar.',
      stack: ['React'],
      status: 'Em modernização',
      links: { app: 'https://marlonrodler.github.io/leagueoflegends-game/', code: 'https://github.com/marlonrodler/leagueoflegends-game' },
    },
    {
      name: 'Pokédex',
      summary: 'Busca de Pokémon por nome ou número, com os dados da PokéAPI.',
      stack: ['React'],
      status: 'Em modernização',
      links: { app: 'https://marlonrodler.github.io/pokedex-react/', code: 'https://github.com/marlonrodler/pokedex-react' },
    },
  ],

  about: {
    title: 'Sobre',
    paragraphs: [
      'Sou desenvolvedor de software. No dia a dia, trabalho com desenvolvimento Salesforce: Apex, Lightning Web Components e o fluxo de entrega entre ambientes.',
      'Fora do trabalho, construo produtos próprios do começo ao fim. Começo pelo problema de quem vai usar, desenho a interface, modelo os dados e publico. Dou atenção especial ao que evita erro humano: regras que o sistema confere sozinho, textos que explicam o próximo passo, telas que funcionam bem no celular.',
    ],
  },

  skillsTitle: 'O que eu uso',
  skillsLead: 'Agrupado pelo que resolve, com o projeto onde aparece.',
  skills: [
    { group: 'Interfaces', items: ['React', 'Vite', 'HTML e CSS acessíveis', 'PWA'], where: 'Player Ascend, Owldit' },
    { group: 'Dados e servidor', items: ['Supabase (Postgres e autenticação)', 'Node.js', 'Web Push'], where: 'Player Ascend, Owldit, Reldor' },
    { group: 'Salesforce', items: ['Apex', 'Lightning Web Components', 'Salesforce CLI', 'fflib'], where: 'Trabalho e Reldor' },
    { group: 'Qualidade e entrega', items: ['Git', 'GitHub Actions', 'Testes automatizados', 'Vercel', 'GitHub Pages'], where: 'Reldor e todos os sites' },
  ],

  contact: {
    title: 'Contato',
    lead: 'Para conversar sobre uma vaga, um projeto ou algum dos produtos, me chame por aqui.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
};
