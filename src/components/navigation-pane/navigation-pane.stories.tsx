import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavigationPane, NavigationPaneProps } from '.';

export default {
  title: 'Components/NavigationPane',
  component: NavigationPane,
} as Meta;

const Template: Story<NavigationPaneProps> = args => (
  <NavigationPane {...args} />
);

// Base default NavigationPane
export const Base = Template.bind({});
Base.args = {} as NavigationPaneProps;
