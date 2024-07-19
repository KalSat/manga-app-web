import type { Meta, StoryObj } from '@storybook/react'
import PrimaryButton from '@global/components/buttons/PrimaryButton'

const meta = {
  title: 'Example/PrimaryButton',
  component: PrimaryButton,
  tags: [],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof PrimaryButton>

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
