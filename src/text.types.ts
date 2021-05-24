import { StyledComponentProps } from 'styled-components'
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'

type StyledTextProps = {
  variant?: 'hint' | 'label' | 'body' | 'caption' | 'overline'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  /* Should text be inline */
  inline?: boolean

  /* Should text be underlined */
  underline?: boolean

  /* Should text be strike-through? */
  strike?: boolean
} & TypographyProps &
  ColorProps &
  SpaceProps &
  LayoutProps

type TextProps = StyledComponentProps<'p', any, StyledTextProps, never>

export default TextProps
