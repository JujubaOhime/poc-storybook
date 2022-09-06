import React, {
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
	useMemo,
} from "react";
import { CSS } from "@stitches/react";
import { shadows } from "../../styles/abstracts/shadows";
import { colors } from "../../styles/abstracts/colors";

import * as Styled from "./styled";

type WidthType = {
	width?: string;
	widthNotebook?: string;
	widthTablet?: string;
	widthPhone?: string;
};

type ButtonType =
	| {
			buttonType: "primary" | "secondary" | "tertiary";
			notebookButtonType?: ButtonType["buttonType"];
			tabletButtonType?: ButtonType["buttonType"];
			phoneButtonType?: ButtonType["buttonType"];
			size: "large" | "medium" | "small";
			notebookSize?: ButtonType["size"];
			tabletSize?: ButtonType["size"];
			phoneSize?: ButtonType["size"];
	  }
	| {
			buttonType: "candy";
			notebookButtonType?: never;
			tabletButtonType?: never;
			phoneButtonType?: never;
			size: "xxLarge" | "extraLarge" | "large" | "medium" | "small";
			notebookSize?: ButtonType["size"];
			tabletSize?: ButtonType["size"];
			phoneSize?: ButtonType["size"];
	  };

export type PropsType = {
	iconBackgroundColor?: keyof typeof colors;
	backgroundColor?: PropsType["iconBackgroundColor"];
	backgroundHoverColor?: PropsType["iconBackgroundColor"];
	shadow?: keyof typeof shadows;
	isButtonDisabled?: boolean;
	className?: string;
	gap?: number;
	css?: CSS;
} & ButtonType &
	WidthType;

export const Button = ({
	buttonType = "primary",
	notebookButtonType = buttonType,
	tabletButtonType = notebookButtonType,
	phoneButtonType = tabletButtonType,
	size,
	notebookSize = size,
	tabletSize = notebookSize,
	phoneSize = tabletSize,
	iconBackgroundColor = "color-primary-theme-500",
	backgroundColor,
	backgroundHoverColor,
	gap = 0,
	shadow,
	width = "fit-content",
	widthNotebook = width,
	widthTablet = widthNotebook,
	widthPhone = widthTablet,
	className,
	children,
	css,
	...props
}: PropsType &
	(
		| AnchorHTMLAttributes<HTMLAnchorElement>
		| ButtonHTMLAttributes<HTMLButtonElement>
	)) => {
	const element = (props as unknown as HTMLAnchorElement).href
		? "a"
		: "button";

	const _button = useMemo(() => Styled.makeButton(element), [element]);

	return (
		// eslint-disable-next-line react/jsx-pascal-case
		<_button
			{...props}
			className={className}
			buttonType={buttonType}
			notebookButtonType={notebookButtonType}
			tabletButtonType={tabletButtonType}
			phoneButtonType={phoneButtonType}
			size={size}
			notebookSize={notebookSize}
			tabletSize={tabletSize}
			phoneSize={phoneSize}
			css={{
				$$buttonGap: `${gap}px`,
				$$buttonWidth: width,
				$$buttonWidthNotebook: widthNotebook,
				$$buttonWidthTablet: widthTablet,
				$$buttonWidthPhone: widthPhone,
				$$iconBackgroundColor: `$${iconBackgroundColor}`,
				$$buttonBackgroundColor: backgroundColor
					? `$colors$${backgroundColor}`
					: buttonType === "primary"
					? "$colors$color-primary-theme-500"
					: "$colors$color-primary-theme-grad",
				$$buttonBackgroundHoverColor: backgroundHoverColor
					? `$colors$${backgroundHoverColor}`
					: buttonType === "primary"
					? "$colors$color-primary-theme-600"
					: "$colors$color-primary-theme-100",
				$$boxShadow: shadow
					? `$shadows$${shadow}`
					: buttonType === "candy"
					? "$shadows$shadow-theme-candy-4dp"
					: "none",
				...css,
			}}
		>
			{children}
		</_button>
	);
};
