import React, { FunctionComponent } from 'react';
import { StyledCard } from './card.styles';
import { CardProps } from './card.types';

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
