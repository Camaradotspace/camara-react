import * as React from 'react';
import styled from 'styled-components';
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface FlexProps
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps {
  children: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
  ${compose(border, flexbox, layout, position, space)}
  display: flex;
`;

export const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

Flex.displayName = 'Flex';
