import { StyledComponentProps } from 'styled-components'
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'

type ImageStyleProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    /* Image source */
    src: string

    /* Image description */
    alt: string

    /* Control if loading the image should be deferred when its off the screen */
    loading?: 'eager' | 'lazy'

    /* Set the object-fit property of the image */
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  }

type ImageProps = StyledComponentProps<'img', any, ImageStyleProps, never>

export default ImageProps
