import * as React from 'react';
import styled, { css } from 'styled-components';

export interface BoxProps {
  width?: number;
  center?: boolean;
  debug?: boolean;
  children: React.ReactNode;
}

const StyledBox = styled.div<BoxProps>`
  width: ${(props) => props.width}%;
  ${(props) =>
    props.center === true &&
    css`
      margin: 0 auto;
    `}
  ${(props) =>
    props.debug === true &&
    css`
      border: 2px solid red;
    `}
`;

export const Box: React.FC<BoxProps> = ({ children, width, center, debug }) => {
  return (
    <StyledBox width={width} center={center} debug={debug}>
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {};

Box.displayName = 'Box';
