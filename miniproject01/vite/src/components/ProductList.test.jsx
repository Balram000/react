import { render, screen } from '@testing-library/react'
import ProductList from './ProductList'

describe('ProductList', () => {
  it('renders the section heading', () => {
    render(<ProductList />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Products')
  })

  it('renders four product cards', () => {
    render(<ProductList />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(screen.getAllByRole('button', { name: 'Buy Now' })).toHaveLength(4)
  })
})
