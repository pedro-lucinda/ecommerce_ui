import { Story, Meta } from "@storybook/react";
import { Filters } from "..";

export default {
	component: Filters,
	title: "Filters",
};

const Template: Story = (args) => <Filters {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
