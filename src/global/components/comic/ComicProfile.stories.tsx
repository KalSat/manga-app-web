import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ComicProfile from '@global/components/comic/ComicProfile'
import { mockComicSummary1, mockComicSummary2, mockComicSummary3 } from '@global/components/__mocks__/mockData'

const meta = {
  title: 'GlobalComponent/ComicProfile',
  component: ComicProfile,
  decorators: [
    (Story) => (
      <div className="w-96 shadow">
        <Story />
      </div>
    ),
  ],
  tags: [],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof ComicProfile>

export default meta
type Story = StoryObj<typeof meta>

export const ComicWithoutDate: Story = {
  args: {
    comic: mockComicSummary1,
    onComicClick: fn,
    onTagClick: fn,
  },
}

export const ComicWithDate: Story = {
  args: {
    comic: mockComicSummary2,
    onComicClick: fn,
    onTagClick: fn,
  },
}

export const ComicWithoutPopular: Story = {
  args: {
    comic: mockComicSummary3,
    onComicClick: fn,
    onTagClick: fn,
  },
}
