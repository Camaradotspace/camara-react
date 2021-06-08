import { darken, lighten } from 'polished'
import React from 'react'
import { styled } from '../../stitches.config'

export interface TagProps {
  /* Content of Tag */
  children: string
  /* Color of tag */
  color: string
  /* Size of tag */
  size?: 'small' | 'medium' | 'large'
}

const StyledTag = styled('div', {
  borderRadius: '$2',
  fontWeight: '500',
  textAlign: 'center',
  display: 'inline-block',
  verticalAlign: 'middle',
  variants: {
    size: {
      small: {
        fontSize: '10px',
        padding: '0.15rem 0.3rem'
      },
      medium: {
        fontSize: '12px',
        padding: '0.15rem 0.4rem'
      },
      large: {
        fontSize: '14px',
        padding: '0.075rem 0.5rem'
      }
    }
  }
})

export const Tag: React.FC<TagProps> = ({ children, color, size }) => {
  return (
    <StyledTag
      size={size}
      css={{
        border: `1.5px solid ${color}`,
        color: darken(0.2, `${color}`),
        backgroundColor: lighten(0.25, `${color}`)
      }}
    >
      {children.toUpperCase()}
    </StyledTag>
  )
}

Tag.defaultProps = {
  color: '#BB65FF',
  size: 'small',
  children: 'Tag'
}

Tag.displayName = 'Tag'
