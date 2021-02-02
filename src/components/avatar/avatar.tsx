import styled, { css } from 'styled-components';
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

  stories?: boolean;
}

interface AvatarProps {
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
  ${(props) =>
    props.stories === true &&
    css`
      border: 5px solid #fff;
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: 0 0 0 2px orange;
    `}
`;

const Avatar: React.FC<AvatarProps & StyleProps> = ({
  size,
  imageUrl,
  backgroundColor,
  stories,
}) => {
  return (
    <StyledAvatar
      stories={stories}
      size={size}
      src={imageUrl}
      backgroundColor={backgroundColor}
    />
  );
};

Avatar.defaultProps = {
  size: 48,
  backgroundColor: 'pink',
  imageUrl: 'https://source.unsplash.com/200x200/?portrait',
  stories: false,
};

export default Avatar;
