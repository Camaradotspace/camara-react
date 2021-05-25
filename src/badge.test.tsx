import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '.';

describe('Badge', () => {
  it('is truthy', () => {
    expect(Badge).toBeTruthy();
  });
  test('it renders the Badge component', () => {
    render(<Badge text='CN' />);
    screen.debug();
  });
});
