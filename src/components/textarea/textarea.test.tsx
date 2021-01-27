import * as React from 'react';
import { render } from '@testing-library/react';

import { TextArea, TextAreaProps } from '.';

describe('TextArea', () => {
  it('is truthy', () => {
    expect(TextArea).toBeTruthy();
  });
});

let props: TextAreaProps;

test('textarea renders with default placeholder text', () => {
  const { queryByPlaceholderText } = render(<TextArea {...props} />);

  expect(queryByPlaceholderText('This is a text area')).toBeTruthy();
});
