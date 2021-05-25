import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Box } from '.'
import BoxProps from './box.types'

export default {
  title: 'Components/Box',
  component: Box
} as Meta

const Template: Story<BoxProps> = (args) => <Box {...args} />

// Base default box
export const Base = Template.bind({})
