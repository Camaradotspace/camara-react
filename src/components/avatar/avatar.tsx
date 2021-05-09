import React, { FunctionComponent } from 'react';
import { StyledImage, StyledInitials } from './avatar.styles';
import { AvatarProps } from './avatar.types';

export const Avatar: FunctionComponent<AvatarProps> = ({
  size,
  initialsSize,
  imageUrl,
  imageAlt,
  fit,
  icon,
  shape,
  backgroundColor,
  color,
  stories,
  username,
  ...rest
}) => {
  let avatarChildren = <p>Loading</p>;

  if (icon) {
    avatarChildren = <>{icon}</>;
  } else if (imageUrl) {
    avatarChildren = <img src={imageUrl} alt={imageAlt} />;
  } else {
    avatarChildren = (
      <StyledInitials
        backgroundColor={backgroundColor}
        color={color}
        initialsSize={initialsSize}
        aria-hidden='true'
        className='initials'
      >
        {username && username !== undefined ? username.substring(0, 1) : null}
      </StyledInitials>
    );
  }

  return (
    <StyledImage
      stories={stories}
      size={size}
      fit={fit}
      shape={shape}
      icon={icon}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {avatarChildren}
    </StyledImage>
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
