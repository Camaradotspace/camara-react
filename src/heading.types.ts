import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'

type HeadingProps = ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    /* Children */
    children: React.ReactNode
    /* What level should heading be? h1, h2, h3, h4, etc */
    level?: number
  }

export default HeadingProps
