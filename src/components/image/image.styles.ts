import styled from 'styled-components';
import { ImageStyleProps } from './image.types';

export const StyledImageComponent = styled.img<Partial<ImageStyleProps>>`
  display: block;
  object-fit: ${(props) => props.fit};
`;
