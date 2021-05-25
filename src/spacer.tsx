import * as React from 'react'
import styled from 'styled-components'
import { compose, space } from 'styled-system'
import SpacerProps from './spacer.types'

const StyledSpacer = styled.div<SpacerProps>`
  ${compose(space)}
`

const Spacer: React.FC<SpacerProps> = ({ children }) => {
  return <StyledSpacer>{children}</StyledSpacer>
}

export default Spacer

Spacer.displayName = 'Spacer'
