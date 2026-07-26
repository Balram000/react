import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders a card for every job', () => {
    render(<App />)
    expect(screen.getAllByRole('button', { name: /Apply now/ })).toHaveLength(10)
  })

  it('renders the companies from the job list', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Google/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Uber/ })).toBeInTheDocument()
  })
})
