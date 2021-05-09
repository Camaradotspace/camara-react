import React, { FunctionComponent } from 'react';
import { StyledBadge } from './badge.styles';
import { BadgeProps, StyleProps } from './badge.types';

export const Badge: FunctionComponent<BadgeProps & StyleProps> = ({
  size,
  backgroundColor,
  color,
  shape,
  position,
  text,
  ...rest
}) => {
  return (
    <StyledBadge
      size={size}
      backgroundColor={backgroundColor}
      color={color}
      shape={shape}
      position={position}
      {...rest}
    >
      {text}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  size: 'small',
  shape: 'square',
  text: 'Preview',
};

Badge.displayName = 'Badge';
