import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThreePaneWindow, ThreePaneWindowProps } from '.';

export default {
  title: 'Components/ThreePaneWindow',
  component: ThreePaneWindow,
} as Meta;

const Template: Story<ThreePaneWindowProps> = args => (
  <ThreePaneWindow
    firstPaneChildren={null}
    secondPaneChildren={null}
    thirdPaneChildren={null}
  />
);

// Base default ThreePaneWindow
export const Base = Template.bind({});
