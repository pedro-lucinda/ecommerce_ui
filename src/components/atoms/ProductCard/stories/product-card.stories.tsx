
import { Story, Meta } from "@storybook/react";
import { ProductCard, ProductCardProps  } from '..'

export default {
		component: ProductCard,
  title: 'ProductCard'
}

const Template: Story< ProductCardProps > = (args) => < ProductCard {...args} />;
export const Default = Template.bind({});
Default.args = {};
export const Primary = Template.bind({});
Primary.args = {};

