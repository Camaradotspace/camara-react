import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import {
  PositionProps,
  SpaceProps,
  compose,
  position,
  space,
} from 'styled-system';

const sizes = {
  large: 80,
  medium: 64,
  small: 40,
  tiny: 24,
};

export interface AvatarProps extends PositionProps, SpaceProps {
  /* How large should the avatar be? */
  size?: keyof typeof sizes | number;

  /* Fallback color incase image fails to load */
  bg?: string;

  /* sets the color of the initials */
  color?: string;

  /* Should avatar look like Instagram stories? */
  stories?: boolean;

  /* Link to image source */
  imageUrl: string;

  /* Alternative text describing the image */
  imageAlt: string;

  /* Username for setting avatar initials */
  username?: string;

  /* Set font size of initials */
  initialsSize?: number;

  /* Custom icon type */
  icon?: React.ReactNode;

  /* Shape of the avatar */
  shape?: 'circle' | 'square';

  /* Set the object-fit property of the avatar */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const StyledAvatar = styled('div').withConfig<Partial<AvatarProps>>({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['shape', 'size'].includes(prop) && defaultValidatorFn(prop),
})`
  ${compose(position, space)}
  background-color: ${props => props.bg || 'transparent'};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-transform: uppercase;

  height: ${props => props.size}px;
  width: ${props => props.size}px;
  line-height: ${props => props.size}px;

  ${props =>
    props.shape === 'square' &&
    css`
      border-radius: 0;
    `}

  ${props =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;

      .initials {
        font-size: ${({ theme }) => theme.fontSizes[4]};
      }
    `}

  ${props =>
    props.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;

      .initials {
        font-size: ${({ theme }) => theme.fontSizes[5]};
      }
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      height: ${sizes.medium}px;
      width: ${sizes.medium}px;
      line-height: ${sizes.medium}px;

      .initials {
        font-size: ${({ theme }) => theme.fontSizes[6]};
      }
    `}

  ${props =>
    props.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;

      .initials {
        font-size: ${({ theme }) => theme.fontSizes[7]};
      }
    `}
  ${props =>
    props.stories === true &&
    css`
      border: 5px solid #fff;
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: 0 0 0 2px orange;
    `}

    ${props =>
      !props.imageUrl &&
      css`
        background-color: ${({ theme }) =>
          theme.colors.ui.secondary || props.bg};
      `}

    ${props =>
      props.icon &&
      css`
        text-align: center;
        vertical-align: middle;
        padding: 8px;
      `}

    img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: ${props => props.fit};
  }
`;

// Avatar with initials
const StyledInitials = styled.div<Partial<AvatarProps>>`
  ${props =>
    props.bg &&
    css`
      background-color: ${({ theme }) => theme.colors.bg.secondary || props.bg};
    `}
  ${props =>
    props.color &&
    css`
      color: ${({ theme }) => theme.colors.text.primary || props.color};
    `}
  text-align: center;
  font-size: ${props => props.initialsSize}px;
  font-weight: 500;
`;

export const Avatar: FunctionComponent<AvatarProps> = ({
  size,
  initialsSize,
  imageUrl,
  imageAlt,
  fit,
  icon,
  shape,
  bg,
  color,
  stories,
  username,
  ...rest
}) => {
  let avatarChildren = <p>Loading</p>;

  if (icon) {
    avatarChildren = <div>{icon}</div>;
  } else if (imageUrl) {
    avatarChildren = <img src={imageUrl} alt={imageAlt} />;
  } else {
    avatarChildren = (
      <StyledInitials
        bg={bg}
        color={color}
        initialsSize={initialsSize}
        aria-hidden="true"
        className="initials"
      >
        {username && username !== undefined ? username.substring(0, 1) : null}
      </StyledInitials>
    );
  }

  return (
    <StyledAvatar
      stories={stories}
      size={size}
      fit={fit}
      shape={shape}
      icon={icon}
      bg={bg}
      {...rest}
    >
      {avatarChildren}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  size: 40,
  fit: 'cover',
  stories: false,
  shape: 'circle',
  icon: null,
  initialsSize: 16,
};

Avatar.displayName = 'Avatar';
