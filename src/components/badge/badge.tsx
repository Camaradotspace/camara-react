import React from 'react';
import { styled } from '../../stitches.config';

export interface BadgeProps {
  /* Size of the badge */
  size?: 'large' | 'medium' | 'small';
  /* Shape of badge */
  shape?: 'pill' | 'circle' | 'square';
  text: string | React.ReactNode;
  bg?: string;
  color?: string;
}

const StyledBadge = styled('div', {
  display: 'inline-block',
  bg: '$brand_primary',
  color: '$text_inverse',
  textAlign: 'center',
  m: '$1',
  // badge variants
  variants: {
    // size prop
    size: {
      large: {
        fontSize: '$4',
        padding: '0.15rem 0.5rem',
      },
      medium: {
        fontSize: '$3',
        padding: '0.15rem 0.4rem',
      },
      small: {
        fontSize: '$2',
        padding: '0.15rem 0.3rem',
      },
    },
    // shape prop
    shape: {
      pill: {
        borderRadius: '$4',
      },
      circle: {
        borderRadius: '$round',
      },
      square: {},
    },
  },
  // compound variants
  compoundVariants: [
    {
      shape: 'circle',
      size: 'small',
      css: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        padding: '0.5rem',
      },
    },
    {
      shape: 'circle',
      size: 'medium',
      css: {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        padding: '0.5rem',
      },
    },
    {
      shape: 'circle',
      size: 'large',
      css: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        padding: '0.5rem',
      },
    },
  ],
});

export const Badge: React.FC<BadgeProps> = ({
  size,
  shape,
  text,
  color,
  bg,
}) => {
  return (
    <StyledBadge
      size={size}
      shape={shape}
      css={{ backgroundColor: bg, color: color }}
    >
      {text}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  size: 'small',
  shape: 'square',
};

Badge.displayName = 'Badge';
