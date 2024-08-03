import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ComicCover, { ComicCoverProps } from '@global/components/comic/ComicCover'
import { mockComicSummary1, mockComicSummary2, mockComicSummary3 } from '@global/components/__mocks__/mockData'

const meta = {
  title: 'GlobalComponent/ComicCover',
  component: (props: ComicCoverProps) => (
    <div className="w-32 shadow">
      <ComicCover {...props} />
    </div>
  ),
  tags: [],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof ComicCover>

export default meta
type Story = StoryObj<typeof meta>

export const ComicWithoutDate: Story = {
  args: {
    comic: mockComicSummary1,
    onClick: fn,
  },
}

export const ComicWithDate: Story = {
  args: {
    comic: mockComicSummary2,
    onClick: fn,
  },
}

export const ComicWithoutPopular: Story = {
  args: {
    comic: mockComicSummary3,
    showPopular: false,
    onClick: fn,
  },
}

export const ThereComics: Story = {
  args: {
    comic: mockComicSummary1,
    onClick: fn,
  },
  decorators: [
    (Story) => (
      <div className="w-md shadow">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex max-w-md flex-row justify-between gap-2 px-4">
      <div className="flex-1">
        <ComicCover comic={mockComicSummary1} onClick={fn} />
      </div>
      <div className="flex-1">
        <ComicCover comic={mockComicSummary2} onClick={fn} />
      </div>
      <div className="flex-1">
        <ComicCover comic={mockComicSummary3} onClick={fn} />
      </div>
    </div>
  ),
}
