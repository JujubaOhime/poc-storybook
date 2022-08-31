export const reset = {
	"body,h1,h2,h3,h4,h5,h6,p,ol,ul,textarea,select,option,table,th,td,blockquote,hr,button,figure":
		{
			margin: "0",
			padding: "0",
		},

	"header, footer, article, nav, section": {
		display: "block",
	},

	html: {
		textSizeAdjust: "none",
		wordWrap: "break-word",
		fontSmooth: "antialiased",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
		fontSize: "62.5%",
		"scroll-behavior": "smooth",
	},

	"ul,ol": {
		listStyle: "none",
	},

	button: {
		border: 0,
		cursor: "pointer",
		background: "transparent",
	},

	img: {
		border: 0,
		fontSize: 0,
	},

	textarea: {
		resize: "none",
	},

	a: {
		color: "$color-brand-primary-500-highlight",
		textDecoration: "none",
		transition: "color 0.3s",

		"&:hover": {
			color: "$color-brand-primary-600",
		},
	},

	iframe: {
		overflow: "hidden",
	},

	"body, textarea, input, select, option, button": {
		font: "1.6rem/1.2 Manrope",
		color: "$color-neutral-500",
		fontWeight: "$fw-medium",
	},

	"h1,h2,h3,h4,h5,h6,small": {
		fontSize: "inherit",
	},

	i: {
		fontStyle: "inherit",
	},

	"b, strong": {
		fontWeight: "$fw-extrabold",
	},

	body: {
		fontFamily: "Manrope",
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		backgroundColor: "$color-background",
	},
	"input[type='search']::-webkit-search-decoration, input[type='search']::-webkit-search-cancel-button, input[type='search']::-webkit-search-results-button, input[type='search']::-webkit-search-results-decoration":
		{
			display: "none",
		},
	"@media (prefers-reduced-motion: reduce)": {
		"*, ::before, ::after": {
			animationDuration: "0.001s !important",
			animationIterationCount: "1 !important",
			transitionDuration: "0.001s !important",
			transitionDelay: "0s !important",
		},
	},
};
