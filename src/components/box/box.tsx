import React, { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';
import { SpacingProps } from '../../system';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /* Should children of the box be centered? */
  center?: boolean;
  /* Highlight the box on the screen, useful for debug purposes */
  debug?: boolean;
  /* Content of the box */
  children?: React.ReactNode;
  /* Width of the box */
  width?: string | number;
  /* Height of the box */
  height?: string | number;
  /* Additional CSS properties */
  css?: React.CSSProperties;
  /* Background color of the box */
  bg?: string;
  /* Border of the box */
  border?: boolean;

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
}

const StyledBox: any = styled('div', {
  variants: {
    center: {
      true: {
        margin: '0 auto',
      },
    },
    debug: {
      true: {
        border: '1px solid red',
      },
    },
  },
});

export const Box: React.FC<BoxProps & SpacingProps> = ({
  children,
  center,
  debug,
  role,
  width,
  height,
  bg,
  css,
  ...rest
}) => {
  return (
    <StyledBox
      role={role}
      center={center}
      debug={debug}
      css={{
        width: width,
        height: height,
        backgroundColor: bg,
        ...rest,
        ...css,
      }}
    >
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {};

Box.displayName = 'Box';
