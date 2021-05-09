export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  /* Text variant */
  variant?: 'strong' | 'sub-heading' | 'body' | 'caption' | 'overline';

  /* Text color */
  color?: string;

  /* Text content */
  children: React.ReactNode;

  /* Set font-weight of text */
  weight?: 'bold' | 'normal';

  /* Should text be italic */
  italic?: boolean;

  /* Should text be inline */
  inline?: boolean;

  /* Set text alignment */
  align?: 'left' | 'right' | 'center' | 'justify';

  /* Should text be underlined */
  underline?: boolean;

  /* Set size of text */
  size?: 'small' | 'medium' | 'large'; // sm: 12px, md: 14px, lg: 16px

  /* Should text be strike-through? */
  strike?: boolean;

  /* CSS Style properties */
  style?: React.CSSProperties;
}
