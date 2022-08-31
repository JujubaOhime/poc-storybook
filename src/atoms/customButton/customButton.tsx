import * as Styled from "./styled";

interface PropsType {
	buttonType: boolean;
	size: "large" | "medium";
}

export const CustomButton = ({ buttonType = true, size }: PropsType) => {
	return (
		<Styled.Button buttonType={buttonType}>Botão customizado</Styled.Button>
	);
};
