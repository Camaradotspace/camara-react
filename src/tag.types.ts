import SpacerProps from './spacer.types'

type TagProps = SpacerProps & {
  /* Content of Tag */
  children: string

  /* Color of tag */
  color: string

  /* Size of tag */
  size?: 'small' | 'medium' | 'large'
}

export default TagProps
