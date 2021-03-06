import React, { AnchorHTMLAttributes } from 'react';
import { ExternalLink } from 'react-feather';
import { styled } from '../../stitches.config';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /* link content */
  children: React.ReactNode;
  /* Link URL */
  href: string;
  /* Open link in new tab? */
  external?: boolean;
  /* What variant of link should be rendered? */
  variant?: 'primary' | 'secondary';
  /* Should links be underlined */
  underline?: boolean;
}

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

export const Anchor: React.FC<AnchorProps> = ({
  href,
  children,
  external,
  variant,
  underline,
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
        }}
      >
        {children}
      </StyledAnchor>
    );
  }
};

Anchor.defaultProps = { variant: 'primary' };

Anchor.displayName = 'Anchor';
