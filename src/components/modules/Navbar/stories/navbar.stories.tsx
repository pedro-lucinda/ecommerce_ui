import { Story, Meta } from "@storybook/react";
import { Navbar, NavbarProps } from "..";

export default {
	component: Navbar,
	title: "Navbar",
};

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
