import { render, screen } from '@testing-library/react'
import PrimaryButton from '@/global/components/buttons/PrimaryButton'

describe('PrimaryButton', () => {
  it('should render it correctly', () => {
    // when
    render(<PrimaryButton>Confirm</PrimaryButton>)

    // then
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
  })
})
