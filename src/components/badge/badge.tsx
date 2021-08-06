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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bg: '$brand_primary',
  m: '$1',
  '& p': {
    color: '$text_inverse',
    textAlign: 'center',
  },
  // badge variants
  variants: {
    // size prop
    size: {
      large: {
        '& p': {
          fontSize: '$3',
          padding: '0.15rem 0.5rem',
        },
      },
      medium: {
        '& p': {
          fontSize: '$2',
          padding: '0.15rem 0.4rem',
        },
      },
      small: {
        '& p': {
          fontSize: '$1',
          padding: '0.15rem 0.3rem',
        },
      },
    },
    // shape prop
    shape: {
      pill: {
        borderRadius: '$4',
      },
      circle: {
        borderRadius: '$round',
        padding: '$1',
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
        width: '16px',
        height: '16px',
        borderRadius: '50%',
      },
    },
    {
      shape: 'circle',
      size: 'medium',
      css: {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
      },
    },
    {
      shape: 'circle',
      size: 'large',
      css: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
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
      css={{
        backgroundColor: bg,
        '& p': {
          color: color,
        },
      }}
    >
      <p>{text}</p>
    </StyledBadge>
  );
};

Badge.defaultProps = {
  size: 'small',
  shape: 'square',
};

Badge.displayName = 'Badge';
