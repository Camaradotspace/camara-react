import * as React from 'react';
import { StyledImageComponent } from './image.styles';
import { ImageStyleProps } from './image.types';

export const Image: React.FC<ImageStyleProps> = ({
  imageUrl,
  imageAlt,
  loading,
  fit,
  ...rest
}) => {
  return (
    <StyledImageComponent
      src={imageUrl}
      alt={imageAlt}
      loading={loading}
      fit={fit}
      {...rest}
    />
  );
};

Image.defaultProps = {
  imageUrl: 'https://source.unsplash.com/8TQUF6UbpAk/1600x900',
  imageAlt:
    'woman in black and white crew neck long sleeve shirt wearing purple knit cap',
  fit: 'cover',
  loading: 'lazy',
};

Image.displayName = 'Image';
