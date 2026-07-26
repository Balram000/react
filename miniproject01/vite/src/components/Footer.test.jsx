import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/MyShop. All Rights Reserved./)).toBeInTheDocument()
  })

  it('renders inside a contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
