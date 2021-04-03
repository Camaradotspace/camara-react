import React from 'react';
import { Anchor, AnchorProps } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Anchor',
  component: Anchor,
  args: {
    href: 'https://source.unsplash.com/8TQUF6UbpAk/1600x900',
    children: 'Click me',
  },
} as Meta;

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />;

// Base default anchor
export const Base = Template.bind({});

// open link in new tab
export const asNew = (args: AnchorProps) => <Anchor {...args} asNew />;

// link appear as Button
export const asButton = (args: AnchorProps) => <Anchor {...args} asButton />;
