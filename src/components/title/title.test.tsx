import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '.';

describe('Title', () => {
  it('is truthy', () => {
    expect(Title).toBeTruthy();
  });
});

test('it renders the Title component', () => {
  render(<Title>I am a Title</Title>);
  screen.debug();
});
