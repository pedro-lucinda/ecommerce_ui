import { Story, Meta } from "@storybook/react";
import { Navbar } from "..";

export default {
	component: Navbar,
	title: "Navbar",
};

const Template: Story = (args) => <Navbar {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
