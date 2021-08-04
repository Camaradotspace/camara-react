import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from '.';
import { Flex } from '../flex';
import { Heading } from '..';
import { Button } from '../button';
import { Box } from '../box';
import { Image } from '../image';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

// Base default card
export const Base = Template.bind({});
Base.args = {
  children: <Heading>This is a card</Heading>,
};

// elevated card
export const Elevated = (args: CardProps) => (
  <Box width="480px">
    <Card {...args} elevate>
      <Image
        src="https://source.unsplash.com/V_WBdOLOgJU/600x500"
        alt="woman in black and white crew neck long sleeve shirt wearing purple knit cap"
        width="100%"
      />
      <Heading>Mary Kimberly</Heading>
      <Button variant="primary">Follow</Button>
      <Button variant="secondary">View Profile</Button>
    </Card>
  </Box>
);

// bordered card
export const Bordered = (args: CardProps) => (
  <Flex width="80%" justifyContent="space-between">
    <Box width="45%">
      <Card {...args} bordered>
        <Image
          src="https://source.unsplash.com/V_WBdOLOgJU/600x500"
          alt="woman in black and white crew neck long sleeve shirt wearing purple knit cap"
          width="100%"
        />
        <Heading>Mary Kimberly</Heading>
        <Button variant="primary">Follow</Button>
        <Button variant="secondary">View Profile</Button>
      </Card>
    </Box>
    <Box width="45%">
      <Card {...args} bordered={false}>
        <Image
          src="https://source.unsplash.com/V_WBdOLOgJU/600x500"
          alt="woman in black and white crew neck long sleeve shirt wearing purple knit cap"
          width="100%"
        />
        <Heading>Mary Kimberly</Heading>
        <Button variant="primary">Follow</Button>
        <Button variant="secondary">View Profile</Button>
      </Card>
    </Box>
  </Flex>
);
