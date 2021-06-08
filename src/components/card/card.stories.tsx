import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Card, CardProps } from '.'
import { Flex } from '../flex'
import { Text } from '../text'
import { Button } from '../button'
import { Box } from '../box'
import { Image } from '../image'

export default {
  title: 'Components/Card',
  component: Card
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

// Base default card
export const Base = Template.bind({})
Base.args = {
  children: <Text>This is a card</Text>
}

// elevated card
export const Elevated = (args: CardProps) => (
  <Box style={{ width: 480 }}>
    <Card {...args} elevate>
      <Image
        src='https://source.unsplash.com/8TQUF6UbpAk/1600x900'
        alt='woman in black and white crew neck long sleeve shirt wearing purple knit cap'
        width='100%'
      />
      <Text>John Doe</Text>
      <Button block pill size='large'>
        Follow
      </Button>
    </Card>
  </Box>
)

// bordered card
export const Bordered = (args: CardProps) => (
  <Flex>
    <Box style={{ width: 300, margin: 4 }}>
      <Card {...args} bordered>
        <Image
          src='https://source.unsplash.com/8TQUF6UbpAk/1600x900'
          alt='woman in black and white crew neck long sleeve shirt wearing purple knit cap'
          width='100%'
        />
        <Text>John Doe</Text>
        <Button block pill size='large'>
          Follow
        </Button>
      </Card>
    </Box>
    <Box style={{ width: 300, margin: 4 }}>
      <Card {...args} bordered={false}>
        <Image
          src='https://source.unsplash.com/8TQUF6UbpAk/1600x900'
          alt='woman in black and white crew neck long sleeve shirt wearing purple knit cap'
          width='100%'
        />
        <Text>John Doe</Text>
        <Button block pill size='large'>
          Follow
        </Button>
      </Card>
    </Box>
  </Flex>
)
