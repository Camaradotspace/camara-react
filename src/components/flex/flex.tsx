import React, { HTMLAttributes } from 'react';
import { SpacingProps } from '../../system';
import { styled } from '../../stitches.config';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /* Content of the flex */
  children: React.ReactNode;
  /* Justify content */
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';
  /* Align items */
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  /* Align content */
  alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  /* Align Self */
  alignSelf?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  /* Flex direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /* Flex wrap */
  wrap?: 'wrap' | 'nowrap';
  /* Show a red border around flex */
  debug?: boolean;
  /* Width of the flex */
  width?: string;
}

const StyledFlex: any = styled('div', {
  display: 'flex',
  variants: {
    debug: {
      true: {
        border: '1px solid red',
      },
    },
  },
});

export const Flex: React.FC<FlexProps & SpacingProps> = ({
  children,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  wrap,
  direction,
  debug,
  width,
  mx,
  my,
  py,
  px,
}) => {
  return (
    <StyledFlex
      debug={debug}
      css={{
        justifyContent: justifyContent,
        flexDirection: direction,
        alignContent: alignContent,
        alignItems: alignItems,
        alignSelf: alignSelf,
        wrap: wrap,
        width: width,
        my,
        mx,
        py,
        px,
      }}
    >
      {children}
    </StyledFlex>
  );
};

Flex.displayName = 'Flex';
