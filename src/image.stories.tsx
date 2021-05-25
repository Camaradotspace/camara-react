import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Image } from '.'
import ImageProps from './image.types'

export default {
  title: 'Components/Image',
  component: Image
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

// Base default button
export const Base = Template.bind({})
