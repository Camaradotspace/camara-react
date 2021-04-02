import React from 'react';
import { Title, TitleProps } from '.';
import { Story, Meta } from '@storybook/react';
import { Box } from '../layout';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

// Base default title
export const Base = Template.bind({});

// level
export const Level = (args: TitleProps) => (
  <Box>
    <Box>
      <Title {...args} level={1}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} level={2}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} level={3}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} level={4}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} level={5}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} level={6}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
    </Box>
    <Box>
      <Title {...args} level={1}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} level={2}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} level={3}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} level={4}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} level={5}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} level={6}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
    </Box>
  </Box>
);

// thin
export const Thin = (args: TitleProps) => (
  <Box>
    <Box>
      <Title {...args} thin level={1}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} thin level={2}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} thin level={3}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} thin level={4}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} thin level={5}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
      <Title {...args} thin level={6}>
        My dream job is to work as a Software Engineer at Microsoft
      </Title>
    </Box>
    <Box>
      <Title {...args} thin level={1}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} thin level={2}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} thin level={3}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} thin level={4}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} thin level={5}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
      <Title {...args} thin level={6}>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Title>
    </Box>
  </Box>
);

// align
export const Align = (args: TitleProps) => (
  <Box>
    <Title {...args} align='left' level={1}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} align='center' level={2}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} align='justify' level={3}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} align='right' level={4}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
  </Box>
);

// colors
export const Color = (args: TitleProps) => (
  <Box>
    <Title {...args} color='tomato' level={1}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} color='green' level={2}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} color='blue' level={3}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} color='purple' level={4}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} color='orange' level={5}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
    <Title {...args} color='black' level={6}>
      My dream job is to work as a Software Engineer at Microsoft
    </Title>
  </Box>
);
