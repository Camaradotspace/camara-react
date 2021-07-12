import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Switch, SwitchProps } from '.';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    id: {
      description: 'Switch ID',
      defaultValue: Math.random()
        .toString(36)
        .substring(2, 9),
    },
    onColor: {
      description: 'What color should the switch be when turned on?',
      control: { type: 'color' },
    },
    size: {
      description: 'What size should the switch be?',
      defaultValue: 'small',
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    isOn: {
      description: 'Should the switch be on?',
      defaultValue: false,
    },
  },
  args: {
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    isOn: false,
    onColor: '#EF476F',
    size: 'small',
  },
} as Meta;

const Template: Story<SwitchProps> = args => {
  const [{ isOn }, updateArgs] = useArgs();
  const handleToggle = () => updateArgs({ isOn: !isOn });
  return <Switch {...args} css={{}} isOn={isOn} handleToggle={handleToggle} />;
};

// Base switch component
export const Base = Template.bind({});
Base.args = {};

// Custom on color
export const OnColor = Template.bind({});
OnColor.args = {
  onColor: 'orange',
};

// Size of the switch
export const Size = Template.bind({});
Size.args = {
  size: 'large',
};
