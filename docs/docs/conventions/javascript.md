# Javascript

## 1. Princípios
* Consistência
* Legibilidade
* Modularização
* Performance

## 2. Formatação
Para manter a formatação do JavaScript utilizamos o Prettier. Para configurar o Prettier:

* Instalar Prettier global `npm i -g prettier`
* Instalar plugin do Prettier no editor (https://prettier.io/docs/en/editors.html)
* Habilitar formatOnSave no editor (https://prettier.io/docs/en/editors.html)
```json
// VSCode config
"[typescriptreact]": {
	"editor.formatOnSave": true,
},
"[javascript]": {
	"editor.formatOnSave": true
},
"[scss]": {
	"editor.formatOnSave": true
}
```

## 3. Nomenclatura
* Em inglês
* Auto explicativos

## 4. DOM Queries
* Quando o elemento for unico na página, utilizar seu `id`
* Quando o elemento se repetir na página, utilizar o prefixo `js-` seguido pela classe de estilização
* Utilizar `getElementById` para selecionar por ids e `querySelectorAll` por classes
* Sempre que uma mesma query for executada mais de uma vez na página, considerar criar uma constante para armazená-la

## 5. Variáveis
### 5.1 Nomenclatura
* Utilizar [camelCase](https://techterms.com/definition/camelcase)
* Booleans: prefixos de verbos interrogativos, como `is`, `are`, `has`, `can`, etc.
* Arrays: plural
* Referência a um elemento: sufixo `El`
* Array de referências a elementos: sufixo `Els`

```javascript
const isTranslationValid = false;
const numbers = [1, 2, 3, 4, 5];
// Referências ao DOM:
const modalEl = document.getElementById("modal");
const lineEls = document.querySelectorAll(".js-line");
```
### 5.2 Práticas
* Não utilizar `var`
* Preferir `const` sobre `let`, quando possível

## 6. Funções
### 6.1 Nomenclatura
* Utilizar [camelCase](https://techterms.com/definition/camelcase)
### 6.2 Práticas
* Sempre preferir utilizar `async/await` dentro de um `trycatch` block do que `.then` e `.catch` em promises
* No escopo "privado" de um módulo, utilizar a keyword `function`
* Evitar utilizar a referência `this` em funções definidas pela keyword `function`
```javascript
// no escopo privado de um módulo
async function fetchPlaylist() {
	try {
		const playlist = await api.fetchPlaylist();
		renderPlaylist(playlist);
	} catch (error) {
		showErrorMessage(error);
	}
}
// dentro de uma classe
class PlaylistPage {
	fetchPlaylist = () => { /* code */ }
}
```

## 7. Event Handlers
### 7.1 Nomenclatura
* Utilizar um nome descritivo + o sufixo `Handler`
### 7.2 Práticas
* Quando o código for pequeno e o evento for disparado apenas uma vez, utilizar uma arrow function diretamente na callback
* Quando o código for extenso, passar uma referência para uma função ou método na callback
* Para se referir ao elemento utilizar `event.target` ao invés de `this`
```javascript
// função diretamente na callback
buttonEl.addEventListener("click", () => {
	// code
});

// referência na callback
function buttonClickHandler(event) {
	// code
	// code
	// code
};
buttonEl.addEventListener("click", buttonClickHandler);
```

## 8. Classes
### 8.1 Nomenclatura
* Utilizar [PascalCase](https://techterms.com/definition/pascalcase)
### 8.2 Práticas
* Usar sintaxe do ES6
* Utilizar arrow functions para declarar métodos
```javascript
	// errado
	function Player() {
		// code
	}

	Player.prototype.playVideo = () => { /* code */ }

	// certo
	class Player {
		playVideo = () => { /* code */ }
	}
	
```