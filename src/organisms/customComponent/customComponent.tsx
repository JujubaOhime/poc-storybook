import React from "react";

import * as Styled from "./styled";

type PropsType = {};

export const CustomComponent = ({}: PropsType) => {
	return (
		<Styled.Container>
			<h1>CustomComponent</h1>
		</Styled.Container>
	);
};
