import styled, { css } from 'styled-components';
import { BoxProps } from './box.types';

export const StyledBox = styled.div<Partial<BoxProps>>`
  display: block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};

  padding: ${(props) => props.pd}px;
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  // horizontal padding
  ${(props) =>
    props.px &&
    css`
      padding-left: ${props.px}px;
      padding-right: ${props.px}px;
    `}
  // vertical padding
  ${(props) =>
    props.py &&
    css`
      padding-top: ${props.py}px;
      padding-bottom: ${props.py}px;
    `}
  margin: ${(props) => props.mg}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.mr}px;
  // horizontal margin
  ${(props) =>
    props.mx &&
    css`
      margin-left: ${props.mx}px;
      margin-right: ${props.mx}px;
    `}
  // vertical margin
  ${(props) =>
    props.my &&
    css`
      margin-top: ${props.my}px;
      margin-bottom: ${props.my}px;
    `}

  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.debug &&
    css`
      border: 2px solid red;
    `}

  ${(props) =>
    props.border &&
    css`
      border: 1px solid #dadce0;
    `}
`;
