import React from 'react';
import { Box, BoxProps } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

// Base default box
export const Base = Template.bind({});
