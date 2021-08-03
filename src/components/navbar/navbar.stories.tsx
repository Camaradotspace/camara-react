import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavBar, NavBarProps } from '..';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as Meta;

const Template: Story<NavBarProps> = args => <NavBar />;

// Base default navbar
export const Base = Template.bind({});
