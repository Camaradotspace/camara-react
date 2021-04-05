import React from 'react';
import { Flex, FlexProps } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

// Base default flex
export const Base = Template.bind({});
