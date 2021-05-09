import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('Card', () => {
  it('is truthy', () => {
    expect(Card).toBeTruthy();
  });
  test('it renders the Card component', () => {
    render(
      <Card>
        <p>I am inside of a Card</p>
        <p>I am inside of a Card</p>
      </Card>
    );
    screen.debug();
  });
});
