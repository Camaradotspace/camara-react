import React from 'react';
import { Badge, BadgeProps } from '.';
import { Story, Meta } from '@storybook/react';
import { Flex } from '../layout';
import { Box } from '../box';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

// Base default button
export const Base = Template.bind({});
Base.args = {
  text: 'Say Hello',
};

// sizes
export const Sizes = (args: BadgeProps) => (
  <Flex>
    <Badge {...args} size='large' text='Preview' />
    <Badge {...args} size='medium' text='Preview' />
    <Badge {...args} size='small' text='Preview' />
  </Flex>
);

// shape
export const Shape = (args: BadgeProps) => (
  <Box>
    <Flex>
      <Badge {...args} shape='square' size='large' text='Preview' />
      <Badge {...args} shape='square' size='medium' text='Preview' />
      <Badge {...args} shape='square' size='small' text='Preview' />
    </Flex>
    <Flex>
      <Badge {...args} shape='pill' size='large' text='Preview' />
      <Badge {...args} shape='pill' size='medium' text='Preview' />
      <Badge {...args} shape='pill' size='small' text='Preview' />
    </Flex>
    <Flex>
      <Badge {...args} shape='circle' size='large' text='M' />
      <Badge {...args} shape='circle' size='medium' text='M' />
      <Badge {...args} shape='circle' size='small' text='M' />
    </Flex>
  </Box>
);
