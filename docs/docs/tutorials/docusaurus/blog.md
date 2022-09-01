# Criando um post no blog

## Estrutura do arquivo
O arquivo deve ser criado dentro da pasta blog. 
A informação da data do post precisa estar contida ou no arquivo ou em sua pasta e no formato YYYY-MM-DD. Podendo fazer isso dos seguintes jeitos:

1. `blog/2022-09-05-assuntoDoPost.md`
2. `blog/assuntoDoPost/2022-09-05.md`
3. `blog/2022-09-05-assuntoDoPost/index.md`

## Setando algumas propriedades do post

Ao começo de um arquivo do blog devemos setar algumas informações como sua slug, título, autores e tags. Para isso basta colocar no início do arquivo dessa maneira:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings 
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings, intro]
---
```

:::info Authors

Dentro da pasta blog existe um arquivo authors.yml que é setado todas informações de todos autores que queremos que existam. 
```yml title="authors.yml"
amelia:
    name: Amélia Guerreiro
    title: Front End Engineer
    url: https://github.com/jujubaohime
    image_url: https://github.com/jujubaohime.png
```
Portanto, se esse autor já existe basta substituir `author: [nomeDoObjetoAutor]`. Nesse caso nomeDoObjetoAutor sendo amelia como no exemplo acima. 
Além disso, podemos ter mais de uma pessoa autora. Para isso basta adicionar no array author
:::


## Mostrando somente o resumo do post no feed do blog
Por padrão, no feed do blog aparece todo conteúdo do informação.

Entretanto imagine que temos um post longo e não queremos que toda sua informação apareça no feed do blog, poluindo a rolagem e sim somente uma parte introdútoria

Para isso basta usar a `<!--truncate-->` que acima dele só aparecerá a informação introdutória e o que tiver abaixo não aparecerá junto ao feed

```
Eu sou um resumo do que é esse post do blog

<!--truncate-->

Eu sou uma informação que só aparecerá na página da post 
...etc
```

## Funcionalidades markdown 

Funciona exatamente como na documentação como podemos ver [aqui](../docusaurus/markdownFeatures.mdx)
