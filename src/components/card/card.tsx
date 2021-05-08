import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

export interface CardProps {
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
}

const StyledCard = styled.div<CardProps>`
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
  bordered: true,
};

Card.displayName = 'Card';
