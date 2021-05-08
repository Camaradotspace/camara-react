import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from '.';
import { Flex } from '../flex';
import { Box } from '../box';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text style={{ color: 'green', fontSize: 32 }} {...args} />
);

// Base default text
export const Base = Template.bind({});
Base.args = {
  children: 'This is a text component',
};

// variants
export const Variant = (args: TextProps) => (
  <Box>
    <Flex justify='space-between'>
      <Box>
        <Text {...args} variant='body'>
          This is a body text
        </Text>
        <Text {...args} variant='sub-heading'>
          This is a sub heading
        </Text>
        <Text {...args} variant='caption'>
          This is a caption
        </Text>
        <Text {...args} variant='overline'>
          This is an overline
        </Text>
        <Text {...args} variant='strong'>
          This is a strong text
        </Text>
      </Box>
      <Box>
        <Text {...args} variant='body'>
          私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
        </Text>
        <Text {...args} variant='sub-heading'>
          私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
        </Text>
        <Text {...args} variant='caption'>
          私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
        </Text>
        <Text {...args} variant='overline'>
          私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
        </Text>
        <Text {...args} variant='strong'>
          私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
        </Text>
      </Box>
    </Flex>
  </Box>
);

// weight
export const Weight = (args: TextProps) => (
  <Box>
    <Box>
      <Text {...args} weight='bold'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
      <Text {...args} weight='bold'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
    </Box>

    <Box>
      <Text {...args} weight='normal'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
      <Text {...args} weight='normal'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
    </Box>
  </Box>
);

// italic
export const Italic = (args: TextProps) => (
  <Box>
    <Text {...args} italic>
      My dream job is to work as a Software Engineer at Microsoft
    </Text>
    <Text {...args} italic>
      私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
    </Text>
  </Box>
);

// inline
export const Inline = (args: TextProps) => (
  <Box>
    <Text {...args} inline>
      My dream job is to work as a Software Engineer at Microsoft
    </Text>
    <Text {...args} inline>
      私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
    </Text>
  </Box>
);

// align
export const Align = (args: TextProps) => (
  <Box>
    <Box>
      <Text {...args} align='left'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
      <Text {...args} align='center'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
      <Text {...args} align='justify'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
      <Text {...args} align='right'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
    </Box>
    <Box>
      <Text {...args} align='left'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
      <Text {...args} align='center'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
      <Text {...args} align='justify'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
      <Text {...args} align='right'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
    </Box>
  </Box>
);

// underline
export const Underline = (args: TextProps) => (
  <Box>
    <Text {...args} underline>
      My dream job is to work as a Software Engineer at Microsoft
    </Text>
    <Text {...args} underline>
      私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
    </Text>
  </Box>
);

// size
export const Size = (args: TextProps) => (
  <Box>
    <Box>
      <Text {...args} size='large'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
      <Text {...args} size='medium'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
      <Text {...args} size='small'>
        My dream job is to work as a Software Engineer at Microsoft
      </Text>
    </Box>
    <Box>
      <Text {...args} size='large'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
      <Text {...args} size='medium'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
      <Text {...args} size='small'>
        私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
      </Text>
    </Box>
  </Box>
);

// strike
export const Strike = (args: TextProps) => (
  <Box>
    <Text {...args} strike>
      My dream job is to work as a Software Engineer at Microsoft
    </Text>
    <Text {...args} strike>
      私の夢の仕事は、Microsoft❤でソフトウェアエンジニアとして働くことです。
    </Text>
  </Box>
);
