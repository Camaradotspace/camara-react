import * as React from 'react';
import styled from 'styled-components';

interface StyleProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /* Image source */
  imageUrl: string;

  /* Image description */
  imageAlt: string;

  /* Control if loading the image should be deferred when its off the screen */
  loading?: 'eager' | 'lazy';

  /* Set the object-fit property of the image */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export type ImageProps = StyleProps;

const StyledImage = styled.img<Partial<ImageProps>>`
  display: block;
  object-fit: ${(props) => props.fit};
`;

export const Image: React.FC<ImageProps> = ({
  imageUrl,
  imageAlt,
  loading,
  fit,
  ...rest
}) => {
  return (
    <StyledImage
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
