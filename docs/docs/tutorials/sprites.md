# Gerando Sprites

No Blog do Letras Academy utilizamos a biblioteca [svg-sprite](https://www.npmjs.com/package/svg-sprite) para gerar os sprites de ícones do projeto. 🖼

Existem 3 tipos de sprite:

1. Monochrome - é um sprite que só tem uma cor
2. Light - é um sprite que tem mais de uma cor, na sua versão light
3. Dark - é um sprite que tem mais de uma cor, na sua versão light

Para adicionar um ícone é só seguir os seguintes passos:

1. Adicionar o ícone à pasta public/icons/tipo

<img width="500" src="https://user-images.githubusercontent.com/52017306/162799500-6c85e970-451e-4c13-927b-0be7bbc259d3.png" />

2. Executar o comando `npm run sprite` dentro da pasta "home" ou `npm run home:sprite` dentro da pasta "teacher": Os 2 são o mesmo comando.

<img width="500" src="https://user-images.githubusercontent.com/35220979/140173467-2384af4d-d163-47a5-90e1-6474adf49744.png" />

3. Dois arquivos serão gerados: o SVG do sprite e o SCSS dos ícones. O SCSS sempre vai possuir uma classe que carrega os estilos do sprite e outra que carrega as dimensões do sprite. Se o nome do sprite é arrow, a classe será svg-arrow e a classe das dimensões seria svg-arrow-dims

<img width="500" src="https://user-images.githubusercontent.com/35220979/140173872-aff6c02d-8b3a-4608-a747-4c193cbd5d87.png" />

4. Em seguida, basta utilizar as classes em qualquer elemento. Lembre-se que não é necessário se preocupar com posicionamento do background ou dimensões dos ícones, pois a biblioteca já cuida disso tudo por você. 😉

<img width="500" src="https://user-images.githubusercontent.com/35220979/140174065-ab932794-07a1-42f3-a583-3d9e55fb7038.png" />


<b>Regras</b>

Para que os sprites funcionem corretamente é necessário seguir algumas regras:

- Não adicionar sprites que tem duas cores (mesmo que uma delas seja branco) na pasta monochrome.
- Ao criar um sprite light e dark, é necessário dar o mesmo nome pros dois arquivos (um na pasta light e o outro na dark)
- Antes de adicionar um arquivo nas pastas light/dark, verificar se já não existe algum sprite com o mesmo nome lá. Isso é importante pois se isso acontecer, algum estilo será subscrito.