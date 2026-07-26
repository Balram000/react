import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders every section of the shop page', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Best Deals Every Day')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Categories', level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Products', level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
