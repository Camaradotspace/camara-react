import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputField } from '.';

describe('Input', () => {
  it('is truth', () => {
    expect(InputField).toBeTruthy();
  });
  test('it renders the Input component', () => {
    render(<InputField />);
    screen.debug();
  });
});
