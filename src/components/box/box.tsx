import React, { HTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /* Should children of the box be centered? */
  center?: boolean
  /* Highlight the box on the screen, useful for debug purposes */
  debug?: boolean
  /* Content of the box */
  children: React.ReactNode
  /* Set box ARIA role */
  role?:
    | 'article'
    | 'aside'
    | 'details'
    | 'div'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
    | 'section'
    | 'summary'
}

const StyledBox: any = styled('div', {
  boxSizing: 'border-box',
  minWidth: 0,
  display: 'block',
  variants: {
    center: {
      true: {
        margin: '0 auto'
      }
    },
    debug: {
      true: {
        border: '1px solid red'
      }
    }
  }
})

export const Box: React.FC<BoxProps> = ({
  children,
  center,
  debug,
  role,
  ...rest
}) => {
  return (
    <StyledBox role={role} center={center} debug={debug} {...rest}>
      {children}
    </StyledBox>
  )
}

Box.defaultProps = {}

Box.displayName = 'Box'
