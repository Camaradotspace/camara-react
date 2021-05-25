import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Heading } from '.'
import Box from './box'
import HeadingProps from './heading.types'

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

// Base default Heading
export const Base = Template.bind({})

// level
export const Level = (args: HeadingProps) => (
  <Box>
    <Box>
      <Heading {...args} level={1}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} level={2}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} level={3}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} level={4}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} level={5}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} level={6}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
    </Box>
    <Box>
      <Heading {...args} level={1}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} level={2}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} level={3}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} level={4}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} level={5}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} level={6}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
    </Box>
  </Box>
)

// thin
export const Thin = (args: HeadingProps) => (
  <Box>
    <Box>
      <Heading {...args} fontWeight={200} level={1}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} fontWeight={200} level={2}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} fontWeight={200} level={3}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} fontWeight={200} level={4}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} fontWeight={200} level={5}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
      <Heading {...args} fontWeight={200} level={6}>
        My dream job is to work as a Software Engineer at Microsoft
      </Heading>
    </Box>
    <Box>
      <Heading {...args} fontWeight={200} level={1}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} fontWeight={200} level={2}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} fontWeight={200} level={3}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} fontWeight={200} level={4}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} fontWeight={200} level={5}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
      <Heading {...args} fontWeight={200} level={6}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Heading>
    </Box>
  </Box>
)

// align
export const Align = (args: HeadingProps) => (
  <Box>
    <Heading {...args} textAlign='left' level={1}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} textAlign='center' level={2}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} textAlign='justify' level={3}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} textAlign='right' level={4}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
  </Box>
)

// colors
export const Color = (args: HeadingProps) => (
  <Box>
    <Heading {...args} color='tomato' level={1}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} color='green' level={2}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} color='blue' level={3}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} color='purple' level={4}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} color='orange' level={5}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
    <Heading {...args} color='black' level={6}>
      My dream job is to work as a Software Engineer at Microsoft
    </Heading>
  </Box>
)
