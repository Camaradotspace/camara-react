import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { tokens } from '../../constants';

const { $primary } = tokens.colors;

export interface AnchorProps {
  /* link content */
  children: React.ReactNode;

  /* Link URL */
  href: string;

  /* Use Anchor as a Button? */
  asButton?: boolean;

  /* Open link in new tab? */
  asNew?: boolean;
}

const StyledAnchor = styled.a<AnchorProps>`
  text-decoration: none;
  color: ${$primary};
  cursor: pointer;
  /* visited Anchor */
  &:visited {
    color: 'purple';
  }
  /* mouse over Anchor */
  &:hover {
    color: #4285f4;
  }
  /* selected Anchor */
  &:active {
    color: #4285f4;
  }
  ${(props) =>
    props.asButton &&
    css`
      background-color: ${$primary};
      color: #fff;
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      /* mouse over Anchor */
      &:hover {
        background-color: #4285f4;
        color: #fff;
      }
      /* selected Anchor */
      &:active {
        background-color: #4285f4;
        color: #fff;
      }
    `}
`;

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
