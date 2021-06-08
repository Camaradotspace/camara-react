import React, { HTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /* What styled should the line be of? */
  type?: 'dashed' | 'dotted' | 'normal'
}

const StyledDivider: any = styled('hr', {
  display: 'block',
  border: '1px solid $ui_border',
  variants: {
    type: {
      dashed: { borderStyle: 'dashed' },
      dotted: { borderStyle: 'dotted' },
      normal: { borderStyle: 'solid' }
    }
  }
})

export const Divider: React.FC<DividerProps> = ({ type, ...props }) => {
  return <StyledDivider type={type} {...props} />
}

Divider.defaultProps = {
  type: 'normal'
}

Divider.displayName = 'Divider'
