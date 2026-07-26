import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
  it('renders the product name and price', () => {
    render(<ProductCard />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Wireless Headphones')
    expect(screen.getByText('₹1999')).toBeInTheDocument()
  })

  it('renders an image with alt text and a buy button', () => {
    render(<ProductCard />)
    expect(screen.getByAltText('Product')).toHaveAttribute('src', expect.stringContaining('placeholder'))
    expect(screen.getByRole('button', { name: 'Buy Now' })).toBeInTheDocument()
  })
})
