import * as React from 'react';
import { StyledSpacer } from './spacer.styles';
import { SpacerProps } from './spacer.types';

export const Spacer: React.FC<SpacerProps> = ({
  children,
  top,
  bottom,
  both,
}) => {
  return (
    <StyledSpacer top={top} bottom={bottom} both={both}>
      {children}
    </StyledSpacer>
  );
};

Spacer.displayName = 'Spacer';
