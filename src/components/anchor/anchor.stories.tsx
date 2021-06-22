import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Anchor, AnchorProps } from '.';
import { Box } from '../box';
import { Card } from '../card';
import { Heading } from '../heading';
import { Text } from '../text';
import { Image } from '../image';
import { Flex } from '../flex';

export default {
  title: 'Components/Anchor',
  component: Anchor,
  args: { children: 'Camara Link', variant: 'primary', underline: true },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  parameters: { controls: { sort: 'requiredFirst' } },
} as Meta;

const Template: Story<AnchorProps> = args => <Anchor {...args} />;

// Base default anchor
export const Base = Template.bind({});
Base.args = {};

// open link in new tab
export const External = Template.bind({});
External.args = {
  external: true,
  variant: 'secondary',
};

// underline can be false
export const NoUnderline = Template.bind({});
NoUnderline.args = {
  external: true,
  variant: 'secondary',
  underline: false,
};

// links can span multiple lines
export const MultipleLines = (args: AnchorProps) => (
  <Anchor {...args} href="#">
    Buttons are user interface elements that initiates actions. This is their
    primary function and it is this function that makes them very different from
    links particularly on the web.
  </Anchor>
);

// external links are secure
export const Security = (args: AnchorProps) => (
  <Box>
    <Heading>Security</Heading>
    <Text>For an external link we add `rel='noopener noreferrer'`</Text>
    <Text>
      This{' '}
      <Anchor {...args} href="#" external>
        external link
      </Anchor>{' '}
      has added security related tags in it
    </Text>
  </Box>
);

// example 1
export const Wikipedia = (args: AnchorProps) => (
  <Box>
    <Anchor {...args} underline={false} href="#">
      <Heading level={2}>Omakase - Wikipedia</Heading>
    </Anchor>
    <Text>
      Omakase (Japanese: お任せ, Hepburn: o-makase) is a Japanese phrase, used
      when ordering sushi in restaurants, that means 'I'll leave it up to you'
      (from Japanese 'to entrust' (任せる, makaseru)).
    </Text>

    <Text>
      <Anchor {...args} underline={false} href="#">
        Usage
      </Anchor>{' '}
      ·{' '}
      <Anchor {...args} underline={false} href="#">
        Characteristics
      </Anchor>
    </Text>
  </Box>
);

// another example
export const GoogleSearch = (args: AnchorProps) => (
  <Box css={{ width: '75%' }}>
    <Card round elevate>
      <Anchor {...args} href="#" underline={false}>
        <Heading level={3}>Lemons: Health Benefits & Nutrition Facts</Heading>
      </Anchor>
      <Flex justifyContent="space-between">
        <Box css={{ width: '72%' }}>
          <Text size="small">
            Lemons contain a high amount of vitamin C, soluble fiber, and plant
            compounds that give them a number of health bene...
          </Text>
        </Box>
        <Box css={{ width: '22%' }}>
          <Image
            src="https://res.cloudinary.com/beaniegram/image/upload/v1624339059/lemon.jpg"
            alt="sliced lemon fruit with squeezed juice in glass cup"
            fit="cover"
            width="100%"
            height="100%"
            style={{ borderRadius: '0.5rem' }}
          />
        </Box>
      </Flex>
    </Card>
  </Box>
);
