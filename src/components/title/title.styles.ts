import styled, { css } from 'styled-components';
import { tokens } from '../../constants';
import { TitleProps } from './title.types';

const { $h1, $h2, $h3, $h4, $h5, $h6 } = tokens.fontSizes;

export const StyleTitle = styled.h1<TitleProps>`
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
