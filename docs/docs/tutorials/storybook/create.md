---
sidebar_position: 1
---

# Criando seu arquivo stories

## Para começar: o que é uma story? 🤔
Basicamente uma história é o estado renderizado de um componente qualquer. O mesmo pode ter múltiplas histórias devido aos diferentes estados que um componente pode suportar

## Formato do arquivo
Na mesma pasta do componente, criamos um arquivo com mesmo nome do componente entretanto com o formato .stories.tsx.
Exemplo:
`button.tsx -> button.stories.tsx`

Feito isso, podemos já criar nosso componente no storybook

## Export padrão do arquivo stories

Esse export controla como o Storybook lista suas histórias e fornece as informações usadas pelos addons (como por exemplo o addon padrão que pega os tipos do componente e já monta os controles para cada tipo).
Exemplo:

```tsx title="atomComponent.stories.tsx"
import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AtomComponent } from "./atomComponent";

export default {
	title: "Atoms/AtomComponent",
	component: AtomComponent,
} as ComponentMeta<typeof AtomComponent>;
```

:::tip Dica
Para que os addons pegue as informações corretamente de seu componente este deve estar importando da maneira acima somente.
Caso seja `import AtomComponent from "./atomComponent"` por exemplo, os controles gerados do seu componente a partir de seus tipos não serão criados
:::

## Criando suas stories

Com o export default criado podemos já criar nossa primeira story \o/.
Para isso basta colocar após o export:
```tsx
export const Primary = () => <AtomComponent primary>Button</AtomComponent>;
```
dessa forma é criado a story do AtomComponente com status primary.

:::info Dica

O storybook recomenda que a story seja UpperCamelCase

:::

Também podemos mudar o título de uma story caso queira um nome mais claro. Para mudar o título da story Primary, basta:
```tsx
Primary.storyName = "Eu sou o título da story primary"
```

## Nossa vou ter que fazer isso tudo sempre? 🥱
Não! O plop.js foi reconfigurado de forma que quando criamos um componente nele, automaticamente já cria o export e uma story padrão.
Lembrando que o comando do plop é `npm run plop`

No arquivo stories, só mudaremos ele caso queiramos mostrar mais de uma story ou alterar algum controle de props se desejar


