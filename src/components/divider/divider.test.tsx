import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from '.';

describe('Divider', () => {
  it('is truthy', () => {
    expect(Divider).toBeTruthy();
  });
  test('it renders the Divider component', () => {
    render(<Divider />);
    screen.debug();
  });
});
