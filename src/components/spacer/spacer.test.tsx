import React from 'react';
import { render } from '@testing-library/react';
import { Spacer } from '.';

describe('Spacer', () => {
  it('is truthy', () => {
    expect(Spacer).toBeTruthy();
  });
  test('it renders the Spacer component', () => {
    render(
      <Spacer>
        <p>I am in a Spacer</p>
        <p>I am in a Spacer</p>
        <p>I am in a Spacer</p>
      </Spacer>
    );
  });
});
