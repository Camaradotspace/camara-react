import * as React from 'react';
import styled, { css } from 'styled-components';
import { tokens } from '../../../utils/tokens';

const { $h1, $h2, $h3, $h4, $h5, $h6 } = tokens.fontSizes;

export interface TitleProps {
  /**
   * Text color
   */
  color?: string;
  /**
   * Children
   */
  children: React.ReactNode;
  level?: number;
  thin?: boolean;
}

export const Title = styled.h1<TitleProps>`
  font-size: ${$h1};
  font-weight: ${(props) => (props.thin === true ? 200 : 'bold')};
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

Title.defaultProps = {};

Title.displayName = 'TitleComponent';
