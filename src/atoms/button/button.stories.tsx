import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "../text";
import { Button } from "./button";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		children: {
			options: ["TextWhite", "TextTheme"],
			defaultValue: (
				<Text
					size="t4"
					tabletSize="t3"
					phoneSize="t2"
					color="$colors$color-white-solid"
					isStrong
				>
					Label
				</Text>
			),
			mapping: {
				TextWhite: (
					<Text
						size="t4"
						tabletSize="t3"
						phoneSize="t2"
						color="$colors$color-white-solid"
						isStrong
					>
						Label
					</Text>
				),
				TextTheme: (
					<Text
						size="t4"
						tabletSize="t3"
						phoneSize="t2"
						color="$colors$color-primary-theme-500"
					>
						Label
					</Text>
				),
			},
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
	size: "large",
	buttonType: "primary",
	children: (
		<Text
			size="t4"
			tabletSize="t3"
			phoneSize="t2"
			color="$colors$color-white-solid"
			isStrong
		>
			Oi
		</Text>
	),
};

Secondary.args = {
	size: "large",
	buttonType: "secondary",
	children: (
		<Text
			size="t4"
			tabletSize="t3"
			phoneSize="t2"
			color="$colors$color-primary-theme-500"
			isStrong
		>
			Algum valor
		</Text>
	),
};

export const Alert = Template.bind({});
Alert.args = {
	size: "large",
	buttonType: "primary",
	backgroundColor: "color-orange-500",
	children: (
		<Text
			size="t4"
			tabletSize="t3"
			phoneSize="t2"
			color="$colors$color-white-solid"
			isStrong
		>
			Oi
		</Text>
	),
};
