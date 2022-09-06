---
sidebar_position: 2
---

# Criando templates e modificando os argumentos de sua story

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

