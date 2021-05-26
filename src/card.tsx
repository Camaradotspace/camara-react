import React from 'react'
import styled from 'styled-components'
import { border, compose, flexbox, layout, space } from 'styled-system'
import CardProps from './card.types'

const StyledCard = styled.div<CardProps>`
  ${compose(space, layout, flexbox, border)}
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: 1rem;
  line-height: 1.5;
  box-shadow: ${({ theme }) => theme.colors.bg.shadow};
  border: ${({ theme }) => theme.colors.ui.border};
`

const Card: React.FC<CardProps> = (
  { children, elevate, bordered, ...props },
  ref
) => {
  return (
    <StyledCard ref={ref} elevate={elevate} bordered={bordered} {...props}>
      {children}
    </StyledCard>
  )
}

export default Card

Card.displayName = 'Card'
