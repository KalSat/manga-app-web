import { render, screen } from '@testing-library/react'
import SecondaryButton from '@/global/components/buttons/SecondaryButton'

describe('SecondaryButton', () => {
  it('should render it correctly', () => {
    // when
    render(<SecondaryButton>Cancel</SecondaryButton>)

    // then
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  })
})
