import { Story, Meta } from "@storybook/react";
import { FilterDrawer, FilterDrawerProps } from "..";

export default {
	component: FilterDrawer,
	title: "FilterDrawer",
};

const Template: Story<FilterDrawerProps> = (args) => <FilterDrawer {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
