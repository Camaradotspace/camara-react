import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  it('is truthy', () => {
    expect(Heading).toBeTruthy();
  });
});

test('it renders the Heading component', () => {
  render(<Heading>I am a Heading</Heading>);
  screen.debug();
});
