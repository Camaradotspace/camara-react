import React from 'react'
import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('Input', () => {
  it('is truth', () => {
    expect(Input).toBeTruthy()
  })
  test('it renders the Input component', () => {
    render(<Input />)
    screen.debug()
  })
})
