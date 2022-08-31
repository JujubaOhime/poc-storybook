import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "../text";

import { Button } from "./button";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		children: {
			defaultValue: (
				<Text size="t1" color="$colors$color-white-solid" isStrong>
					Algum valor
				</Text>
			),
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	size: "large",
	buttonType: "primary",
	children: (
		<Text size="t1" color="$colors$color-white-solid" isStrong>
			Algum valor
		</Text>
	),
};
