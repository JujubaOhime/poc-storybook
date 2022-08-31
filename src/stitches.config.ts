import { createStitches, createTheme } from "@stitches/react";
import { fontWeights } from "./styles/abstracts/fontWeights";
import { medias } from "./styles/abstracts/medias";
import { shadows } from "./styles/abstracts/shadows";
import { sizes } from "./styles/abstracts/sizes";
import { spaces } from "./styles/abstracts/spaces";
import { zIndices } from "./styles/abstracts/zIndices";
import { darkColors } from "./styles/abstracts/darkColors";
import { colors } from "./styles/abstracts/colors";
import {
	englishColors,
	koreanColors,
	spanishColors,
} from "./styles/abstracts/languageColors";
import { languageShadow } from "./styles/abstracts/languageShadows";
import { darkShadows } from "./styles/abstracts/darkShadows";

export const { styled, getCssText, globalCss } = createStitches({
	theme: {
		colors: colors,
		fonts: {
			Manrope: "Manrope",
		},
		shadows: shadows,
		fontWeights: fontWeights,
		sizes: sizes,
		space: spaces,
		zIndices: zIndices,
	},
	media: medias,
});

export const darkTheme = createTheme("dark", {
	colors: darkColors,
	shadows: darkShadows,
});

export const englishTheme = createTheme("english", {
	colors: englishColors,
	shadows: languageShadow,
});

export const koreanTheme = createTheme("korean", {
	colors: koreanColors,
	shadows: languageShadow,
});

export const spanishTheme = createTheme("spanish", {
	colors: spanishColors,
	shadows: languageShadow,
});

// export const italianTheme = createTheme("italian", {
// 	colors,
// 	shadows,
// });
