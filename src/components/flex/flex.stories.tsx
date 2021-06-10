import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Flex, FlexProps } from '.';
import { Image } from '../image';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<FlexProps> = args => (
  <Flex {...args} justifyContent="space-between">
    <Image
      width="49%"
      src="https://source.unsplash.com/V_WBdOLOgJU/600x500"
      alt="woman in orange knit cap and blue jacket"
      loading="eager"
    />

    <Image
      width="49%"
      src="https://source.unsplash.com/V_WBdOLOgJU/600x500"
      alt="woman in orange knit cap and blue jacket"
      loading="lazy"
    />
  </Flex>
);

// Base default flex
export const Base = Template.bind({});
