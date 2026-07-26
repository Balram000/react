import { render, screen } from '@testing-library/react'
import Card from './Card'

const job = {
  company: 'Google',
  logo: 'https://example.com/google.png',
  title: 'Senior React Developer',
  posted: '5 days ago',
  type: 'Part-time',
  level: 'Senior',
  pay: '$120/hr',
  location: 'New York, USA',
}

const renderCard = (overrides = {}) => render(<Card {...job} {...overrides} />)

describe('Card', () => {
  it('renders the company, posted date and title', () => {
    renderCard()
    expect(screen.getByRole('heading', { level: 3, name: /Google/ })).toBeInTheDocument()
    expect(screen.getByText('5 days ago')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(job.title)
  })

  it('renders the logo with the company name as alt text', () => {
    renderCard()
    expect(screen.getByAltText('Google')).toHaveAttribute('src', job.logo)
  })

  it('renders the job tags, pay and location', () => {
    renderCard()
    const details = screen.getAllByRole('heading', { level: 4 }).map((h) => h.textContent.trim())
    expect(details).toEqual(['Part-time', 'Senior', 'New York, USA'])
    expect(screen.getByText(/\$120\/hr/)).toBeInTheDocument()
  })

  it('renders the save and apply actions', () => {
    renderCard()
    expect(screen.getByRole('button', { name: /Save/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Apply now/ })).toBeInTheDocument()
  })

  it('renders without a title when the job has none', () => {
    renderCard({ title: undefined })
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('')
  })
})
