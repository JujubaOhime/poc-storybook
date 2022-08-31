/* eslint-disable no-magic-numbers */
import React, { CSSProperties, useMemo } from "react";
import { CSS } from "@stitches/react";

import * as Styled from "./styled";

const textToken = ["t1", "t2", "t3", "t4", "t5"] as const;
type TextTokenType = typeof textToken[number];
const isTextTokenType = (el: any): el is TextTokenType =>
	textToken.includes(el);

type HeadingTokenType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type DisplayTokenType = "d1" | "d2" | "d3" | "d4";

type AOSType = {
	aos?: string;
	aosDelay?: string;
	aosDuration?: string;
	aosEasing?: string;
};

type TextAlignType = {
	textAlign?: "center" | "left" | "right" | "start" | "unset";
	textAlignNotebook?: TextAlignType["textAlign"];
	textAlignTablet?: TextAlignType["textAlign"];
	textAlignPhone?: TextAlignType["textAlign"];
};

type PropsType = {
	size: TextTokenType | HeadingTokenType | DisplayTokenType | 0;
	notebookSize?: PropsType["size"];
	tabletSize?: PropsType["size"];
	phoneSize?: PropsType["size"];
	isStrong?: boolean;
	isParagraph?: boolean;
	element?: keyof JSX.IntrinsicElements;
	style?: CSSProperties;
	color?: string;
	css?: CSS;
} & TextAlignType &
	AOSType;

export const Text = ({
	children,
	size,
	notebookSize = size,
	tabletSize = notebookSize,
	phoneSize = tabletSize,
	isStrong,
	isParagraph,
	element = isTextTokenType(size) ? "p" : "h2",
	style,
	color = "$color-neutral-500",
	css,
	textAlign = "unset",
	textAlignNotebook = textAlign,
	textAlignTablet = textAlignNotebook,
	textAlignPhone = textAlignTablet,
	aos,
	aosDelay,
	aosDuration,
	aosEasing,
}: React.PropsWithChildren<PropsType>) => {
	const _text = useMemo(() => Styled.makeText(element), [element]);

	return (
		// eslint-disable-next-line react/jsx-pascal-case
		<_text
			size={size}
			notebookSize={notebookSize}
			tabletSize={tabletSize}
			phoneSize={phoneSize}
			isStrong={isStrong}
			isParagraph={isParagraph}
			style={style}
			css={{
				$$textAlign: textAlign,
				$$textAlignNotebook: textAlignNotebook,
				$$textAlignTablet: textAlignTablet,
				$$textAlignPhone: textAlignPhone,
				$$color: color,
				...css,
			}}
			data-aos={aos}
			data-aos-delay={aosDelay}
			data-aos-duration={aosDuration}
			data-aos-easing={aosEasing}
		>
			{children}
		</_text>
	);
};
