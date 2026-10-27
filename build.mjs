// Gera as páginas estáticas a partir do conteúdo: node build.mjs
// Cada idioma vira uma página: pt-BR em /index.html, inglês (quando existir) em /en/index.html.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from './src/template.mjs';
import ptBR from './content/pt-BR.mjs';
import en from './content/en.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const languages = [ptBR, en]; // o primeiro é o idioma padrão

for (const content of languages) {
  const dir = join(root, content.path);
  mkdirSync(dir, { recursive: true });
  const file = join(dir, 'index.html');
  writeFileSync(file, render(content, languages));
  console.log(`gerado: ${file.replace(root, '.')}`);
}
