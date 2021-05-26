import React, { forwardRef } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  variant
} from 'styled-system'
import ButtonProps from './button.types'

const baseButtonStyles = {
  position: 'relative',
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'regular',
  lineHeight: 'copy',
  borderRadius: 0,
  borderWidth: 1,
  borderStyle: 'solid',
  px: 3,
  py: 1,
  m: 1,
  appearance: 'none',
  cursor: 'pointer'
}

const buttonVariants = variant({
  variants: {
    primary: {
      ...baseButtonStyles,
      bg: 'button.background',
      color: 'button.text',
      borderColor: 'transparent',
      svg: {
        color: 'text.inverse'
      },
      '&:hover': {
        backgroundColor: 'button.hover'
      },
      '&:active, &:focus': {
        backgroundColor: 'button.focus'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed'
      }
    },
    secondary: {
      ...baseButtonStyles,
      bg: 'transparent',
      color: 'button.background',
      borderColor: 'button.background',
      svg: {
        color: 'text.inverse'
      },
      '&:hover': {
        color: 'button.hover',
        borderColor: 'button.hover'
      },
      '&:active, &:focus': {
        color: 'button.focus',
        borderColor: 'button.focus'
      },
      '&:disabled': {
        color: 'text.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed'
      }
    },
    ghost: {
      ...baseButtonStyles,
      bg: 'transparent',
      color: 'button.background',
      borderColor: 'transparent',
      svg: {
        color: 'text.inverse'
      },
      '&:hover': {
        color: 'button.hover',
        backgroundColor: 'highlights.bgHighlight'
      },
      '&:active, &:focus': {
        color: 'button.focus',
        backgroundColor: 'highlights.bgHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        cursor: 'not-allowed'
      }
    }
  }
})

const StyledButton = styled.button<Partial<ButtonProps>>`
  ${buttonVariants}
  ${compose(color, space, layout, flexbox, border, position)}
  ${(props) =>
    props.variant === 'primary' &&
    props.danger === true &&
    css({
      backgroundColor: 'button.danger',
      '&:hover': {
        backgroundColor: 'button.dangerHover'
      },
      '&:active, &:focus': {
        backgroundColor: 'button.dangerFocus'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed'
      }
    })}
  ${(props) =>
    props.variant === 'secondary' &&
    props.danger === true &&
    css({
      color: 'button.danger',
      borderColor: 'button.danger',
      '&:hover': {
        color: 'button.dangerHover',
        borderColor: 'button.dangerHover'
      },
      '&:active, &:focus': {
        color: 'button.dangerFocus',
        borderColor: 'button.dangerFocus'
      },
      '&:disabled': {
        color: 'text.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed'
      }
    })}
  ${(props) =>
    props.variant === 'ghost' &&
    props.danger === true &&
    css({
      color: 'button.danger',
      '&:hover': {
        color: 'button.dangerHover'
      },
      '&:active, &:focus': {
        color: 'button.dangerFocus'
      },
      '&:disabled': {
        color: 'text.disabled',
        cursor: 'not-allowed'
      }
    })}
  ${(props) =>
    props.pill &&
    css({
      borderRadius: 3
    })};
  ${(props) =>
    props.size === 'large' &&
    css({
      px: 4,
      py: 2
    })}
  ${(props) =>
    props.size === 'medium' &&
    css({
      px: 3,
      py: 1
    })}
  ${(props) =>
    props.size === 'small' &&
    css({
      fontSize: 1,
      px: 2,
      py: 1
    })};
  ${(props) =>
    props.block &&
    css({
      display: 'block'
    })};
`

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled,
      children,
      block,
      danger,
      size,
      mb,
      mt,
      mx,
      my,
      ml,
      mr,
      ...props
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      disabled={disabled}
      danger={danger}
      size={size}
      block={block}
      mx={mx}
      my={my}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      {...props}
    >
      {children}
    </StyledButton>
  )
)

export default Button

Button.defaultProps = {
  variant: 'primary'
}

Button.displayName = 'Button'
