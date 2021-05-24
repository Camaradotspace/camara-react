import {
  BorderProps,
  FlexProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'

type StyledBoxProps = LayoutProps &
  FlexProps &
  BorderProps &
  SpaceProps &
  PositionProps & {
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

type BoxProps = StyledBoxProps

export default BoxProps
