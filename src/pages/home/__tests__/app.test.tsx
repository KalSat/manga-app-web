import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from '@pages/home/app'

describe('TestCase of app.tsx', () => {
  it('should render correctly', () => {
    // when
    const { queryByText } = render(<App />)

    // then
    expect(queryByText(/Vite \+ React/i)).toBeTruthy()
    expect(queryByText('Hello - Welcome to React and react-i18next')).toBeTruthy()
  })

  it('should count be increased when button clicked', async () => {
    // given
    render(<App />)
    const buttonCount = await screen.findByRole('button')

    // then
    expect(buttonCount.innerHTML).toBe('count is 0')

    // when
    await user.click(buttonCount)
    await user.click(buttonCount)

    // then
    expect(buttonCount.innerHTML).toBe('count is 2')
  })

  it('should element be in document', async () => {
    // given
    render(<App />)
    const buttonCount = await screen.findByRole('button')
    const codeCount = screen.queryByText(/The count is now:/)

    // then
    expect(codeCount).not.toBeInTheDocument()

    // when
    await user.click(buttonCount)
    await user.click(buttonCount)

    // then
    const codeCountNow = screen.queryByText(/The count is now:/)
    expect(codeCountNow).toBeInTheDocument()
  })
})
