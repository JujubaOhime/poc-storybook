import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Text } from "./text";

export default {
	title: "Atoms/Text",
	component: Text,
	argTypes: {
		children: {
			defaultValue: "Label",
			control: {
				type: "text",
			},
		},
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
