import React from 'react';
import { styled } from '../../stitches.config';

export interface NotificationDotProps {
  /* Should dot be hidden */
  hidden?: boolean;
}

const NotificationDotStyle = styled('div', {
  borderRadius: '$round',
  width: '12px',
  height: '12px',
  my: '$1',
});

export const NotificationDot: React.FC<NotificationDotProps> = ({ hidden }) => {
  return (
    <NotificationDotStyle
      css={{ backgroundColor: hidden ? 'none' : '$brand_primary' }}
    />
  );
};
