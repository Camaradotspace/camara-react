import styled, { css } from 'styled-components';
import React, { FunctionComponent, ImgHTMLAttributes } from 'react';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * How large should the avatar be?
   */
  size?: keyof typeof sizes;
  /**
   * Fallback color incase image fails to load
   */
  backgroundColor: string;

  stories?: boolean;
  /**
   * Link to image source
   */
  imageUrl: string;
}

const Image = styled.img<Partial<AvatarProps>>`
  width: ${sizes.medium}px;
  height: ${sizes.medium}px;
  line-height: ${sizes.medium}px;
  object-fit: cover;
  border-radius: 100%;
  background-color: ${(props) => props.backgroundColor};
  ${(props) =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;
    `}
  ${(props) =>
    props.stories === true &&
    css`
      border: 5px solid #fff;
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: 0 0 0 2px orange;
    `}
`;

export const Avatar: FunctionComponent<AvatarProps> = ({
  size,
  imageUrl,
  backgroundColor,
  stories,
  ...rest
}) => {
  return (
    <Image
      stories={stories}
      size={size}
      src={imageUrl}
      backgroundColor={backgroundColor}
      {...rest}
    />
  );
};

Avatar.defaultProps = {};

Avatar.displayName = 'AvatarComponent';
