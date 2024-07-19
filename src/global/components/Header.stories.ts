import type { Meta, StoryObj } from '@storybook/react'
import Header from '@global/components/header'

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
