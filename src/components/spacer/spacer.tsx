import React from 'react';
import { SpacingProps } from 'system';
import { styled } from '../../stitches.config';

const StyledSpacer = styled('div', {});

export const Spacer = ({ ...rest }: SpacingProps) => {
  return <StyledSpacer css={{ ...rest }}></StyledSpacer>;
};
