/* eslint-disable no-use-before-define */
import styled from 'styled-components';
import * as React from 'react';

export interface AvatarProps {
  /**
   * How large should the avatar be?
   */
  size?: number;
  /**
   * Link to image source
   */
  imageUrl?: string;
  /**
   * Fallback color incase image fails to load
   */
  backgroundColor: string;
}

const StyledAvatar = styled.img<AvatarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  object-fit: cover;
  border-radius: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

StyledAvatar.defaultProps = {
  size: 48,
  backgroundColor: 'red',
  imageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRt2rEUKW9t2e_-cryB2frSlxYkXk4L6Om7w&usqp=CAU',
};

export const Avatar = ({ size, imageUrl, backgroundColor }: AvatarProps) => {
  return (
    <StyledAvatar
      size={size}
      src={imageUrl}
      backgroundColor={backgroundColor}
    />
  );
};
