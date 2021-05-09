import React, { FunctionComponent } from 'react';
import { StyledAnchor } from './anchor.styles';
import { AnchorProps } from './anchor.types';

export const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  asButton,
  asNew,
}) => {
  return (
    <>
      {asNew ? (
        <StyledAnchor
          asButton={asButton}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </StyledAnchor>
      ) : (
        <StyledAnchor asButton={asButton} href={href}>
          {children}
        </StyledAnchor>
      )}
    </>
  );
};

Anchor.defaultProps = {
  asButton: false,
  asNew: false,
};

Anchor.displayName = 'Anchor';
