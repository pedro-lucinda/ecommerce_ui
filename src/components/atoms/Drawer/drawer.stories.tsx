// Button.stories.ts | Button.stories.tsx

import React from "react";

import { Story, Meta } from "@storybook/react";

import { Drawer, DrawerProps } from ".";

export default {
	component: Drawer,
	title: "Components/Drawer",
} as Meta;

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />;
export const Primary = Template.bind({});
Primary.args = {
	title: "title",
	actionName: "Save",
	action: () => alert("Click"),
};
