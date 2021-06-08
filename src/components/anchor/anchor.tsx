import React, { AnchorHTMLAttributes } from 'react'
import { styled } from '../../stitches.config'
import { Button } from '../button'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /* link content */
  children: React.ReactNode
  /* Link URL */
  href: string
  /* Use Anchor as a Button? */
  asBtn?: boolean
  /* Open link in new tab? */
  external?: boolean
}

const StyledAnchor = styled('a', {
  textDecoration: 'none',
  color: '$button_background',
  cursor: 'pointer',
  '&:visited': {
    color: 'purple'
  },
  '&:hover': {
    color: '$button_hover'
  },
  '&:active': {
    color: '$button_focus'
  }
})

const LinkButton = styled(Button, {})

export const Anchor: React.FC<AnchorProps> = ({
  href,
  children,
  external,
  asBtn
}) => {
  if (external) {
    return (
      <StyledAnchor href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </StyledAnchor>
    )
  } else if (asBtn) {
    return (
      <StyledAnchor href={href}>
        <LinkButton>{children}</LinkButton>
      </StyledAnchor>
    )
  } else {
    return <StyledAnchor href={href}>{children}</StyledAnchor>
  }
}

Anchor.defaultProps = {
  external: false
}

Anchor.displayName = 'Anchor'
