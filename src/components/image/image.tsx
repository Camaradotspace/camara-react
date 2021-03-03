import * as React from 'react';
import styled from 'styled-components';

export interface ImageProps {
  width?: number;
  imageURL?: string;
}

const StyledImage = styled.img<Partial<ImageProps>>`
  width: ${(props) => props.width}%;
  display: block;
  object-fit: cover;
`;

export const Image: React.FC<ImageProps> = ({ width = 100, imageURL }) => {
  return <StyledImage src={imageURL} width={width} />;
};

Image.defaultProps = {};

Image.displayName = 'ImageComponent';
