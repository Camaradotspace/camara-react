export interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
  /* Size of the badge */
  size?: 'large' | 'medium' | 'small';

  /* Background color of badge */
  backgroundColor?: string;

  /* Color of badge text */
  color?: string;

  /* Shape of badge */
  shape?: 'pill' | 'circle' | 'square';

  /* Position of badge relative to parent element */
  position?: 'middle' | 'top';
}
interface BaseProps {
  /* Text of badge */
  text: React.ReactNode;
}

export type BadgeProps = StyleProps & BaseProps;
