import React from 'react';
import { Button } from '.';

export default {
  title: 'Button',
};

// variants
export const Primary = () => <Button variant='primary'>Primary</Button>;

export const Secondary = () => <Button variant='secondary'> Secondary</Button>;

export const Ghost = () => <Button variant='ghost'>Ghost</Button>;

// sizes

export const Large = () => (
  <Button variant='primary' size='large'>
    Large
  </Button>
);

export const Medium = () => (
  <Button variant='primary' size='medium'>
    Medium
  </Button>
);

export const Small = () => (
  <Button variant='primary' size='small'>
    Small
  </Button>
);

// disabled button
export const Disabled = () => (
  <Button variant='primary' disabled>
    Disabled
  </Button>
);

// danger button
export const Danger = () => (
  <Button variant='primary' danger>
    Danger
  </Button>
);

// pill-shaped button
export const Pill = () => (
  <Button variant='primary' pill>
    Camara
  </Button>
);

// With background color
export const BackgroundColor = () => (
  <Button variant='primary' pill backgroundColor='green'>
    Camara
  </Button>
);

// With color
export const Color = () => (
  <Button variant='primary' pill backgroundColor='#ffc108' color='#000000'>
    Camara
  </Button>
);
