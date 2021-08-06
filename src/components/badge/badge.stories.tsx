import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Badge, BadgeProps } from '.';
import { Flex } from '../flex';
import { Box } from '../box';

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {} as BadgeProps,
  argTypes: {
    bg: { control: { type: 'color' } },
    color: { control: { type: 'color' } },
  },
} as Meta;

const Template: Story<BadgeProps> = args => (
  <Box width="10%">
    <Badge {...args} />
  </Box>
);

// Base default button
export const Base = Template.bind({});
Base.args = {
  text: 'Say Hello',
};

// sizes
export const Sizes = (args: BadgeProps) => (
  <Flex>
    <Badge {...args} size="large" text="Preview" />
    <Badge {...args} size="medium" text="Preview" />
    <Badge {...args} size="small" text="Preview" />
  </Flex>
);

// shape
export const Shape = (args: BadgeProps) => (
  <Box>
    <Flex>
      <Badge {...args} shape="square" size="large" text="Preview" />
      <Badge {...args} shape="square" size="medium" text="Preview" />
      <Badge {...args} shape="square" size="small" text="Preview" />
    </Flex>
    <Flex>
      <Badge {...args} shape="pill" size="large" text="Preview" />
      <Badge {...args} shape="pill" size="medium" text="Preview" />
      <Badge {...args} shape="pill" size="small" text="Preview" />
    </Flex>
    <Flex>
      <Badge {...args} shape="circle" size="large" text="M" />
      <Badge {...args} shape="circle" size="medium" text="M" />
      <Badge {...args} shape="circle" size="small" text="M" />
    </Flex>
  </Box>
);

// Background color
export const BackgroundColor = (args: BadgeProps) => (
  <Box>
    <Flex>
      <Badge {...args} shape="square" size="large" text="Preview" />
      <Badge {...args} shape="square" size="medium" text="Preview" />
      <Badge {...args} shape="square" size="small" text="Preview" />
    </Flex>
    <Flex>
      <Badge {...args} shape="pill" size="large" text="Preview" />
      <Badge {...args} shape="pill" size="medium" text="Preview" />
      <Badge {...args} shape="pill" size="small" text="Preview" />
    </Flex>
    <Flex>
      <Badge {...args} shape="circle" size="large" text="M" />
      <Badge {...args} shape="circle" size="medium" text="M" />
      <Badge {...args} shape="circle" size="small" text="M" />
    </Flex>
  </Box>
);
BackgroundColor.args = {
  bg: 'purple',
  color: '#fff',
} as BadgeProps;
