import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { color, compose, position } from 'styled-system'
import BadgeProps, { StyledBadgeProps } from './badge.types'

const StyledBadge = styled.div<StyledBadgeProps>`
  ${compose(color, position)}
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[1]};
      padding: 0.15rem 0.5rem;
    `};

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[2]};
      padding: 0.15rem 0.4rem;
    `};

  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[0]};
      padding: 0.15rem 0.3rem;
    `};

  ${(props) =>
    props.shape === 'pill' &&
    css`
      border-radius: ${({ theme }) => theme.radii[2]};
    `}

  ${(props) =>
    props.shape === 'circle' &&
    props.size === 'small' &&
    css`
      width: 10px;
      height: 10px;
      border-radius: 50%;
      padding: 0.5rem;
    `}

    ${(props) =>
    props.shape === 'circle' &&
    props.size === 'medium' &&
    css`
      width: 15px;
      height: 15px;
      border-radius: 50%;
      padding: 0.5rem;
    `}

    ${(props) =>
    props.shape === 'circle' &&
    props.size === 'large' &&
    css`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      padding: 0.5rem;
    `}
`

const Badge: FunctionComponent<BadgeProps> = ({
  size,
  shape,
  text,
  color,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledBadge size={size} shape={shape} {...rest}>
      {text}
    </StyledBadge>
  )
}

export default Badge

Badge.defaultProps = {
  size: 'small',
  shape: 'square',
  text: 'Camara'
}

Badge.displayName = 'Badge'
