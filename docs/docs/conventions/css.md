# CSS

## 1. Princípios
- Legibilidade
- Modularização
- Performance

## 2. Sass
- Extensão `.scss`
- Sintaxe mais próxima a do CSS possível
- Evitar o uso de nesting
- Não usar `&` para concatenar nomes de classes

```scss
// errado
.class {
    display: block;

    span {
        color: red;
    }

    &-element {
        display: inline;
    }
}

// certo
.class {
    display: block;

    span {
        color: red;
    }
}
.class-element {
    display: inline;
}
```


## 3. Estrutura
- **abstracts**  - arquivos que não geram output (mixins, variables)
- **base**       - reset, grid e outros estilos gerais
- **components** - button, form, list, title, modal
- **modules**    - sessões que não se repetem (header, footer, …)
- **pages**      - index, artista, institucionais

## 4. Formatação
Para manter a formatação do CSS utilizamos o [Prettier](https://prettier.io/). Para configurar o Prettier:
- Instalar Prettier global `npm i -g prettier`
- Instalar plugin do Prettier no editor (https://prettier.io/docs/en/editors.html)
- Habilitar formatOnSave no editor (https://prettier.io/docs/en/editors.html)

```json
// VSCode config
"[javascript]": {
    "editor.formatOnSave": true
},
"[scss]": {
    "editor.formatOnSave": true
}
```


## 5. Seletores
- Não usar ID's 
- Seletores descendentes devem ter no máximo 3 níveis
- Não usar seletores qualificados `tag.class`

```scss
// errado
div.component {}
div.component .component-element li a {}

// certo
.component {}
.component-element a {}
```

- Não abreviar nomes de classes

```scss
// errado
.hdArt {}

// certo
.headerArtist {}
```


## 6. Propriedades/Valores
- Não usar `!important`

- Tempos são definidos em segundos.

```scss
// errado
.class {
    transition: width 200ms;
}

// certo
.class {
    transition: width 0.2s;
}
```

- Cores são definidas em hexadecimal e na forma abreviada

```scss
// errado
.class {
    color: #ffffff; 
    background: rgba(255, 0, 0, 0.1);
}

// certo
.class {
    color: #fff; 
    background: rgba(#f00, 0.1);
}
```

- Z-index estão definidos em `abstracts\_variabels.scss` e devem ser referenciados nas declarações.

```scss
// _variables.scss
$z-modal: 10;
$z-header: 11;
$z-nav: 12;

// _modal.scss
.modal {
    z-index: $z-modal;
}

// _header.scss
.header {
    z-index: $z-header;
}

// _nav.scss
.nav {
    z-index: $z-nav;
}
```

- Line-height de parágrafos e títulos são definidos sem unidade

```scss
// errado
.h1 {
    line-height: 32px;
}

// certo
.h1 {
    line-height: 1.6;
}
```

## 7. Componentes
- Em inglês
- Auto explicativos
- lowerCamelCase
- `-` indica um elemento filho do componente
- `.-` indica um modificador do componete, deve estar encadeado com a classe do componente
- `.is-` indica um estado do componente, deve estar encadeado com a classe do componente

```scss
// componentName
.card {}
// componentName-componentElement
.card-text {}
// componentName.-componentModifier
.card.-horizontal {}
// componentName.is-componentState
.card.is-on {}
```

```html
<div class="card -horizontal is-on">
    <span class="card-text">Letras</span>
</div>
```

### Checklist
Testar os componentes segundo os critérios:
- estados 
    * :hover
    * :disabled
    * erro
    * vazio
    * loading
- breakpoints
- overflow de texto

## 8. Modularização
Nunca coloque uma regra para o componente `.a {}` dentro do arquivo do componente `_b.scss`.

Exemplo:

```scss
// _card.scss
.card .button {
    float: left
}
```

```html
<!-- index.html -->
<div class="card">
    <button class="button">Click me!</button>
</div>
```
Solução 1:

```scss
// _card.scss
.card-button {
    float: left
}
```

```html
<!-- index.html -->
<div class="card">
    <button class="button card-button">Click me!</button>
</div>
```
Solução 2:

```scss
// _button.scss
.button.-floatLeft {
    float: left
}
```

```html
<!-- index.html -->
<div class="card">
    <button class="button -floatLeft">Click me!</button>
</div>
```

## 9. Utilitários
São usados para espaçamentos, posicionamentos, esconder conteúdo. Evitam ter que criar uma classe somente para setar esses valores. Começam sempre com `.u-`. ([_utils.scss](https://github.com/StudioSol/NovoLetras/blob/contribV3/app/web/contrib/assets/sass/base/_utils.scss))

```html
<div class="u-pos-r">
    <!-- position relative -->
</div>

<div class="u-to-l">
    <!-- position absolute, top 0, left 0 -->
</div>

<div class="u-hide-p">
    <!-- display none em celulares -->
</div>

<div class="u-space-s">
    <!-- margin bottom pequeno -->
</div>
```

## 10. Estáticos
### Imagens
Nomes das imagens devem seguir a estrutura `finalidade-local`, sendo:
- `finalidade` pra que serve o asset (_sprite_, _ico_, _loading_, _bg_, _illustration_)
- `local` em qual _component_, _module_ ou _page_ esse asset é usado.

```
// errado                  // certo
profile_ico.png            ico-profile.svg
SpritePlayer.svg           sprite-player.svg
login-loading.gif          loading-login.gif
bg-purple.jpg              bg-header.jpg
```

### Fontes embedadas
Nomes dos arquivos de fonte devem seguir a estrutura `familia-peso`.

```
// errado                 // certo
Roboto.woff               roboto-regular.woff
RobotoBoldWebFont.woff    roboto-bold.woff
```