import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the shop name', () => {
    render(<Navbar />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('MyShop')
  })

  it('renders every navigation link', () => {
    render(<Navbar />)
    const items = screen.getAllByRole('listitem').map((li) => li.textContent)
    expect(items).toEqual(['Home', 'Products', 'Categories', 'Contact'])
  })
})
