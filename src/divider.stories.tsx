import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Divider } from '.'
import Box from './box'
import DividerProps from './divider.types'

export default {
  title: 'Components/Divider',
  component: Divider
} as Meta

const Template: Story<DividerProps> = (args) => <Divider {...args} />

// Base default divider
export const Base = Template.bind({})

// types
export const Types = (args: DividerProps) => (
  <Box>
    <Divider {...args} type='dashed' />
    <Divider {...args} type='dotted' />
    <Divider {...args} type='normal' />
  </Box>
)
