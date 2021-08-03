import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NotificationDot, NotificationDotProps } from '.';

export default {
  title: 'Components/NotificationDot',
  component: NotificationDot,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<NotificationDotProps> = args => (
  <NotificationDot {...args} />
);

// Base default NotificationDot
export const Base = Template.bind({});
