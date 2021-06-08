import * as React from 'react'
import { styled } from '../../stitches.config'

export interface SpacerProps {}

const StyledSpacer = styled('div', {})

export const Spacer: React.FC<SpacerProps> = ({ children }) => {
  return <StyledSpacer>{children}</StyledSpacer>
}

Spacer.displayName = 'Spacer'
