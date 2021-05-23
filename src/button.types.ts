import { StyledComponentProps } from 'styled-components'
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'

type StyledButtonProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    disabled?: boolean
    danger?: boolean
    pill?: boolean
    block?: boolean
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'small' | 'medium' | 'large'
  }

type ButtonProps = StyledComponentProps<'button', any, StyledButtonProps, never>

export default ButtonProps
