import type { NextPage } from "next";
import HighlightBackground from "../src/atoms/highlightBackground";

const Home: NextPage = () => {
	return (
		<div>
			<HighlightBackground
				aosDuration="1000"
				backgroundColor="#300000"
				color="#ff0000"
			>
				Label
			</HighlightBackground>
			<HighlightBackground aos={false}>Oi</HighlightBackground>
		</div>
	);
};

export default Home;
