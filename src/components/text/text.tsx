import React, { FunctionComponent } from 'react';
import { StyledText } from './text.styles';
import { TextProps } from './text.types';

export const Text: FunctionComponent<TextProps> = ({
  variant,
  color,
  children,
  weight,
  italic,
  inline,
  align,
  underline,
  size,
  strike,
  style,
}) => {
  return (
    <StyledText
      style={style}
      color={color}
      variant={variant}
      weight={weight}
      italic={italic}
      inline={inline}
      size={size}
      strike={strike}
      align={align}
      underline={underline}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  variant: 'body',
  size: 'large',
  weight: 'normal',
  italic: false,
  inline: false,
  strike: false,
  align: 'left',
  underline: false,
};

Text.displayName = 'Text';
