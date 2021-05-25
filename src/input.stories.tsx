import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Input } from '.'
import Box from './box'
import Flex from './flex'
import InputProps from './input.types'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

// Base default input field
export const Base = Template.bind({})

// Block
export const Block = (args: InputProps) => (
  <Box>
    <Input {...args} label='First Name' />
    <Input {...args} label='Last Name' />
  </Box>
)

// inline
export const Inline = (args: InputProps) => (
  <Flex>
    <Input {...args} inline label='First Name' />
    <Input {...args} inline label='Last Name' />
  </Flex>
)

// inline
export const HelperText = (args: InputProps) => (
  <Flex>
    <Input
      {...args}
      label='Email Address'
      type='email'
      helperText='example@gmail.com'
    />
    <Input
      {...args}
      label='Password'
      type='password'
      helperText='must contain special characters'
    />
  </Flex>
)

// required
export const Required = (args: InputProps) => (
  <Flex>
    <Input {...args} required label='First Name' />
    <Input {...args} required label='Last Name' />
  </Flex>
)

// hidden label
export const HiddenLabel = (args: InputProps) => (
  <Flex>
    <Input {...args} required placeholder='First Name' />
    <Input {...args} required placeholder='Last Name' />
  </Flex>
)

// disabled
export const Disabled = (args: InputProps) => (
  <Flex>
    <Input {...args} disabled required placeholder='First Name' />
    <Input {...args} disabled required placeholder='Last Name' />
  </Flex>
)
