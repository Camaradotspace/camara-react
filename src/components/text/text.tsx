import React, { forwardRef, HTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'hint' | 'label' | 'body' | 'caption' | 'overline'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  /* Should text be inline */
  inline?: boolean
  /* Should text be underlined */
  underline?: boolean
  /* Should text be strike-through? */
  strike?: boolean
  fontWeight?: 'normal' | 'bold' | 'medium' | number
  fontStyle?: 'italic' | 'normal'
  textAlign?: 'center' | 'left' | 'right' | 'justify'
}

const StyledText: any = styled('p', {
  fontFamily: '$body',
  fontWeight: '$regular',
  lineHeight: '$copy',
  color: '$text_primary',
  mt: 0,
  mb: 0,
  variants: {
    variant: {
      body: {
        fontSize: '$3',
        my: '$2',
        mx: 0
      },
      caption: {
        fontSize: '$2'
      },
      hint: {
        fontSize: 0
      },
      label: {
        fontSize: '$2'
      },
      overline: {
        textTransform: 'uppercase',
        fontSize: '$2',
        letterSpacing: '$overline'
      }
    },
    size: {
      large: {
        fontSize: '$4'
      },
      medium: {
        fontSize: '$3'
      },
      small: {
        fontSize: '$2'
      }
    },
    inline: {
      true: {
        display: 'inline'
      }
    },
    underline: {
      true: {
        textDecoration: 'underline'
      }
    },
    strike: {
      true: {
        textDecoration: 'line-through'
      }
    }
  }
})

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant, children, inline, underline, size, strike, ...rest }, ref) => (
    <StyledText
      ref={ref}
      variant={variant}
      inline={inline}
      size={size}
      strike={strike}
      underline={underline}
      {...rest}
    >
      {children}
    </StyledText>
  )
)

Text.defaultProps = {
  variant: 'body',
  size: 'medium'
}

Text.displayName = 'Text'
