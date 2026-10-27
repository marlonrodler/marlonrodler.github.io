# marlonrodler.github.io

Portfólio de Marlon Rodler. Site estático, sem framework e sem dependências: HTML gerado por um script Node, um CSS e um JavaScript pequeno.

## Estrutura

```text
content/pt-BR.mjs   textos e dados do site (é aqui que se edita o conteúdo)
src/template.mjs    o HTML da página, montado a partir do conteúdo
src/icons.mjs       ícones em SVG
build.mjs           gera index.html a partir do conteúdo
assets/site.css     estilos (tokens de cor, tipo e espaço no topo do arquivo)
assets/site.js      tema claro/escuro/automático, menu do celular
assets/img/         imagens otimizadas (WebP), imagem de compartilhamento e ícone
index.html          arquivo gerado: não edite à mão
```

## Rodar localmente

Precisa de Node.js 18 ou mais novo.

```bash
npm run build            # gera o index.html
python3 -m http.server 8080   # ou qualquer servidor estático
```

Abra http://localhost:8080. O site usa caminhos a partir da raiz (`/assets/...`), então abra pelo servidor, não clicando no arquivo.

## Editar o conteúdo

1. Edite `content/pt-BR.mjs`.
2. Rode `npm run build`.
3. Faça o commit do `index.html` gerado junto com a mudança.

Links de contato vazios (`null`) não aparecem no site. Para trocar uma tela de projeto, coloque a imagem em `assets/img/` (WebP, com largura e altura reais) e ajuste o `media` do projeto.

## Versão em inglês

1. Copie `content/pt-BR.mjs` para `content/en.mjs`, traduza e troque `lang: 'en'` e `path: 'en/'`.
2. Em `build.mjs`, importe o arquivo e adicione à lista `languages`.
3. Preencha `ui.otherLanguage` nos dois arquivos para o link de troca de idioma aparecer no menu.

## Publicar

O GitHub Pages publica a branch `master` deste repositório direto, sem build no servidor: basta o `index.html` gerado estar commitado.

```bash
git push origin master
```
