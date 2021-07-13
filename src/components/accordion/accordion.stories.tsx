import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionProps } from '.';
import { Badge } from '..';
import { ChevronsRight } from 'react-feather';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    title: 'Accordion Title',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  argTypes: {},
  parameters: { controls: { sort: 'requiredFirst' } },
} as Meta;

const Template: Story<AccordionProps> = args => <Accordion {...args} />;

// Base default accordion
export const Base = Template.bind({});
Base.args = {};

// Accordion expanded by default
export const Expanded = Template.bind({});
Expanded.args = { expanded: true };

// Accordion with a prefix
export const Prefixed = Template.bind({});
Prefixed.args = {
  prefix: <Badge text="C" color="orange" size="large" shape="circle" />,
};

// Accordion with a custom icon
export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: <ChevronsRight color="#777" size={16} />,
};
