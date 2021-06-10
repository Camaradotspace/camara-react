import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { Box } from '../box';
import { Flex } from '../flex';
import { CamaraTheme } from '../camaraTheme';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

// Base default button
export const Base = Template.bind({});
Base.args = {
  children: 'Say Hello',
  onClick: () => alert('Hello Camara'),
};

// Variants
export const Variants = (args: ButtonProps) => (
  <CamaraTheme>
    <Button {...args} variant="primary">
      Primary
    </Button>
    <Button {...args} variant="secondary">
      Secondary
    </Button>
    <Button {...args} variant="ghost">
      Ghost
    </Button>
  </CamaraTheme>
);

// sizes
export const Sizes = (args: ButtonProps) => (
  <Flex>
    <div>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
    <div>
      <Button {...args} size="medium">
        Medium
      </Button>
    </div>
    <div>
      <Button {...args} size="small">
        Small
      </Button>
    </div>
  </Flex>
);

// disabled buttons
export const Disabled = (args: ButtonProps) => (
  <Flex>
    <div>
      <Button {...args} disabled variant="primary">
        Primary
      </Button>
    </div>
    <div>
      <Button {...args} disabled variant="secondary">
        Secondary
      </Button>
    </div>
    <div>
      <Button {...args} disabled variant="ghost">
        Ghost
      </Button>
    </div>
  </Flex>
);

// danger buttons
export const Danger = (args: ButtonProps) => (
  <Flex>
    <div>
      <Button {...args} danger variant="primary">
        Primary
      </Button>
    </div>
    <div>
      <Button {...args} danger variant="secondary">
        Secondary
      </Button>
    </div>
    <div>
      <Button {...args} danger variant="ghost">
        Ghost
      </Button>
    </div>
  </Flex>
);

// pill-shaped button
export const Pill = (args: ButtonProps) => (
  <Flex>
    <div>
      <Button {...args} pill variant="primary">
        Primary
      </Button>
    </div>
    <div>
      <Button {...args} pill variant="secondary">
        Secondary
      </Button>
    </div>
    <div>
      <Button {...args} pill variant="ghost">
        Ghost
      </Button>
    </div>
  </Flex>
);

// full width button
export const Block = (args: ButtonProps) => (
  <Box>
    <Button {...args} block variant="primary">
      Primary
    </Button>
    <Button {...args} block variant="secondary">
      Secondary
    </Button>
    <Button {...args} block variant="ghost">
      Ghost
    </Button>
  </Box>
);

// With background color
export const BackgroundColor = (args: ButtonProps) => (
  <Button {...args} pill bg="green">
    Camara
  </Button>
);

// With color
export const Color = (args: ButtonProps) => (
  <Button {...args} pill bg="#ffc108" color="#000000">
    Camara
  </Button>
);
