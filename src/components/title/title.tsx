import * as React from 'react';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { tokens } from '../../constants';

const { $h1, $h2, $h3, $h4, $h5, $h6 } = tokens.fontSizes;

export interface TitleProps {
  /* Text color */
  color?: string;

  /* Children */
  children: React.ReactNode;

  /* What heading level should title be? h1, h2, h3, h4, etc */
  level?: number;

  /* Control thickness of title */
  thin?: boolean;

  /* Set the alignment of the title text */
  align?: 'left' | 'right' | 'center' | 'justify';
}

const StyleTitle = styled.h1<TitleProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.thin === true ? 200 : 'bold')};
  text-align: ${(props) => props.align};
  ${(props) =>
    props.level === 1 &&
    css`
      font-size: ${$h1};
    `};
  ${(props) =>
    props.level === 2 &&
    css`
      font-size: ${$h2};
    `};
  ${(props) =>
    props.level === 3 &&
    css`
      font-size: ${$h3};
    `};
  ${(props) =>
    props.level === 4 &&
    css`
      font-size: ${$h4};
    `};
  ${(props) =>
    props.level === 5 &&
    css`
      font-size: ${$h5};
    `};
  ${(props) =>
    props.level === 6 &&
    css`
      font-size: ${$h6};
    `};
`;

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
