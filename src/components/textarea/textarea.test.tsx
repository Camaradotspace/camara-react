import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TextArea, TextAreaProps } from '.';

describe('TextArea', () => {
  it('is truthy', () => {
    expect(TextArea).toBeTruthy();
  });
});

test('it renders the TextArea component', () => {
  render(<TextArea />);
  screen.debug();
});

let props: TextAreaProps;

test('textarea renders with default placeholder text', () => {
  const { queryByPlaceholderText } = render(
    <TextArea {...props} placeholder="This is a text area" />
  );

  expect(queryByPlaceholderText('This is a text area')).toBeTruthy();
});
