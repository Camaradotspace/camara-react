import React, { ImgHTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /* Image source */
  src: string;
  /* Image description */
  alt: string;
  /* Image width */
  width?: string | number;
  /* Image height */
  height?: string | number;
  /* Control if loading the image should be deferred when its off the screen */
  loading?: 'eager' | 'lazy';
  /* Set the object-fit property of the image */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const StyledImageComponent = styled('img', {
  display: 'block',
});

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  loading,
  fit,
  width = '100%',
  height = 'auto',
  ...rest
}) => {
  return (
    <StyledImageComponent
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      {...rest}
      css={{ objectFit: fit }}
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
