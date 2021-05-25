import { MarginProps } from 'styled-system'

type DividerProps = MarginProps & {
  /* What styled should the line be of? */
  type?: 'dashed' | 'dotted' | 'normal'
}

export default DividerProps
