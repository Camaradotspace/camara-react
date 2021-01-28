import * as React from 'react';
import styled, { css } from 'styled-components';

interface StyleProps {
  width?: number;
  center?: boolean;
  debug?: boolean;
  children: React.ReactNode;
}

const StyledBox = styled.div<StyleProps>`
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

export const Box: React.FC<StyleProps> = ({
  children,
  width,
  center,
  debug,
}) => {
  return (
    <StyledBox width={width} center={center} debug={debug}>
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {};

Box.displayName = 'Box';
