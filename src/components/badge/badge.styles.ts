import styled, { css } from 'styled-components';
import { tokens } from '../../constants';
import { StyleProps } from './badge.types';

export const { colors, space, sizes, fontSizes } = tokens;

export const StyledBadge = styled.div<StyleProps>`
  display: inline-block;
  background-color: ${(props) => props.backgroundColor || colors.$primary};
  color: ${(props) => props.color || colors.$white};
  margin: 4px;
  text-align: center;

  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: ${fontSizes.$14};
      padding: 0.15rem 0.5rem;
    `};

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: ${fontSizes.$12};
      padding: 0.15rem 0.4rem;
    `};

  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${fontSizes.$10};
      padding: 0.15rem 0.3rem;
    `};

  ${(props) =>
    props.shape === 'pill' &&
    css`
      border-radius: 1rem;
    `}

  ${(props) =>
    props.shape === 'circle' &&
    props.size === 'small' &&
    css`
      width: 10px;
      height: 10px;
      border-radius: 50%;
      padding: 0.5rem;
    `}

    ${(props) =>
    props.shape === 'circle' &&
    props.size === 'medium' &&
    css`
      width: 15px;
      height: 15px;
      border-radius: 50%;
      padding: 0.5rem;
    `}

    ${(props) =>
    props.shape === 'circle' &&
    props.size === 'large' &&
    css`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      padding: 0.5rem;
    `}
`;
