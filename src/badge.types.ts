import React from 'react'
import { ColorProps, PositionProps } from 'styled-system'

export type StyledBadgeProps = ColorProps &
  PositionProps & {
    /* Size of the badge */
    size?: 'large' | 'medium' | 'small'
    /* Shape of badge */
    shape?: 'pill' | 'circle' | 'square'
  }

type BadgeProps = StyledBadgeProps & {
  text: string | React.ReactNode
}

export default BadgeProps
