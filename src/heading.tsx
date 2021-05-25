import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { color, compose, layout, space, typography } from 'styled-system'
import HeadingProps from './heading.types'

const StyledH1 = styled.h1<HeadingProps>`
  ${compose(color, layout, space, typography)}
`
const StyledH2 = styled.h2<HeadingProps>`
  ${compose(color, layout, space, typography)}
`
const StyledH3 = styled.h3<HeadingProps>`
  ${compose(color, layout, space, typography)}
`
const StyledH4 = styled.h4<HeadingProps>`
  ${compose(color, layout, space, typography)}
`

const Heading: FunctionComponent<HeadingProps> = ({ children, level }) => {
  switch (level) {
    // for large heading H1
    case 1:
      return <StyledH1>{children}</StyledH1>
    // for large heading H2
    case 2:
      return <StyledH2>{children}</StyledH2>
    // for large heading H3
    case 3:
      return <StyledH3>{children}</StyledH3>
    // for large heading H4
    case 4:
      return <StyledH4>{children}</StyledH4>
    // every other case else
    default:
      return <StyledH1>{children}</StyledH1>
  }
}

export default Heading

Heading.defaultProps = {
  level: 1,
  children: 'This is a heading'
}

Heading.displayName = 'Heading'
