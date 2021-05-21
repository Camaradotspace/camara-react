import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonStyleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * What variant of button is to be used
   */
  variant?: 'primary' | 'secondary' | 'ghost';

  /**
   * How large should the button be?
   */
  size?: 'large' | 'small' | 'medium';

  /**
   * Should button take full width of parent element
   */
  block?: boolean;

  /**
   * Set button loading state
   */
  loading?: boolean;

  /**
   * Set button disabled state
   */
  disabled?: boolean;

  /**
   * Is the call-to-action destructive or irreversible?
   */
  danger?: boolean;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Set shaped of button to pill-shape
   */
  pill?: boolean;
}

interface BaseProps {
  /**
   * Can be used to set the button label
   */
  children: ReactNode;
}

export type ButtonProps = BaseProps & ButtonStyleProps;
