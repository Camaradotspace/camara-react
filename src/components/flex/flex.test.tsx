import React from 'react';
import { render, screen } from '@testing-library/react';
import { Flex } from '.';

describe('Flex', () => {
  it('is truthy', () => {
    expect(Flex).toBeTruthy();
  });
  test('it renders the Flex component', () => {
    render(
      <Flex wrap>
        <p>I am inside of a Flex</p>
        <p>I am inside of a Flex</p>
        <p>I am inside of a Flex</p>
      </Flex>
    );
    screen.debug();
  });
});
