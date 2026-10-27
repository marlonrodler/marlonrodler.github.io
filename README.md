# marlonrodler.github.io

Portfólio de Marlon Rodler. Site estático, sem framework e sem dependências: HTML gerado por um script Node, um CSS e um JavaScript pequeno.

## Estrutura

```text
content/pt-BR.mjs   textos em português (é aqui que se edita o conteúdo)
content/en.mjs      textos em inglês
src/template.mjs    o HTML da página, montado a partir do conteúdo
src/icons.mjs       ícones em SVG
build.mjs           gera index.html a partir do conteúdo
assets/site.css     estilos (tokens de cor, tipo e espaço no topo do arquivo)
assets/site.js      tema claro/escuro/automático, menu do celular
assets/img/         imagens otimizadas (WebP), imagem de compartilhamento e ícone
index.html          arquivos gerados: não edite à mão
en/index.html
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

## Idiomas

O site tem português (`/`) e inglês (`/en/`), com o seletor PT/EN no topo.

- Os textos ficam em `content/pt-BR.mjs` e `content/en.mjs`, com as mesmas chaves. Ao mudar um, mude o outro.
- A escolha de idioma fica guardada no navegador. Na primeira visita, quem usa o navegador em outro idioma que não português vai direto para o inglês.
- Para um idioma novo: crie `content/<idioma>.mjs`, importe em `build.mjs` e adicione à lista `languages`.

## Publicar

O GitHub Pages publica a branch `master` deste repositório direto, sem build no servidor: basta o `index.html` gerado estar commitado.

```bash
git push origin master
```
