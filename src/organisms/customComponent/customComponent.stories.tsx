import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CustomComponent } from "./customComponent";

export default {
	title: "Organisms/CustomComponent",
	component: CustomComponent,
} as ComponentMeta<typeof CustomComponent>;

const Template: ComponentStory<typeof CustomComponent> = (args) => <CustomComponent {...args} />;

export const Primary = Template.bind({});
