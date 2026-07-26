import { render, screen } from '@testing-library/react'
import Banner from './Banner'

describe('Banner', () => {
  it('renders the headline and tagline', () => {
    render(<Banner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to MyShop')
    expect(screen.getByText('Best Deals Every Day')).toBeInTheDocument()
  })

  it('renders the call to action button', () => {
    render(<Banner />)
    expect(screen.getByRole('button', { name: 'Shop Now' })).toBeInTheDocument()
  })
})
