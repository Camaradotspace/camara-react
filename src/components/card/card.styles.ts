import styled, { css } from 'styled-components';
import { CardProps } from './card.types';

export const StyledCard = styled.div<CardProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  line-height: 1.5;
  ${(props) =>
    props.elevate &&
    css`
      box-shadow: 2px 4px 8px #dadce0;
    `}
  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid #dadce0;
    `}
`;
