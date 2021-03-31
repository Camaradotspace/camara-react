import React from 'react';
import { Image, ImageProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

// Base default button
export const Base = Template.bind({});
