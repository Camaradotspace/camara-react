import React from 'react';
import { styled } from '../../stitches.config';

export interface CardProps {
  /* Should the card elevate on the z-index? */
  elevate?: boolean;
  /* Should card have border around it or be entirely flat? */
  bordered?: boolean;
  /* Content of the card */
  children: React.ReactNode;
  width?: number;
  height?: number;
  round?: boolean;
  bg?: string;
}

const StyledCard = styled('div', {
  bg: '$bg_secondary',
  p: '$3',
  lineHeight: '$copy',
  variants: {
    elevate: {
      true: {
        boxShadow: '$bg_shadow',
      },
    },
    bordered: {
      true: {
        border: '1.5px solid $ui_border',
      },
    },
    round: {
      true: {
        borderRadius: '$3',
      },
    },
  },
});

export const Card: React.FC<CardProps> = ({
  children,
  elevate,
  bordered,
  width,
  height,
  round,
  bg,
  ...rest
}) => {
  return (
    <StyledCard
      css={{
        height: height && height,
        width: width && width,
        bg: bg && bg,
      }}
      elevate={elevate}
      bordered={bordered}
      round={round}
      {...rest}
    >
      {children}
    </StyledCard>
  );
};

Card.displayName = 'Card';
