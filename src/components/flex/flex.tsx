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
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  alignSelf?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap';
}

const StyledFlex = styled('div', {
  display: 'flex',
});

export const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  wrap,
  direction,
}) => {
  return (
    <StyledFlex
      css={{
        justifyContent: justifyContent,
        flexDirection: direction,
        alignContent: alignContent,
        alignItems: alignItems,
        alignSelf: alignSelf,
        wrap: wrap,
      }}
    >
      {children}
    </StyledFlex>
  );
};

Flex.displayName = 'Flex';
