const mainColors = {
	// Neutral
	"color-neutral-600": "#fff",
	"color-neutral-500": "#e0e0e0",
	"color-neutral-400": "#bdbdbd",
	"color-neutral-300": "#9e9e9e",
	"color-neutral-200": "#535353",
	"color-neutral-100": "#313131",
	"color-neutral-grad": "linear-gradient(225deg, #424242 0%, #000 100%)",
	"color-neutral-50": "#262626",
	"color-white-solid": "#fff",
	"color-background": "#111",

	// Brand primary
	"color-brand-primary-600": "#bc8fff",
	"color-brand-primary-500-highlight": "#a366ff",
	"color-brand-primary-500": "#8240e5",
	"color-brand-primary-300": "#653aa6",
	"color-brand-primary-200": "#4d3078",
	"color-brand-primary-100": "#311f4c",
	"color-brand-primary-grad":
		"linear-gradient(225deg, #d75cff 0%, #6e24e0 100%)",

	// Brand secondary
	"color-brand-secondary-600": "#d3d60d",
	"color-brand-secondary-500": "#cc0",
	"color-brand-secondary-300": "#737317",
	"color-brand-secondary-200": "#454513",
	"color-brand-secondary-100": "#29290d",

	// System
	"color-system-tooltip": "#313131",
	"color-system-overlay": "rgba(0,0,0, 0.72)",
};

const accessoryColors = {
	// Red
	"color-red-600": "#ef5350",
	"color-red-500-highlight": "#ef3f3c",
	"color-red-500": "#d32f2f",
	"color-red-400": "#c62828",
	"color-red-300": "#902121",
	"color-red-200": "#681c1c",
	"color-red-100": "#471818",
	"color-red-grad": "linear-gradient(225deg, #fa5c39 0%, #cf0e4b 100%)",

	// Orange
	"color-orange-600": "#ff7b43",
	"color-orange-500-highlight": "#ff6d2e",
	"color-orange-500": "#f04f0a",
	"color-orange-400": "#d84315",
	"color-orange-300": "#9c3414",
	"color-orange-200": "#742a13",
	"color-orange-100": "#4d2012",
	"color-orange-grad": "linear-gradient(225deg, #ffa42e 0%, #ff2e43 100%)",

	// Yellow
	"color-yellow-600": "#ffca28",
	"color-yellow-500-highlight": "#fac114",
	"color-yellow-500": "#faaf00",
	"color-yellow-400": "#f0a224",
	"color-yellow-300": "#ad761e",
	"color-yellow-200": "#80591a",
	"color-yellow-100": "#543c17",
	"color-yellow-grad": "linear-gradient(45deg, #ef6d16 0%, #ffdf14 100%)",

	// Light Green
	"color-green-600": "#95cc65",
	"color-green-500-highlight": "#89c753",
	"color-green-500": "#6ab827",
	"color-green-400": "#558b2f",
	"color-green-300": "#416626",
	"color-green-200": "#334e20",
	"color-green-100": "#25361a",
	"color-green-grad": "linear-gradient(225deg, #cbd400 0%, #39bb34 100%)",

	// Green
	"color-emerald-600": "#66bb6a",
	"color-emerald-500-highlight": "#55b55a",
	"color-emerald-500": "#359c39",
	"color-emerald-400": "#2e7d32",
	"color-emerald-300": "#255d28",
	"color-emerald-200": "#1f4721",
	"color-emerald-100": "#1a311b",
	"color-emerald-grad": "linear-gradient(45deg, #319255 0%, #6ec946 100%)",

	// Teal
	"color-teal-600": "#26a69a",
	"color-teal-500-highlight": "#18a194",
	"color-teal-500": "#008477",
	"color-teal-400": "#00695c",
	"color-teal-300": "#054f45",
	"color-teal-200": "#093d36",
	"color-teal-100": "#0c2b27",
	"color-teal-grad": "linear-gradient(45deg, #1788a4 0%, #1dbf7c 100%)",

	// Cyan
	"color-cyan-600": "#26c6da",
	"color-cyan-500-highlight": "#13bed4",
	"color-cyan-500": "#00a8bd",
	"color-cyan-400": "#00838f",
	"color-cyan-300": "#056169",
	"color-cyan-200": "#094a50",
	"color-cyan-100": "#0c3337",
	"color-cyan-grad": "linear-gradient(45deg, #13a0d8 0%, #13d8ce 100%)",

	// Blue
	"color-blue-600": "#42a5f5",
	"color-blue-500-highlight": "#2f9cf5",
	"color-blue-500": "#0c82eb",
	"color-blue-400": "#1565c0",
	"color-blue-300": "#144c8b",
	"color-blue-200": "#133b69",
	"color-blue-100": "#122a45",
	"color-blue-grad": "linear-gradient(45deg, #285bde 0%, #30c3fc 100%)",

	// Indigo
	"color-indigo-600": "#5c6bc0",
	"color-indigo-500-highlight": "#4d5ec0",
	"color-indigo-500": "#2c3fb0",
	"color-indigo-400": "#283593",
	"color-indigo-300": "#212a6c",
	"color-indigo-200": "#1d2352",
	"color-indigo-100": "#181c38",
	"color-indigo-grad": "linear-gradient(45deg, #2c2a9b 0%, #3885ce 100%)",

	// Violet
	"color-violet-600": "#7e57c2",
	"color-violet-500-highlight": "#7448c2",
	"color-violet-500": "#5628b5",
	"color-violet-400": "#4527a0",
	"color-violet-300": "#352075",
	"color-violet-200": "#2b1c59",
	"color-violet-100": "#21183c",
	"color-violet-grad": "linear-gradient(225deg, #b85ced 0%, #333396 100%)",

	// Pink
	"color-pink-600": "#ec407a",
	"color-pink-500-highlight": "#ec2d6d",
	"color-pink-500": "#e8095b",
	"color-pink-400": "#ad1457",
	"color-pink-300": "#7e1342",
	"color-pink-200": "#5f1334",
	"color-pink-100": "#401226",
	"color-pink-grad": "linear-gradient(225deg, #ed45b5 0%, #ed1515 100%)",

	// Caramel
	"color-caramel-600": "#ce8f34",
	"color-caramel-500": "#c2842b",
	"color-caramel-300": "#8c5e1c",
	"color-caramel-200": "#523e21",
	"color-caramel-100": "#332614",
};

const letrasColors = {
	"color-letras-primary-600": "#d0d53a",
	"color-letras-primary-500-highlight": "#c2c800",
	"color-letras-primary-500": "#c2c800",
	"color-letras-secondary-600": "#ff883a",
	"color-letras-secondary-500-highlight": "#ff6600",
};

export const darkColors = {
	...mainColors,
	...accessoryColors,
	...letrasColors,

	// Gradients
	"gradient-fade-left":
		"linear-gradient(90deg, $color-background 0%, #11111180 50%, #11111100 100%)",
	"gradient-fade-right":
		"linear-gradient(90deg, #11111100 0%, #11111180 50%, $color-background 100%)",
};
