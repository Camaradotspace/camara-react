import React from 'react'
import { render, screen } from '@testing-library/react'
import { Avatar } from '.'

describe('Avatar', () => {
  it('is truthy', () => {
    expect(Avatar).toBeTruthy()
  })
  test('it renders the Avatar component', () => {
    render(<Avatar />)
    screen.debug()
  })
})
