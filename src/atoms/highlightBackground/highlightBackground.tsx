import React, { CSSProperties } from "react";
import { CSS } from "@stitches/react";

import * as Styled from "./styled";

type PropsType = {
	style?: CSSProperties;
	aos?: boolean;
	aosDelay?: string;
	aosDuration?: string;
	backgroundColor?: string;
	color?: string;
	initialColor?: string;
	css?: CSS;
};

export const HighlightBackground = ({
	children,
	style,
	aos = true,
	aosDelay = "1300",
	aosDuration = "400",
	color = "$colors$color-primary-theme-text-marked",
	initialColor = "initial",
	backgroundColor = "$colors$color-secondary-theme-500",
	css,
}: React.PropsWithChildren<PropsType>) => (
	<Styled.HighlightedBackground
		style={style}
		aos={aos}
		data-aos={"highlight-background"}
		data-aos-duration={aosDuration}
		data-aos-delay={aosDelay}
		data-aos-easing="highlight-easing"
		css={{
			$$color: color,
			$$initialColor:
				initialColor === "initial"
					? initialColor
					: `$colors${initialColor}`,
			$$backgroundColor: backgroundColor,
			...css,
		}}
	>
		{children}
	</Styled.HighlightedBackground>
);

export default HighlightBackground;
