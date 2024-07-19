import type { Meta, StoryObj } from '@storybook/react'
import SecondaryButton from '@global/components/buttons/SecondaryButton'

const meta = {
  title: 'Example/SecondaryButton',
  component: SecondaryButton,
  tags: [],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof SecondaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: 'Button',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
}
