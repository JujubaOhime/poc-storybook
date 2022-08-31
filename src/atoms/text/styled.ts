import { styled } from "../../stitches.config";
import { medias } from "../../styles/abstracts/medias";

export const makeText = (tag: keyof JSX.IntrinsicElements) => {
	type breakpointType =
		| "notebookOnly"
		| "tabletOnly"
		| "phoneOnly"
		| "desktopOnly";

	const sharedStyle = {
		lineHeight: 1.37,
		letterSpacing: 0,
	};

	const textStyle = (breakpoint: breakpointType) => {
		return {
			t1: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "1rem",
					...sharedStyle,
				},
			},

			t2: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "1.2rem",
					...sharedStyle,
				},
			},

			t3: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "1.4rem",
					...sharedStyle,
				},
			},

			t4: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "1.6rem",
					...sharedStyle,
				},
			},

			t5: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "1.8rem",
					...sharedStyle,
				},
			},
		};
	};

	const headingStyle = (breakpoint: breakpointType) => {
		const sharedStyle = {
			lineHeight: 1.2,
			letterSpacing: "-0.02em",
			fontWeight: "$fw-extrabold",
		};
		return {
			h1: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "3.6rem",
					...sharedStyle,
				},
			},

			h2: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "3.2rem",
					...sharedStyle,
				},
			},

			h3: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "2.8rem",
					...sharedStyle,
				},
			},

			h4: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "2.4rem",
					...sharedStyle,
				},
			},

			h5: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "2.2rem",
					letterSpacing: "-0.005em",
					lineHeight: 1.24,
					fontWeight: "$fw-extrabold",
				},
			},

			h6: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "2.0rem",
					letterSpacing: "-0.005em",
					lineHeight: 1.24,
					fontWeight: "$fw-extrabold",
				},
			},
		};
	};

	const displayStyle = (breakpoint: breakpointType) => {
		const sharedStyle = {
			lineHeight: 1.2,
			fontWeight: "$fw-extrabold",
			letterSpacing: "-0.02em",
		};
		return {
			d1: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "6rem",
					...sharedStyle,
				},
			},

			d2: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "4.8rem",
					...sharedStyle,
				},
			},

			d3: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "4.4rem",
					...sharedStyle,
				},
			},

			d4: {
				[`@media${medias[breakpoint]}`]: {
					fontSize: "4rem",
					...sharedStyle,
				},
			},
		};
	};

	const displayNoneStyle = (breakpoint: breakpointType) => {
		return {
			0: {
				[`@media${medias[breakpoint]}`]: {
					display: "none",
				},
			},
		};
	};

	return styled(tag, {
		$$textAlign: "",
		$$textAlignNotebook: "",
		$$textAlignTablet: "",
		$$textAlignPhone: "",

		"@desktopOnly": {
			textAlign: "$$textAlign",
		},

		"@notebookOnly": {
			textAlign: "$$textAlignNotebook",
		},

		"@tabletOnly": {
			textAlign: "$$textAlignTablet",
		},

		"@phoneOnly": {
			textAlign: "$$textAlignPhone",
		},

		$$color: "",

		color: "$$color",
		fontWeight: "$fw-medium",

		variants: {
			isParagraph: {
				true: {
					lineHeight: 1.6,
				},
			},

			isStrong: {
				true: {
					fontWeight: "$fw-extrabold",
				},
			},

			size: {
				...textStyle("desktopOnly"),
				...headingStyle("desktopOnly"),
				...displayStyle("desktopOnly"),
				...displayNoneStyle("desktopOnly"),
			},

			notebookSize: {
				...textStyle("notebookOnly"),
				...headingStyle("notebookOnly"),
				...displayStyle("notebookOnly"),
				...displayNoneStyle("notebookOnly"),
			},

			tabletSize: {
				...textStyle("tabletOnly"),
				...headingStyle("tabletOnly"),
				...displayStyle("tabletOnly"),
				...displayNoneStyle("tabletOnly"),
			},

			phoneSize: {
				...textStyle("phoneOnly"),
				...headingStyle("phoneOnly"),
				...displayStyle("phoneOnly"),
				...displayNoneStyle("phoneOnly"),
			},
		},
	});
};
