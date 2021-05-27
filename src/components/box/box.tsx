import * as React from 'react';
import styled, { css } from 'styled-components';
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

export interface BoxProps
  extends LayoutProps,
    FlexboxProps,
    BorderProps,
    SpaceProps,
    PositionProps {
  /* Should children of the box be centered? */
  center?: boolean;
  /* Highlight the box on the screen, useful for debug purposes */
  debug?: boolean;
  /* Content of the box */
  children: React.ReactNode;
  /* Set box ARIA role */
  role?:
    | 'article'
    | 'aside'
    | 'details'
    | 'div'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
    | 'section'
    | 'summary';
}

export const StyledBox = styled.div<BoxProps>`
  ${compose(border, flexbox, layout, position, space)}
  box-sizing: border-box;
  min-width: 0;
  display: block;
  ${props =>
    props.center &&
    css`
      margin: 0 auto;
    `}
  ${props =>
    props.debug &&
    css`
      border: 2px solid red;
    `}
`;

export const Box: React.FC<BoxProps> = ({ children, center, debug, role }) => {
  return (
    <StyledBox role={role} center={center} debug={debug}>
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {
  center: false,
  debug: false,
};

Box.displayName = 'Box';
