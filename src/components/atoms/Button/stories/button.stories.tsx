import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "..";

export default {
	component: Button,
	title: "Button",
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
