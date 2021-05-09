import * as React from 'react';
import { StyledFlex } from './flex.styles';
import { FlexProps } from './flex.types';

export const Flex: React.FC<FlexProps> = ({
  children,
  width,
  justify,
  wrap,
  direction,
  alignContent,
  alignItems,
}) => {
  return (
    <StyledFlex
      width={width}
      justify={justify}
      wrap={wrap}
      direction={direction}
      alignItems={alignItems}
      alignContent={alignContent}
    >
      {children}
    </StyledFlex>
  );
};

Flex.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'flex-start',
  direction: 'row',
  justify: 'center',
  wrap: false,
};

Flex.displayName = 'Flex';
