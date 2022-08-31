import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HighlightBackground } from "./highlightBackground";

export default {
	title: "Atoms/HighlightBackground",
	component: HighlightBackground,
	argTypes: {
		children: {
			defaultValue: "Label",
			control: "text",
		},
	},
} as ComponentMeta<typeof HighlightBackground>;

const Template: ComponentStory<typeof HighlightBackground> = (args) => (
	<HighlightBackground {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	children: "Texto",
};
