import * as React from 'react'
import styled from 'styled-components'
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space
} from 'styled-system'
import ImageProps from './image.types'

const StyledImageComponent = styled.img<ImageProps>`
  ${compose(space, layout, flexbox, border, position)}
  display: block;
  object-fit: ${(props) => props.fit};
`

const Image: React.FC<ImageProps> = ({ src, alt, loading, fit, ...rest }) => {
  return (
    <StyledImageComponent
      src={src}
      alt={alt}
      loading={loading}
      fit={fit}
      {...rest}
    />
  )
}

export default Image

Image.defaultProps = {
  src: 'https://source.unsplash.com/8TQUF6UbpAk/1600x900',
  width: '100%',
  alt: 'woman in black and white crew neck long sleeve shirt wearing purple knit cap',
  fit: 'cover',
  loading: 'lazy'
}

Image.displayName = 'Image'
