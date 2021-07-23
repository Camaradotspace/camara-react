import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Tabs } from './tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {},
};

const Template: Story = args => <Tabs {...args} />;

// Base default Tabs
export const Base = Template.bind({});
