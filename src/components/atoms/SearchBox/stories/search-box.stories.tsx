import { Story, Meta } from "@storybook/react";
import { SearchBox, SearchBoxProps } from "..";

export default {
	component: SearchBox,
	title: "SearchBox",
};

const Template: Story<SearchBoxProps> = (args) => <SearchBox {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};
