import React, { AnchorHTMLAttributes } from 'react';
import { ExternalLink } from 'react-feather';
import { SpacingProps } from 'system';
import { styled } from '../../stitches.config';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /* link content */
  children: React.ReactNode | React.ReactNode[];
  /* Link URL */
  href: string;
  /* Open link in new tab? */
  external?: boolean;
  /* What variant of link should be rendered? */
  variant?: 'primary' | 'secondary';
  /* Should links be underlined */
  underline?: boolean;
}

// NOTE: `!important` is used as a temporary workaround for conflicting links styling on the documentation site. They will be removed in a future update

const StyledAnchor = styled('a', {
  color: '$link_text !important',
  cursor: 'pointer',
  textDecoration: 'underline !important',
  '& > *': {
    color: '$link_text !important',
    '&:visited': {
      color: '$link_text !important',
    },
    '&:hover': {
      color: '$link_hover !important',
      textDecoration: 'none !important',
    },
    '&:active': {
      color: '$link_hover !important',
    },
  },
  '&:visited': {
    color: '$link_text !important',
  },
  '&:hover': {
    color: '$link_hover !important',
    textDecoration: 'none !important',
  },
  '&:active': {
    color: '$link_hover !important',
  },
  '& svg': {
    marginLeft: '$1',
  },
  variants: {
    variant: {
      primary: {},
      secondary: {
        color: '$link_secondary !important',
        textDecoration: 'none !important',
        '&:hover': {
          color: '$link_hover !important',
          textDecoration: 'underline !important',
        },
        '&:active': {
          color: '$link_hover !important',
        },
      },
    },
  },
  defaultVariants: { variant: 'primary' },
});

export const Anchor: React.FC<AnchorProps & SpacingProps> = ({
  href,
  children,
  external,
  variant,
  underline,
  color,
  m,
  mb,
  ml,
  mt,
  mr,
  mx,
  my,
  p,
  pb,
  pl,
  pt,
  pr,
  px,
  py,
}) => {
  if (external) {
    return (
      <StyledAnchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        css={{
          textDecoration: underline === false ? 'none !important' : 'underline',
          color: color,
          m,
          mb,
          ml,
          mt,
          mr,
          mx,
          my,
          p,
          pb,
          pl,
          pt,
          pr,
          px,
          py,
        }}
      >
        {children}
        <ExternalLink size={14} color="#bbb" />
      </StyledAnchor>
    );
  } else {
    return (
      <StyledAnchor
        href={href}
        variant={variant}
        css={{
          textDecoration: underline === false ? 'none !important' : 'underline',
          color: color,
          m,
          mb,
          ml,
          mt,
          mr,
          mx,
          my,
          p,
          pb,
          pl,
          pt,
          pr,
          px,
          py,
        }}
      >
        {children}
      </StyledAnchor>
    );
  }
};

Anchor.defaultProps = { variant: 'primary' };

Anchor.displayName = 'Anchor';
