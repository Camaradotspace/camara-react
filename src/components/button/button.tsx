import React, { FunctionComponent } from 'react';
import { StyledButton } from './button.styles';
import { ButtonProps } from './button.types';

export const Button: FunctionComponent<ButtonProps> = ({
  variant,
  size,
  block,
  loading,
  disabled,
  pill,
  danger,
  backgroundColor,
  color,
  onClick,
  children,
  ...rest
}) => (
  <StyledButton
    variant={variant}
    size={size}
    disabled={disabled}
    block={block}
    loading={loading}
    onClick={onClick}
    pill={pill}
    danger={danger}
    backgroundColor={backgroundColor}
    color={color}
    {...rest}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  block: false,
  onClick: () => null,
  pill: false,
  danger: false,
};

Button.displayName = 'Button';
