import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ComicCollection from '@global/components/comic/ComicCollection'
import { mockComics1, mockComics2 } from '@global/components/__mocks__/mockData'

const meta = {
  title: 'GlobalComponent/ComicCollection',
  component: ComicCollection,
  decorators: [
    (Story) => (
      <div className="max-w-md shadow">
        <Story />
      </div>
    ),
  ],
  tags: [],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof ComicCollection>

export default meta
type Story = StoryObj<typeof meta>

export const Recommended: Story = {
  args: {
    title: '漫画推荐',
    comics: mockComics1,
    onComicClick: fn,
    refresh: () => Promise.resolve(mockComics1),
    onMoreClick: fn,
  },
}

export const Finished: Story = {
  args: {
    title: '完结漫画',
    comics: mockComics2,
    onComicClick: fn,
    onMoreClick: fn,
  },
}
