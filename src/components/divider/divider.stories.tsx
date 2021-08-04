import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Divider, DividerProps } from '.';
import { Flex, Box } from '..';

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = args => <Divider {...args} />;

// Base default divider
export const Base = Template.bind({});

// types
export const Types = (args: DividerProps) => (
  <>
    <Box my={16}>
      <Divider {...args} type="dashed" />
    </Box>
    <Box my={16}>
      <Divider {...args} type="dotted" />
    </Box>
    <Box my={16}>
      <Divider {...args} type="normal" />
    </Box>
  </>
);
