/* eslint-disable no-use-before-define */
import styled from 'styled-components';
import * as React from 'react';

interface StyleProps {
  /**
   * How large should the avatar be?
   */
  size?: number;
  /**
   * Fallback color incase image fails to load
   */
  backgroundColor: string;
}

export interface AvatarProps {
  /**
   * Link to image source
   */
  imageUrl: string;
}

const StyledAvatar = styled.img<StyleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  object-fit: cover;
  border-radius: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

export const Avatar: React.FC<AvatarProps & StyleProps> = ({
  size,
  imageUrl,
  backgroundColor,
}) => {
  return (
    <StyledAvatar
      size={size}
      src={imageUrl}
      backgroundColor={backgroundColor}
    />
  );
};

Avatar.defaultProps = {
  size: 48,
  backgroundColor: 'pink',
  imageUrl: 'https://picsum.photos/200?a',
};
