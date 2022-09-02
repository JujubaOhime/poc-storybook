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

## Args e Templates
Imagina que para cada story precisaríamos sempre ter que passar quase todas as mesmas props de novo e de novo 🥱
```tsx
export const Primary = () => <Button backgroundColor="#ff0" size="small" label="Button"  />;
export const Secondary = () => <Button backgroundColor="#ff0" size="small" label="😄👍😍💯"  />;
export const Tertiary = () => <Button backgroundColor="#ff0" size="small" label="📚📕📈🤓"  />;
```

Para resolver esse problema podemos criar um "template" do componente
```
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
```
E reusar o template para cada story
```tsx
export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#ff0', size="small", label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
```

Introduzindo args nas stories do seu componente, você não só reduz a quantidade de código que precisa escrever, como também reduzimos a duplicação de props, como mostrado acima quando usamos spread na Primary story

Além disso podemos importar os args de uma story em outro arquivo stories
```tsx
import * as ButtonStories from './Button.stories';

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;
export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args }
  ],
  orientation: 'horizontal',
};
```

## Definindo args padrão

Caso queiramos que uma props seja padrão para todo stories daquele componente basta passar no export default dessa forma:
```tsx
import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    //👇 Agora todas stories terão primary em suas props
    primary: true,
  },
} as ComponentMeta<typeof Button>;
```

## Definindo controles personalizados

Digamos que tenha um componente que tenha `backgroundColor` como props e essa é do tipo string.
Devido backgroundColor ser desse tipo, na hora de mostrar os controles desse componente, será um campo string

![string field](./storybook.png)

Entretanto, é mais interessante que este campo seja um seletor de cor. E para mudar isso basta:
```tsx
export default {
  title: 'Button',
  component: Button,
  argsType:{
    backgroundColor: {
        control:{
            type: "color"
        }
    }
  }
} as ComponentMeta<typeof Button>;
```

Agora temos um seletor de cor ao invés de um campo string :)
![color field](./storybook-result.png)

Os controles podem ser redefinidos para quasqueir props e há [uma lista na documentação oficial do Storybook](https://storybook.js.org/docs/react/essentials/controls#annotation) de como mudar tais controles
