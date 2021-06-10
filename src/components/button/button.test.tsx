import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('is truthy', () => {
    expect(Button).toBeTruthy();
  });
  test('it renders the Button component', () => {
    render(<Button>Button</Button>);
    screen.debug();
  });
});
