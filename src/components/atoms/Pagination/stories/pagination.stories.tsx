import { Story, Meta } from "@storybook/react";
import { Pagination } from "..";

export default {
	component: Pagination,
	title: "Pagination",
};

const Template: Story = (args) => <Pagination {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
