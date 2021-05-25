import { BorderProps, LayoutProps } from 'styled-system'
import SpacerProps from './spacer.types'

type TextAreaProps = SpacerProps &
  BorderProps &
  LayoutProps & {
    /* Label text */
    label?: string

    /* HTML `name` attribute */
    name?: string

    /* How many rows should the text area have? */
    rows?: number

    /* TextArea placeholder */
    placeholder?: string

    /* Is textarea required? */
    required?: boolean

    /* Is textarea disabled? */
    disabled?: boolean

    /* TextArea maximum length */
    maxlength?: number

    /* How should text area wrap? */
    wrap?: 'hard' | 'soft'

    /* Input helper text */
    helperText?: string

    /* Should textarea be resizable */
    resizable?: boolean
  }

export default TextAreaProps
