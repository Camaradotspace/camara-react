import * as React from 'react';
import styled, { css } from 'styled-components';

export interface SpacerProps {
  /* Should spacer be at the top? */
  bottom?: boolean;

  /* Should spacer be at the bottom? */
  top?: boolean;

  /* Should spacer be at the vertical axis? */
  both?: boolean;

  /* Content of the spacer */
  children: React.ReactNode;
}

const StyledSpacer = styled.div<SpacerProps>`
  // vertical spacer
  ${(props) =>
    props.both &&
    css`
      margin-top: 1rem;
      margin-bottom: 1rem;
    `}
  // top spacer
  ${(props) =>
    props.top &&
    css`
      margin-top: 1rem;
    `}
  // bottom spacer
  ${(props) =>
    props.bottom &&
    css`
      margin-bottom: 1rem;
    `}
`;

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
