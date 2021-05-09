import React, { FunctionComponent } from 'react';
import { StyleTitle } from './title.styles';
import { TitleProps } from './title.types';

export const Title: FunctionComponent<TitleProps> = ({
  children,
  color,
  level,
  thin,
  align,
}) => {
  return (
    <StyleTitle align={align} color={color} level={level} thin={thin}>
      {children}
    </StyleTitle>
  );
};

Title.defaultProps = {
  level: 1,
  thin: false,
  children: 'This is a title',
  align: 'left',
};

Title.displayName = 'Title';
