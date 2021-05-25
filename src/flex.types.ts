import React from 'react'
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'

type FlexProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  PositionProps & {
    children: React.ReactNode
  }

export default FlexProps
