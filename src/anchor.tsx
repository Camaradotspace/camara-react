import styled from 'styled-components'
import React, { FunctionComponent } from 'react'
import AnchorProps from './anchor.types'
import Button from './button'
import { color, compose, space } from 'styled-system'

const StyledAnchor = styled.a<AnchorProps>`
  ${compose(color, space)}
  text-decoration: none;
  color: ${({ theme }) => theme.colors.button.background};
  cursor: pointer;
  /* visited Anchor */
  &:visited {
    color: 'purple';
  }
  /* mouse over Anchor */
  &:hover {
    color: ${({ theme }) => theme.colors.button.hover};
  }
  /* selected Anchor */
  &:active {
    color: ${({ theme }) => theme.colors.button.focus};
  }
`

const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  asBtn,
  external
}) => {
  if (external) {
    return (
      <StyledAnchor
        asBtn={asBtn}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </StyledAnchor>
    )
  } else if (asBtn) {
    return (
      <StyledAnchor asBtn={asBtn} href={href}>
        <Button>{children}</Button>
      </StyledAnchor>
    )
  } else {
    return (
      <StyledAnchor asBtn={asBtn} href={href}>
        {children}
      </StyledAnchor>
    )
  }
}

export default Anchor

Anchor.defaultProps = {
  asBtn: false,
  external: false
}

Anchor.displayName = 'Anchor'
