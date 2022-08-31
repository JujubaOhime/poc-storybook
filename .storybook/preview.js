import AOS from "aos";
import "aos/dist/aos.css";

import {
	darkTheme,
	englishTheme,
	koreanTheme,
	spanishTheme,
} from "../src/stitches.config";

import { globalStyles } from "../src/styles/globalStyles";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	multipleThemesStitches: {
		values: [
			{
				name: "Dark",
				theme: darkTheme,
			},
			{
				name: "English",
				theme: englishTheme,
			},
			{
				name: "Korean",
				theme: koreanTheme,
			},
			{
				name: "Spanish",
				theme: spanishTheme,
			},
		],
	},
};

export const decorators = [
	(Story) => {
		AOS.init({
			easing: "ease-out",
			anchorPlacement: "top-bottom",
			offset: 80,
			once: true,
		});
		globalStyles();
		return <Story />;
	},
];
