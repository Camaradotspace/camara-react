import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { tokens } from '../../constants';

const { $2 } = tokens.space;

export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  /* Text variant */
  variant?: 'strong' | 'sub-heading' | 'body' | 'caption' | 'overline';

  /* Text color */
  color?: string;

  /* Text content */
  children: React.ReactNode;

  /* Set font-weight of text */
  weight?: 'bold' | 'normal';

  /* Should text be italic */
  italic?: boolean;

  /* Should text be inline */
  inline?: boolean;

  /* Set text alignment */
  align?: 'left' | 'right' | 'center' | 'justify';

  /* Should text be underlined */
  underline?: boolean;

  /* Set size of text */
  size?: 'small' | 'medium' | 'large'; // sm: 12px, md: 14px, lg: 16px

  /* Should text be strike-through? */
  strike?: boolean;

  /* CSS Style properties */
  style?: React.CSSProperties;
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}

  ${(props) =>
    props.inline &&
    css`
      display: inline;
    `}

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

    ${(props) =>
    props.strike &&
    css`
      text-decoration: line-through;
    `}

  ${(props) =>
    props.variant === 'strong' &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.variant === 'sub-heading' &&
    css`
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.variant === 'body' &&
    css`
      font-size: 1rem;
      margin: ${$2} 0;
    `}

  ${(props) =>
    props.variant === 'caption' &&
    css`
      font-size: 0.75rem;
    `}

  ${(props) =>
    props.variant === 'overline' &&
    css`
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 1.5px;
    `}

    ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 16px;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 14px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 12px;
    `}
`;

export const Text: FunctionComponent<TextProps> = ({
  variant,
  color,
  children,
  weight,
  italic,
  inline,
  align,
  underline,
  size,
  strike,
  style,
}) => {
  return (
    <StyledText
      style={style}
      color={color}
      variant={variant}
      weight={weight}
      italic={italic}
      inline={inline}
      size={size}
      strike={strike}
      align={align}
      underline={underline}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  variant: 'body',
  size: 'large',
  weight: 'normal',
  italic: false,
  inline: false,
  strike: false,
  align: 'left',
  underline: false,
};

Text.displayName = 'Text';
