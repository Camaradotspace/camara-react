import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from '.';

describe('Box', () => {
  it('is truthy', () => {
    expect(Box).toBeTruthy();
  });
  test('it renders the Box component', () => {
    render(
      <Box>
        <h1>I am contained in a Box</h1>
      </Box>
    );
    screen.debug();
  });
});
