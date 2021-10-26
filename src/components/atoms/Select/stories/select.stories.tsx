import { Story, Meta } from "@storybook/react";
import { Select, SelectProps } from "..";

export default {
	component: Select,
	title: "Select",
};

const Template: Story<SelectProps> = (args) => <Select {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
