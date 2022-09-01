# Criando uma página independente

## Estrutura

Pode ser um arquivo **Markdown ou React**. Este é localizado dentro de `/src/pages` e o roteamento funciona como no next. Por exemplo:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

Temos como amostra a nossa própria Home localizada em `src/pages/index.js`.
Lembrando que usando os formatos .mdx ou .md ainda terá as features mostradas [aqui](../docusaurus/markdownFeatures.mdx) 