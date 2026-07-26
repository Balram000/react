import { render, screen } from '@testing-library/react'
import Categories from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Categories')
  })

  it('lists all categories in order', () => {
    render(<Categories />)
    const items = screen.getAllByRole('listitem').map((li) => li.textContent)
    expect(items).toEqual(['Electronics', 'Fashion', 'Books', 'Shoes'])
  })
})
