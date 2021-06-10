import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputField, InputProps } from '.';
import { Box } from '../box';
import { Flex } from '../flex';

export default {
  title: 'Components/Input',
  component: InputField,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = args => <InputField {...args} />;

// Base default input field
export const Base = Template.bind({});

// Block
export const Block = (args: InputProps) => (
  <Box>
    <InputField {...args} label="First Name" />
    <InputField {...args} label="Last Name" />
  </Box>
);

// inline
export const Inline = (args: InputProps) => (
  <Flex>
    <InputField {...args} inline label="First Name" />
    <InputField {...args} inline label="Last Name" />
  </Flex>
);

// inline
export const HelperText = (args: InputProps) => (
  <Flex>
    <InputField
      {...args}
      label="Email Address"
      type="email"
      helperText="example@gmail.com"
    />
    <InputField
      {...args}
      label="Password"
      type="password"
      helperText="must contain special characters"
    />
  </Flex>
);

// required
export const Required = (args: InputProps) => (
  <Flex>
    <InputField {...args} required label="First Name" />
    <InputField {...args} required label="Last Name" />
  </Flex>
);

// hidden label
export const HiddenLabel = (args: InputProps) => (
  <Flex>
    <InputField {...args} required placeholder="First Name" />
    <InputField {...args} required placeholder="Last Name" />
  </Flex>
);

// disabled
export const Disabled = (args: InputProps) => (
  <Flex>
    <InputField {...args} disabled required placeholder="First Name" />
    <InputField {...args} disabled required placeholder="Last Name" />
  </Flex>
);
