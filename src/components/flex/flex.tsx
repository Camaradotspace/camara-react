import React, { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';
}

const StyledFlex = styled('div', {
  display: 'flex',
});

export const Flex: React.FC<FlexProps> = ({ children, justifyContent }) => {
  return (
    <StyledFlex css={{ justifyContent: justifyContent }}>{children}</StyledFlex>
  );
};

Flex.displayName = 'Flex';
