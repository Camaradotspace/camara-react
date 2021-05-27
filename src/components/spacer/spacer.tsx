import * as React from 'react';
import styled from 'styled-components';
import { compose, space, SpaceProps } from 'styled-system';

export interface SpacerProps extends SpaceProps {}

const StyledSpacer = styled.div<SpacerProps>`
  ${compose(space)}
`;

export const Spacer: React.FC<SpacerProps> = ({ children }) => {
  return <StyledSpacer>{children}</StyledSpacer>;
};

Spacer.displayName = 'Spacer';
