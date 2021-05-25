import * as React from 'react'
import styled, { css } from 'styled-components'
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space
} from 'styled-system'
import BoxProps from './box.types'

export const StyledBox = styled.div<BoxProps>`
  ${compose(border, flexbox, layout, position, space)}
  box-sizing: border-box;
  min-width: 0;
  display: block;
  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}
  ${(props) =>
    props.debug &&
    css`
      border: 2px solid red;
    `}
`

const Box: React.FC<BoxProps> = ({ children, center, debug, role }) => {
  return (
    <StyledBox role={role} center={center} debug={debug}>
      {children}
    </StyledBox>
  )
}

export default Box

Box.defaultProps = {
  center: false,
  debug: false
}

Box.displayName = 'Box'
