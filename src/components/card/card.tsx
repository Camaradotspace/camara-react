import React from 'react';
import styled from 'styled-components';
import {
  border,
  compose,
  flexbox,
  layout,
  space,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
} from 'styled-system';

export interface CardProps
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps {
  /* Should the card elevate on the z-index? */
  elevate?: boolean;
  /* Should card have border around it or be entirely flat? */
  bordered?: boolean;
  /* Content of the card */
  children: React.ReactNode;
}

const StyledCard = styled.div<CardProps>`
  ${compose(space, layout, flexbox, border)}
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: 1rem;
  line-height: 1.5;
  box-shadow: ${({ theme }) => theme.colors.bg.shadow};
  border: ${({ theme }) => theme.colors.ui.border};
`;

export const Card: React.FC<CardProps> = (
  { children, elevate, bordered, ...props },
  ref
) => {
  return (
    <StyledCard ref={ref} elevate={elevate} bordered={bordered} {...props}>
      {children}
    </StyledCard>
  );
};

Card.displayName = 'Card';
