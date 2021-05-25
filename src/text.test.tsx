import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '.';

describe('Text', () => {
  it('is truthy', () => {
    expect(Text).toBeTruthy();
  });
  test('it renders the Test component', () => {
    render(<Text>I am a text</Text>);
    screen.debug();
  });
});
