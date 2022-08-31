type themeTokenColors =
	| "brand-primary"
	| "brand-secondary"
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "emerald"
	| "teal"
	| "cyan"
	| "blue"
	| "indigo"
	| "violet"
	| "pink";

export const getThemeColors = (
	primary: themeTokenColors = "brand-primary",
	secondary: themeTokenColors = "brand-secondary",
	tertiary: themeTokenColors = "brand-primary",
	textMarked = "$color-brand-primary-500"
) => ({
	"color-primary-theme-100": `$color-${primary}-100`,
	"color-primary-theme-200": `$color-${primary}-200`,
	"color-primary-theme-300": `$color-${primary}-300`,
	"color-primary-theme-400": `$color-${primary}-400`,
	"color-primary-theme-500": `$color-${primary}-500`,
	"color-primary-theme-500-highlight": `$color-${primary}-500-highlight`,
	"color-primary-theme-600": `$color-${primary}-600`,
	"color-primary-theme-grad": `$color-${primary}-grad`,
	"color-primary-theme-text-marked": textMarked,

	"color-secondary-theme-100": `$color-${secondary}-100`,
	"color-secondary-theme-200": `$color-${secondary}-200`,
	"color-secondary-theme-300": `$color-${secondary}-300`,
	"color-secondary-theme-400": `$color-${secondary}-400`,
	"color-secondary-theme-500": `$color-${secondary}-500`,
	"color-secondary-theme-500-highlight": `$color-${secondary}-500-highlight`,
	"color-secondary-theme-600": `$color-${secondary}-600`,
	"color-secondary-theme-grad": `$color-${secondary}-grad`,

	"color-tertiary-theme-100": `$color-${tertiary}-100`,
	"color-tertiary-theme-200": `$color-${tertiary}-200`,
	"color-tertiary-theme-300": `$color-${tertiary}-300`,
	"color-tertiary-theme-400": `$color-${tertiary}-400`,
	"color-tertiary-theme-500": `$color-${tertiary}-500`,
	"color-tertiary-theme-500-highlight": `$color-${tertiary}-500-highlight`,
	"color-tertiary-theme-600": `$color-${tertiary}-600`,
	"color-tertiary-theme-grad": `$color-${tertiary}-grad`,
});

const mainColors = {
	//neutral
	"color-neutral-600": "#000",
	"color-neutral-500": "#2a2a2a",
	"color-neutral-400": "#757575",
	"color-neutral-300": "#bdbdbd",
	"color-neutral-200": "#e0e0e0",
	"color-neutral-100": "#f2f2f2",
	"color-neutral-grad": "linear-gradient(225deg, #424242 0%, #000 100%)",
	"color-neutral-50": "#fff",
	"color-white-solid": "#fff",
	"color-background": "#fff",

	// Brand Primary
	"color-brand-primary-600": "#6624b2",
	"color-brand-primary-500-highlight": "#8422e5",
	"color-brand-primary-500": "#8422e5",
	"color-brand-primary-300": "#d0b3ff",
	"color-brand-primary-200": "#eadeff",
	"color-brand-primary-100": "#f7f2ff",
	"color-brand-primary-grad":
		"linear-gradient(225deg, #d75cff 0%, #6e24e0 100%)",

	// Brand Secondary
	"color-brand-secondary-600": "#cdd00a",
	"color-brand-secondary-500": "#ebef00",
	"color-brand-secondary-300": "#f4f594",
	"color-brand-secondary-200": "#fcfdb2",
	"color-brand-secondary-100": "#ffd",

	// System
	"color-system-tooltip": "#212121",
	"color-system-overlay": "rgba(0,0,0,0.72)",
};

const accessoryColors = {
	// Red
	"color-red-600": "#cc1818",
	"color-red-500-highlight": "#eb2823",
	"color-red-500": "#eb2823",
	"color-red-400": "#ef5350",
	"color-red-300": "#ffa4a4",
	"color-red-200": "#ffcdd2",
	"color-red-100": "#ffebee",
	"color-red-grad": "linear-gradient(225deg, #fa5c39 0%, #cf0e4b 100%)",

	// Orange
	"color-orange-600": "#d44204",
	"color-orange-500-highlight": "#f04f0a",
	"color-orange-500": "#f04f0a",
	"color-orange-400": "#ff7b43",
	"color-orange-300": "#ffb291",
	"color-orange-200": "#ffd0bc",
	"color-orange-100": "#fff1eb",
	"color-orange-grad": "linear-gradient(225deg, #ffa42e 0%, #ff2e43 100%)",

	// Yellow
	"color-yellow-600": "#eba000",
	"color-yellow-500-highlight": "#faaf00",
	"color-yellow-500": "#faaf00",
	"color-yellow-400": "#ffca28",
	"color-yellow-300": "#ffe082",
	"color-yellow-200": "#ffecb3",
	"color-yellow-100": "#fff8e1",
	"color-yellow-grad": "linear-gradient(45deg, #ef6d16 0%, #ffdf14 100%)",

	// Green
	"color-green-600": "#4c8723",
	"color-green-500-highlight": "#71ad32",
	"color-green-500": "#71ad32",
	"color-green-400": "#9ccc65",
	"color-green-300": "#c5e1a5",
	"color-green-200": "#dcedc8",
	"color-green-100": "#f1f8e9",
	"color-green-grad": "linear-gradient(225deg, #cbd400 0%, #39bb34 100%)",

	// Emerald
	"color-emerald-600": "#237827",
	"color-emerald-500-highlight": "#359c39",
	"color-emerald-500": "#359c39",
	"color-emerald-400": "#66bb6a",
	"color-emerald-300": "#a5d6a7",
	"color-emerald-200": "#c8e6c9",
	"color-emerald-100": "#e8f5e9",
	"color-emerald-grad": "linear-gradient(45deg, #319255 0%, #6ec946 100%)",

	// Teal
	"color-teal-600": "#006357",
	"color-teal-500-highlight": "#008477",
	"color-teal-500": "#008477",
	"color-teal-400": "#26a69a",
	"color-teal-300": "#80cbc4",
	"color-teal-200": "#b2dfdb",
	"color-teal-100": "#e0f2f1",
	"color-teal-grad": "linear-gradient(45deg, #1788a4 0%, #1dbf7c 100%)",

	// Cyan
	"color-cyan-600": "#007e8a",
	"color-cyan-500-highlight": "#00a8bd",
	"color-cyan-500": "#00a8bd",
	"color-cyan-400": "#26c6da",
	"color-cyan-300": "#80deea",
	"color-cyan-200": "#b2ebf2",
	"color-cyan-100": "#e0f7fa",
	"color-cyan-grad": "linear-gradient(45deg, #13a0d8 0%, #13d8ce 100%)",

	// Blue
	"color-blue-600": "#065fc4",
	"color-blue-500-highlight": "#0c82eb",
	"color-blue-500": "#0c82eb",
	"color-blue-400": "#42a5f5",
	"color-blue-300": "#90caf9",
	"color-blue-200": "#bbdefb",
	"color-blue-100": "#e3f2fd",
	"color-blue-grad": "linear-gradient(45deg, #285bde 0%, #30c3fc 100%)",

	// Indigo
	"color-indigo-600": "#1d2c99",
	"color-indigo-500-highlight": "#2c3fb0",
	"color-indigo-500": "#2c3fb0",
	"color-indigo-400": "#5c6bc0",
	"color-indigo-300": "#9fa8da",
	"color-indigo-200": "#c5cae9",
	"color-indigo-100": "#e8eaf6",
	"color-indigo-grad": "linear-gradient(45deg, #2c2a9b 0%, #3885ce 100%)",

	// Violet
	"color-violet-600": "#3d1ba6",
	"color-violet-500-highlight": "#5628b5",
	"color-violet-500": "#5628b5",
	"color-violet-400": "#7e57c2",
	"color-violet-300": "#b39ddb",
	"color-violet-200": "#d1c4e9",
	"color-violet-100": "#ede7F6",
	"color-violet-grad": "linear-gradient(225deg, #b85ced 0%, #333396 100%);",

	// Pink
	"color-pink-600": "#a8074d",
	"color-pink-500-highlight": "#e8095b",
	"color-pink-500": "#e8095b",
	"color-pink-400": "#ec407a",
	"color-pink-300": "#ff95b9",
	"color-pink-200": "#ffc0D6",
	"color-pink-100": "#ffe7ef",
	"color-pink-grad": "linear-gradient(225deg, #ed45b5 0%, #ed1515 100%)",

	// Caramel
	"color-caramel-600": "#99671f",
	"color-caramel-500": "#cc8929",
	"color-caramel-300": "#e8c28b",
	"color-caramel-200": "#eedabc",
	"color-caramel-100": "#fcf0df",
};

const letrasColors = {
	"color-letras-primary-600": "#9fa101",
	"color-letras-primary-500-highlight": "#b7b700",
	"color-letras-primary-500": "#c2c800",
	"color-letras-secondary-600": "#e05a00",
	"color-letras-secondary-500-highlight": "#ff6600",
};

const themeColors = getThemeColors();

export const colors = {
	...mainColors,
	...accessoryColors,
	...letrasColors,
	...themeColors,

	// Gradients
	"gradient-fade-left":
		"linear-gradient(90deg, #fff 0%, #ffffff80 50%, #ffffff00 100%)",
	"gradient-fade-right":
		"linear-gradient(90deg, #ffffff00 0%, #ffffff80 50%, #fff 100%)",
};
