import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const counterText = () => screen.getByRole('heading', { level: 2 }).textContent

const clickTimes = async (name, times) => {
  const user = userEvent.setup()
  const button = screen.getByRole('button', { name })
  for (let i = 0; i < times; i += 1) {
    await user.click(button)
  }
}

describe('App', () => {
  it('starts at the initial counter value', () => {
    render(<App />)
    expect(counterText()).toContain('15')
  })

  it('increments the counter on "add value"', async () => {
    render(<App />)
    await clickTimes('add value', 1)
    expect(counterText()).toContain('16')
  })

  it('decrements the counter on "remove value"', async () => {
    render(<App />)
    await clickTimes('remove value', 1)
    expect(counterText()).toContain('14')
  })

  it('does not increment past the upper bound of 20', async () => {
    render(<App />)
    await clickTimes('add value', 10)
    expect(counterText()).toContain('20')
  })

  it('does not decrement below zero', async () => {
    render(<App />)
    await clickTimes('remove value', 20)
    expect(counterText()).toContain('0')
  })
})
