import { InputHTMLAttributes } from 'react'
import { BorderProps, LayoutProps, SpaceProps } from 'styled-system'

type InputType = 'email' | 'number' | 'password' | 'text'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /* Label text */
  label?: string

  /* HTML `name` attribute */
  name?: string

  /* Placeholder Text */
  placeholder?: string

  /* What input type is it? */
  type?: InputType

  /* Is input required? */
  required?: boolean

  /* Should input be disabled? */
  disabled?: boolean

  /* Input helper text */
  helperText?: string

  /* Should input be inline? */
  inline?: boolean
}

type InputProps = InputFieldProps & SpaceProps & BorderProps & LayoutProps

export default InputProps
