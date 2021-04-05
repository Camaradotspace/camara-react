import React from 'react';
import { TextArea, TextAreaProps } from '.';
import { Story, Meta } from '@storybook/react';
import { Flex } from '../flex';

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

// Base default textarea
export const Base = Template.bind({});

// helper text
export const HelperText = (args: TextAreaProps) => (
  <Flex>
    <TextArea {...args} label='Description' helperText='example@gmail.com' />
    <TextArea
      {...args}
      label="What's on your mind?"
      helperText='must contain special characters'
    />
  </Flex>
);

// required
export const Required = (args: TextAreaProps) => (
  <Flex>
    <TextArea {...args} required label='First Name' />
    <TextArea {...args} required label='Last Name' />
  </Flex>
);

// hidden label
export const HiddenLabel = (args: TextAreaProps) => (
  <Flex>
    <TextArea {...args} required placeholder='First Name' />
    <TextArea {...args} required placeholder='Last Name' />
  </Flex>
);

// disabled
export const Disabled = (args: TextAreaProps) => (
  <Flex>
    <TextArea {...args} disabled required placeholder='First Name' />
    <TextArea {...args} disabled required placeholder='Last Name' />
  </Flex>
);

// resizable
export const Resizable = (args: TextAreaProps) => (
  <Flex>
    <TextArea {...args} resizable required placeholder='First Name' />
    <TextArea {...args} resizable required placeholder='Last Name' />
  </Flex>
);
