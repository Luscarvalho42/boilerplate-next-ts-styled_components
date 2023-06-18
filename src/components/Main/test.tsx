import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Renderizar a página', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /boilerplate/i
      })
    ).toBeInTheDocument()
  })
})
