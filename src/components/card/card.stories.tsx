import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card } from '.';
import { Flex } from '../flex';
import { Text } from '../text';
import { Button } from '../button';
import { Box } from '../box';
import { Image } from '../image';
import CardProps from './card.types';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

// Base default card
export const Base = Template.bind({});
Base.args = {
  children: 'This is a card',
};

// elevated card
export const Elevated = (args: CardProps) => (
  <Card {...args} elevate>
    <Image
      imageUrl='https://source.unsplash.com/8TQUF6UbpAk/1600x900'
      imageAlt='woman in black and white crew neck long sleeve shirt wearing purple knit cap'
      width='100%'
    />
    <Text>John Doe</Text>
    <Button block pill size='large'>
      Follow
    </Button>
  </Card>
);

// bordered card
export const Bordered = (args: CardProps) => (
  <Flex>
    <Box>
      <Card {...args} bordered>
        <Image
          imageUrl='https://source.unsplash.com/8TQUF6UbpAk/1600x900'
          imageAlt='woman in black and white crew neck long sleeve shirt wearing purple knit cap'
          width='100%'
        />
        <Text>John Doe</Text>
        <Button block pill size='large'>
          Follow
        </Button>
      </Card>
    </Box>
    <Box ml={40}>
      <Card {...args} bordered={false}>
        <Image
          imageUrl='https://source.unsplash.com/8TQUF6UbpAk/1600x900'
          imageAlt='woman in black and white crew neck long sleeve shirt wearing purple knit cap'
          width='100%'
        />
        <Text>John Doe</Text>
        <Button block pill size='large'>
          Follow
        </Button>
      </Card>
    </Box>
  </Flex>
);
