import React, { forwardRef } from 'react';
import styled, { css, StyledComponentProps } from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
} from 'styled-system';

type StyledCardProps = MarginProps &
  LayoutProps &
  FlexboxProps &
  BorderProps & {
    /* Should the card elevate on the z-index? */
    elevate?: boolean;
    /* Should card have border around it or be entirely flat? */
    bordered?: boolean;
    /* Content of the card */
    children: React.ReactNode;
  };

export type CardProps = StyledComponentProps<
  'div',
  any,
  StyledCardProps,
  never
>;

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

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, elevate, bordered, ...props }, ref) => {
    return (
      <StyledCard ref={ref} elevate={elevate} bordered={bordered} {...props}>
        {children}
      </StyledCard>
    );
  }
);

Card.defaultProps = {
  width: '400px',
  height: 'auto',
  elevate: false,
};

Card.displayName = 'Card';
