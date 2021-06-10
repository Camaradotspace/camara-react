import React from 'react';
import { styled } from '../../stitches.config';

const sizes = {
  large: 80,
  medium: 64,
  small: 40,
  tiny: 24,
};

export interface AvatarProps {
  /* How large should the avatar be? */
  size?: keyof typeof sizes;

  /* Fallback color incase image fails to load */
  bg?: string;

  /* sets the color of the initials */
  color?: string;

  /* Should avatar look like Instagram stories? */
  stories?: boolean;

  /* Link to image source */
  imageSrc?: string;

  /* Alternative text describing the image */
  imageAlt?: string;

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

const StyledAvatar: any = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  textTransform: 'uppercase',
  height: '40px',
  width: '40px',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  // avatar variants
  variants: {
    // size props
    size: {
      tiny: {
        height: `${sizes.tiny}px`,
        width: `${sizes.tiny}px`,
        '& p.initials': {
          fontSize: `${sizes.tiny}px`,
        },
      },
      small: {
        height: `${sizes.small}px`,
        width: `${sizes.small}px`,
        '& p.initials': {
          fontSize: `${sizes.small}px`,
        },
      },
      medium: {
        height: `${sizes.medium}px`,
        width: `${sizes.medium}px`,
        '& p.initials': {
          fontSize: `${sizes.medium}px`,
        },
      },
      large: {
        height: `${sizes.large}px`,
        width: `${sizes.large}px`,
        '& p.initials': {
          fontSize: `${sizes.large}px`,
        },
      },
    },
    shape: {
      square: {
        borderRadius: '0',
      },
      circle: {
        borderRadius: '$round',
      },
    },
    stories: {
      true: {
        border: '5px solid $bg_primary',
        boxShadow: '0 0 0 2px orange',
      },
    },
  },
});

const StyledInitials = styled('p', {
  textAlign: 'center',
  fontWeight: '500',
});

const StyledIcon = styled('div', {
  textAlign: 'center',
  verticalAlign: 'middle',
  p: '$2',
});

// const StyledImage = styled('img', {})

export const Avatar: React.FC<AvatarProps> = ({
  size,
  initialsSize,
  imageSrc,
  imageAlt,
  fit,
  icon,
  shape,
  bg,
  color,
  stories,
  username,
}) => {
  let avatarChildren = <p>Loading</p>;

  if (icon) {
    avatarChildren = <StyledIcon>{icon}</StyledIcon>;
  } else if (imageSrc) {
    avatarChildren = <img src={imageSrc} alt={imageAlt} />;
  } else {
    avatarChildren = (
      <StyledInitials
        aria-hidden="true"
        className="initials"
        css={{
          color: '$text_primary' || color,
          fontSize: `${initialsSize}px`,
          lineHeight: `${initialsSize}px`,
        }}
      >
        {username && username !== undefined ? username.substring(0, 1) : null}
      </StyledInitials>
    );
  }

  return (
    <StyledAvatar
      icon={icon}
      size={size}
      shape={shape}
      stories={stories}
      css={{ backgroundColor: '$bg_secondary' || bg, objectFit: fit }}
    >
      {avatarChildren}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  size: 'small',
  fit: 'cover',
  stories: false,
  shape: 'circle',
  icon: null,
  initialsSize: 16,
};

Avatar.displayName = 'Avatar';
