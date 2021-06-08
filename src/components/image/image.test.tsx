import React from 'react'
import { render, screen } from '@testing-library/react'
import { Image } from '.'

describe('image', () => {
  it('is truthy', () => {
    expect(Image).toBeTruthy()
  })
  test('it renders the Image component', () => {
    render(
      <Image
        src='https://source.unsplash.com/8TQUF6UbpAk/1600x900'
        alt='woman in black and white crew neck long sleeve shirt wearing purple knit cap'
      />
    )
    screen.debug()
  })
})
