import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
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
    /* Height of the card */
    height?: string;
    /* Width of the card */
    width?: string;
    /* Should card have border around it or be entirely flat? */
    bordered?: boolean;
    /* Content of the card */
    children: React.ReactNode;
  };

export type CardProps = StyledCardProps;

export const StyledCard = styled.div<CardProps>`
  ${compose(margin, layout, flexbox, border)}
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: 1rem;
  border-radius: 8px;
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

export const Card: FunctionComponent<CardProps> = ({
  children,
  elevate,
  height,
  width,
  bordered,
}) => {
  return (
    <StyledCard
      elevate={elevate}
      height={height}
      width={width}
      bordered={bordered}
    >
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  width: '400px',
  height: 'auto',
  elevate: false,
};

Card.displayName = 'Card';
