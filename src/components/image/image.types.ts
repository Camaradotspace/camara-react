export interface ImageStyleProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  /* Image source */
  imageUrl: string;

  /* Image description */
  imageAlt: string;

  /* Control if loading the image should be deferred when its off the screen */
  loading?: 'eager' | 'lazy';

  /* Set the object-fit property of the image */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}
