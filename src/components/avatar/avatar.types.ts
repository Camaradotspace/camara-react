import { ImgHTMLAttributes } from 'react';

const sizes = {
  large: 80,
  medium: 64,
  small: 40,
  tiny: 24,
};

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /* How large should the avatar be? */
  size?: keyof typeof sizes | number;

  /* Fallback color incase image fails to load */
  backgroundColor?: string;

  /* sets the color of the initials */
  color?: string;

  /* Should avatar look like Instagram stories? */
  stories?: boolean;

  /* Link to image source */
  imageUrl?: string;

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
