// Button.stories.ts | Button.stories.tsx

import React from "react";

import { Story, Meta } from "@storybook/react";

import { Loading, LoadingProps } from ".";

export default {
	component: Loading,
	title: "Components/Loading",
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;
export const Primary = Template.bind({});
Primary.args = {
	color: "purple.500",
	size: "md",
	thickness: "4px",
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: "blue.500",
	size: "md",
	thickness: "6px",
};
