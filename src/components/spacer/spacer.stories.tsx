import React from 'react';
import { Spacer, SpacerProps } from '.';
import { Meta } from '@storybook/react';
import { Button } from '../button';
import { Box } from '../box';

export default {
  title: 'Components/Spacer',
  component: Spacer,
} as Meta;

// spacing top
export const Top = (args: SpacerProps) => (
  <Box width={300}>
    <Button block>No Spacing</Button>
    <Spacer {...args}>
      <Button block>Spacing Top</Button>
    </Spacer>
  </Box>
);
Top.args = { top: true };

// spacing bottom
export const Bottom = (args: SpacerProps) => (
  <Box width={300}>
    <Spacer {...args}>
      <Button block>Spacing Bottom</Button>
    </Spacer>
    <Button block>No Spacing</Button>
  </Box>
);
Bottom.args = { bottom: true };

// spacing both
export const Both = (args: SpacerProps) => (
  <Box width={300}>
    <Button block>No Spacing</Button>
    <Spacer {...args}>
      <Button block>Spacing Both</Button>
    </Spacer>
    <Button block>No Spacing</Button>
  </Box>
);
Both.args = { both: true };
