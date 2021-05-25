import * as React from 'react'
import styled from 'styled-components'
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space
} from 'styled-system'
import FlexProps from './flex.types'

const StyledFlex = styled.div<FlexProps>`
  ${compose(border, flexbox, layout, position, space)}
  display: flex;
`

const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return <StyledFlex {...props}>{children}</StyledFlex>
}

export default Flex

Flex.displayName = 'Flex'
