import * as React from 'react';
import styled from 'styled-components';
import {
  border,
  compose,
  flexbox,
  position,
  space,
  BorderProps,
  FlexboxProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface ImageProps
  extends SpaceProps,
    FlexboxProps,
    BorderProps,
    PositionProps {
  /* Image source */
  src: string;
  /* Image description */
  alt: string;
  /* Image width */
  width: string | number;
  /* Image height */
  height: string | number;
  /* Control if loading the image should be deferred when its off the screen */
  loading?: 'eager' | 'lazy';
  /* Set the object-fit property of the image */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const StyledImageComponent = styled.img<ImageProps>`
  ${compose(space, flexbox, border, position)}
  display: block;
  object-fit: ${props => props.fit};
`;

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  loading,
  fit,
  width,
  height,
  ...rest
}) => {
  return (
    <StyledImageComponent
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fit={fit}
      {...rest}
    />
  );
};

Image.defaultProps = {
  src: 'https://source.unsplash.com/8TQUF6UbpAk/1600x900',
  width: '100%',
  alt:
    'woman in black and white crew neck long sleeve shirt wearing purple knit cap',
  fit: 'cover',
  loading: 'lazy',
};

Image.displayName = 'Image';
