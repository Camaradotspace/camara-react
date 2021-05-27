import styled, { StyledComponentProps } from 'styled-components';
import React, { FunctionComponent } from 'react';
import { color, ColorProps, compose, space, SpaceProps } from 'styled-system';

type StyledAnchorProps = ColorProps & SpaceProps;

type AnchorCompProps = StyledComponentProps<
  'button',
  any,
  StyledAnchorProps,
  never
>;

export interface AnchorProps extends AnchorCompProps {
  /* link content */
  children: React.ReactNode;
  /* Link URL */
  href: string;
  /* Use Anchor as a Button? */
  // asBtn?: boolean
  /* Open link in new tab? */
  external?: boolean;
}

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
`;

export const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  external,
}) => {
  if (external) {
    return (
      <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledAnchor>
    );
  } else {
    return <StyledAnchor href={href}>{children}</StyledAnchor>;
  }
};

Anchor.defaultProps = {
  external: false,
};

Anchor.displayName = 'Anchor';
