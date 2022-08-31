import { styled } from "../../stitches.config";

export const Button = styled("button", {
	variants: {
		buttonType: {
			true: {
				background: "red",
			},

			false: {
				background: "yellow",
			},
		},
	},
});
