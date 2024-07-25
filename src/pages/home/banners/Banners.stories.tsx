import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Banners from '@pages/home/banners/Banners'
import { mockBanners } from '@pages/home/banners/__mocks__/mockData'
import { BannerProps } from '@pages/home/banners/types'

const meta = {
  title: 'Example/Banners',
  component: (props: BannerProps) => (
    <div className="max-w-md shadow">
      <Banners {...props} />
    </div>
  ),
  tags: [],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof Banners>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    banners: mockBanners,
    onBannerClick: fn,
  },
}
