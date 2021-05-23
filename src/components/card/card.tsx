import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { border, compose, flexbox, layout, margin } from 'styled-system';
import CardProps from './card.types';

export const StyledCard = styled.div<CardProps>`
  ${compose(margin, layout, flexbox, border)}
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: 1rem;
  line-height: 1.5;
  ${(props) =>
    props.elevate &&
    css`
      box-shadow: 2px 4px 8px ${({ theme }) => theme.colors.bg.shadow};
    `}
  ${(props) =>
    props.bordered &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.ui.border};
    `}
`;

export const Card: React.FunctionComponent<CardProps> = forwardRef<
  HTMLDivElement,
  CardProps
>(({ children, elevate, bordered, ...props }, ref) => {
  return (
    <StyledCard ref={ref} elevate={elevate} bordered={bordered} {...props}>
      {children}
    </StyledCard>
  );
});

Card.displayName = 'Card';
