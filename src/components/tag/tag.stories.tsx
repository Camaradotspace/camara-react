import React from 'react';
import { Tag, TagProps } from '.';
import { Story, Meta } from '@storybook/react';
import { Box, Flex } from '../layout';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

// Base default tag
export const Base = Template.bind({});

// example
export const Example = (args: TagProps) => (
  <Flex>
    <Tag {...args} color='#e61b1b'>
      red
    </Tag>
    <Tag {...args} color='#ff8800'>
      orange
    </Tag>
    <Tag {...args} color='#9b069b'>
      purple
    </Tag>
    <Tag {...args} color='#ff6347'>
      tomato
    </Tag>
    <Tag {...args} color='#068d6b'>
      teal
    </Tag>
  </Flex>
);

// sizes
export const Size = (args: TagProps) => (
  <Box>
    <Flex>
      <Tag {...args} size='large' color='#e61b1b'>
        red
      </Tag>
      <Tag {...args} size='large' color='#ff9900'>
        orange
      </Tag>
      <Tag {...args} size='large' color='#9b069b'>
        purple
      </Tag>
      <Tag {...args} size='large' color='#ff6347'>
        tomato
      </Tag>
      <Tag {...args} size='large' color='#068d6b'>
        teal
      </Tag>
    </Flex>
    <Flex>
      <Tag {...args} size='medium' color='#e61b1b'>
        red
      </Tag>
      <Tag {...args} size='medium' color='#ff9900'>
        orange
      </Tag>
      <Tag {...args} size='medium' color='#9b069b'>
        purple
      </Tag>
      <Tag {...args} size='medium' color='#ff6347'>
        tomato
      </Tag>
      <Tag {...args} size='medium' color='#068d6b'>
        teal
      </Tag>
    </Flex>
    <Flex>
      <Tag {...args} size='small' color='#e61b1b'>
        red
      </Tag>
      <Tag {...args} size='small' color='#ff9900'>
        orange
      </Tag>
      <Tag {...args} size='small' color='#9b069b'>
        purple
      </Tag>
      <Tag {...args} size='small' color='#ff6347'>
        tomato
      </Tag>
      <Tag {...args} size='small' color='#068d6b'>
        teal
      </Tag>
    </Flex>
  </Box>
);
