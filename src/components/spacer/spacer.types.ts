export interface SpacerProps {
  /* Should spacer be at the top? */
  bottom?: boolean;

  /* Should spacer be at the bottom? */
  top?: boolean;

  /* Should spacer be at the vertical axis? */
  both?: boolean;

  /* Content of the spacer */
  children: React.ReactNode;
}
