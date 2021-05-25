import { ColorProps, SpaceProps } from 'styled-system'

type AnchorProps = ColorProps &
  SpaceProps & {
    /* link content */
    children: React.ReactNode

    /* Link URL */
    href: string

    /* Use Anchor as a Button? */
    // asBtn?: boolean

    /* Open link in new tab? */
    external?: boolean
  }

export default AnchorProps
