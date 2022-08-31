import { styled } from "../../stitches.config";

import { medias } from "../../styles/abstracts/medias";

export const makeButton = (tag: "a" | "button") => {
	type breakpointType =
		| "notebookOnly"
		| "tabletOnly"
		| "phoneOnly"
		| "desktopOnly";

	const sizeVariantStyle = (breakpoint: breakpointType) => {
		return {
			xxLarge: {
				[`@media${medias[breakpoint]}`]: {
					padding: "23.5px 32px",
					borderRadius: "16px",
				},
			},

			extraLarge: {
				[`@media${medias[breakpoint]}`]: {
					padding: "21px 24px",
					borderRadius: "16px",
				},
			},

			large: {
				[`@media${medias[breakpoint]}`]: {
					padding: "13px 20px",
					borderRadius: "12px",
				},
			},

			medium: {
				[`@media${medias[breakpoint]}`]: {
					padding: "10.5px 16px",
					borderRadius: "10px",
				},
			},

			small: {
				[`@media${medias[breakpoint]}`]: {
					padding: "8px 12px",
					borderRadius: "10px",
				},
			},
		};
	};

	const candyStyle = {
		background: "$$buttonBackgroundColor",

		"&:hover, &:active": {
			boxShadow: "$$boxShadow",
			transform: "translateY(-6px) scale(1.025)",
		},
	};

	const buttonTypeVariantStyle = (breakpoint: breakpointType) => {
		return {
			primary: {
				[`@media${medias[breakpoint]}`]: {
					background: "$$buttonBackgroundColor",

					"&:disabled, &:hover:disabled": {
						background: "$color-neutral-100",
					},

					"&:hover, &:active": {
						background: "$$buttonBackgroundHoverColor",
					},
				},
			},

			secondary: {
				[`@media${medias[breakpoint]}`]: {
					border: "1px solid $color-primary-theme-200",

					"&:disabled, &:hover:disabled": {
						border: "1px solid $color-neutral-200",
					},

					"&:hover, &:active": {
						border: "1px solid $color-primary-theme-300",
					},
				},
			},

			tertiary: {
				[`@media${medias[breakpoint]}`]: {
					"&:hover, &:active": {
						background: "$$buttonBackgroundHoverColor",
					},

					"&:disabled, &:hover:disabled": {
						background: "none",
					},
				},
			},

			candy: breakpoint !== "desktopOnly" ? {} : { ...candyStyle },
		};
	};

	return styled(tag, {
		$$buttonWidth: "",
		$$buttonWidthNotebook: "",
		$$buttonWidthTablet: "",
		$$buttonWidthPhone: "",
		$$buttonGap: "",
		$$boxShadow: "",
		$$buttonBackgroundColor: "",
		$$buttonBackgroundHoverColor: "",
		$$iconBackgroundColor: "",

		display: "flex",
		justifyContent: "center",
		transition: "0.1s",
		boxSizing: "border-box",
		alignItems: "center",
		gap: "$$buttonGap",

		"&:hover": {
			boxShadow: "$$boxShadow",
		},

		i: {
			backgroundColor: "$$iconBackgroundColor",
		},

		variants: {
			size: {
				...sizeVariantStyle("desktopOnly"),
			},

			notebookSize: {
				...sizeVariantStyle("notebookOnly"),
			},

			tabletSize: {
				...sizeVariantStyle("tabletOnly"),
			},

			phoneSize: {
				...sizeVariantStyle("phoneOnly"),
			},

			buttonType: {
				...buttonTypeVariantStyle("desktopOnly"),
			},

			notebookButtonType: {
				...buttonTypeVariantStyle("notebookOnly"),
			},

			tabletButtonType: {
				...buttonTypeVariantStyle("tabletOnly"),
			},

			phoneButtonType: {
				...buttonTypeVariantStyle("phoneOnly"),
			},
		},

		"@desktopOnly": {
			width: "$$buttonWidth",
		},

		"@notebookOnly": {
			width: "$$buttonWidthNotebook",
		},

		"@tabletOnly": {
			width: "$$buttonWidthTablet",
		},

		"@phoneOnly": {
			width: "$$buttonWidthPhone",
		},
	});
};
