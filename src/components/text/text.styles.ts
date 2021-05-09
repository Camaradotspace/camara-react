import styled, { css } from 'styled-components';
import { tokens } from '../../constants';
import { TextProps } from './text.types';

const { $2 } = tokens.space;

export const StyledText = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}

  ${(props) =>
    props.inline &&
    css`
      display: inline;
    `}

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

    ${(props) =>
    props.strike &&
    css`
      text-decoration: line-through;
    `}

  ${(props) =>
    props.variant === 'strong' &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.variant === 'sub-heading' &&
    css`
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.variant === 'body' &&
    css`
      font-size: 1rem;
      margin: ${$2} 0;
    `}

  ${(props) =>
    props.variant === 'caption' &&
    css`
      font-size: 0.75rem;
    `}

  ${(props) =>
    props.variant === 'overline' &&
    css`
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 1.5px;
    `}

    ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 16px;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 14px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 12px;
    `}
`;
