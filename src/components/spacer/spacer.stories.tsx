import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spacer } from './spacer';
import { SpacingProps } from '../../system';

export default {
  title: 'Components/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args: SpacingProps) => (
  <Spacer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
