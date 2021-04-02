import React from 'react';
import { Card, CardProps } from '.';
import { Story, Meta } from '@storybook/react';
import { Box, Flex, Spacer } from '../layout';
import { Text } from '../text';
import { Button } from '../button';
import { Image } from '../image';

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
    <Image />
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
      <Card {...args}>
        <Image />
        <Text>John Doe</Text>
        <Button block pill size='large'>
          Follow
        </Button>
      </Card>
    </Box>

    <Spacer ml={40}>
      <Box>
        <Card {...args} bordered={false}>
          <Image />
          <Text>John Doe</Text>
          <Button block pill size='large'>
            Follow
          </Button>
        </Card>
      </Box>
    </Spacer>
  </Flex>
);
