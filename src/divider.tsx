import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { compose, margin } from 'styled-system'
import DividerProps from './divider.types'

const StyledDivider = styled.hr<DividerProps>`
  ${compose(margin)}
  display: block;
  min-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.ui.border};

  ${(props) =>
    props.type === 'dashed' &&
    css`
      border: 1px dashed ${({ theme }) => theme.colors.ui.border};
    `};
  ${(props) =>
    props.type === 'dotted' &&
    css`
      border: 1px dotted ${({ theme }) => theme.colors.ui.border};
    `};
  ${(props) =>
    props.type === 'normal' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.ui.border};
    `};
`

const Divider: FunctionComponent<DividerProps> = ({ type, ...props }) => {
  return <StyledDivider type={type} {...props} />
}

export default Divider

Divider.defaultProps = {
  type: 'normal'
}

Divider.displayName = 'Divider'
