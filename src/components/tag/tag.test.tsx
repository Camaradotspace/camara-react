import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tag } from '.';

describe('Tag', () => {
  it('is truthy', () => {
    expect(Tag).toBeTruthy();
  });
  test('it renders the Tag component', () => {
    render(<Tag color="green">Camara</Tag>);
    screen.debug();
  });
});
