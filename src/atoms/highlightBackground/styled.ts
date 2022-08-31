import { styled } from "../../stitches.config";

export const HighlightedBackground = styled("span", {
	$$color: "",
	$$backgroundColor: "",
	$$initialColor: "",

	color: "$$color",
	backgroundImage:
		"linear-gradient(0deg, $$backgroundColor, $$backgroundColor)",
	backgroundRepeat: "no-repeat",
	padding: "0 8px",
	backgroundPositionY: "center",
	backgroundSize: "100% 86%",

	variants: {
		aos: {
			true: {
				backgroundSize: "0 86%",
				color: "$$initialColor",
				transitionProperty:
					"transform, background-size, opacity, color",

				"&.aos-animate": {
					color: "$$color",
					backgroundSize: "100% 86%",
					backgroundPositionY: "67%",
				},
			},

			false: {
				transitionProperty: "none",
			},
		},
	},
});
