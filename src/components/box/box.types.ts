export interface BoxProps {
  /* What width should the box be? */
  width?: number;

  /* Should children of the box be centered? */
  center?: boolean;

  /* Highlight the box on the screen, useful for debug purposes */
  debug?: boolean;

  /* Content of the box */
  children: React.ReactNode;

  /* Set box height */
  height?: number;

  /* Set background color */
  color?: string;

  /* Set box overflow */
  overflow?: 'visible' | 'hidden' | 'scroll' | 'scrollX' | 'scrollY' | 'auto';

  /* Set box border */
  border?: boolean;

  /* Set box position */
  position?: 'static' | 'absolute' | 'relative' | 'fixed';

  /* Set box min-width */
  minWidth?: number;

  /* Set box min-height */
  minHeight?: number;

  /* Set box max-width */
  maxWidth?: number;

  /* Set box max-height */
  maxHeight?: number;

  /* Set box ARIA role */
  role?:
    | 'article'
    | 'aside'
    | 'details'
    | 'div'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
    | 'section'
    | 'summary';

  /* Padding top */
  pt?: number;

  /* Padding bottom */
  pb?: number;

  /* Padding left */
  pl?: number;

  /* Padding right */
  pr?: number;

  /* Padding horizontal axis */
  px?: number;

  /* Padding vertical axis */
  py?: number;

  /* Padding all axis */
  pd?: number;

  /* Margin top */
  mt?: number;

  /* Margin bottom */
  mb?: number;

  /* Margin left */
  ml?: number;

  /* Margin right */
  mr?: number;

  /* Margin horizontal axis */
  mx?: number;

  /* Margin vertical axis */
  my?: number;

  /* Margin all axis */
  mg?: number;
}
