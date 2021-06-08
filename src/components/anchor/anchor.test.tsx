import React from 'react'
import { render, screen } from '@testing-library/react'
import { Anchor } from '.'

describe('Anchor', () => {
  test('renders Anchor component', () => {
    render(<Anchor href='https://camara.space'>Camara</Anchor>)
    expect(screen.getByText('Camara'))
    screen.debug()
  })
  test('renders external Anchor component', () => {
    render(
      <Anchor external href='https://camara.space'>
        Camara
      </Anchor>
    )
    expect(screen.getByText('Camara'))
    screen.debug()
  })
  it('is truthy', () => {
    expect(Anchor).toBeTruthy()
  })
  screen.debug()
})
