export interface TitleProps {
  /* Text color */
  color?: string;

  /* Children */
  children: React.ReactNode;

  /* What heading level should title be? h1, h2, h3, h4, etc */
  level?: number;

  /* Control thickness of title */
  thin?: boolean;

  /* Set the alignment of the title text */
  align?: 'left' | 'right' | 'center' | 'justify';
}
