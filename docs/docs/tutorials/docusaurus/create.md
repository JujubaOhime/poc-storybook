---
sidebar_position: 1
---

# Criando documentação

## Estrutura de pastas
Funciona basicamente igual o Next.js onde é auto gerado a url. É possível ser de forma diferente mas só geraria complexidade para o nosso projeto. 

Por exemplo, se quero criar uma categoria nova na sidebar a esquerda, basta:

    .
    ├── docs                          # Onde tem todas as documentações 
    │   ├── tutorials                 # Pasta onde fica todas docs tutoriais
    │   ├── conventions               # Pasta onde fica todas nossas convenções
    │   ├── novaCategoria             # Pasta da categoria que deseja criar
    │   |   |──postDaNovaCategoria.md # Aqui fica a postagem que você deseja criar da categoria
    │   |   |──_category_.json        # Arquivo de configuração da página introdutória da categoria     
    │   └── intro.md                  # Uma doc de introdução 
    └── ...

E aí como resultado temos na sidebar ao lado uma categoria nova com nome "novaCategoria" e com um post "postDaNovaCategoria". E sua url `docs/novaCategoria/postDaNovaCategoria`

## Personalizando categoria

É possível criamos um link para página da categoria, mudar sua posição na sidebar e alterar o nome. Perceba que o nome gerado estará em minúsculo assim como é sua slug na url e o nome do arquivo. 

Para alterar basta criar dentro da pasta da categoria o arquivo `_category_.json` e alterar de forma que:

```json
{
  "label": "Nova Categoria",   // o nome agora aparecerá na sidebar
  "position": 3,               // é a posição que deseja que ela apareça
  "link": {
    "slug": "nova-categoria"   // caso esteja vazio, a slug será a label
    "type": "generated-index", // é uma maneira rápida de gerar a página introdutória da categoria
    "description": "Uma descrição da nova categoria" // será o subtítulo da página gerada
  }
}
```

:::tip Posição

É recomendado que não coloque a position já que pode ser que a posição de uma categoria entre em conflito com outra. 
Quando a posição está vazia, será definida pela ordem alfabética

:::

:::note Link Type

Caso você queira criar seu próprio arquivo de introdução da categoria e não queira que seja autogerada, basta trocar para type `doc` colocando no objeto link `id` com o nome do arquivo que deseja criar. <br/>
Ou se você não quer que exista uma página introdutória da categoria, basta só não por o objeto link

:::

:::note Link slug

Caso sua label seja diferente do nome do arquivo, sugiro que coloque a slug igual ao nome do arquivo para manter uma url coesa. <br/>
Também é preciso quando há uma pasta dentro de pasta pois se não a url gerada será `/docs/pasta-de-dentro` ao invés de `/docs/pasta-de-fora/pasta-de-dentro`. 

:::

Mais informações sobre essa parte neste [link](https://docusaurus.io/pt-BR/docs/sidebar/items) 

## Criando a documentação

Esta pode ser no formato `.md` ou `.mdx` onde o [.mdx](https://mdxjs.com/) permite que usemos components react dentro da documentação. 

Criado o arquivo, em suas primeiras linhas podemos definir o título da página e como aparecerá na sidebar.

Para aparecer na primeira posição por exemplo basta colocar no arquivo:
```
---
sidebar_position: 1
---
```

Agora para definir o título da página assim como o texto que aparecerá na sidebar basta colocar 

```
# Título
```

Tá pronto o sorvetinho 🍨