import { Banner } from '@data/network/comicCollection/types'

export interface BannerProps {
  banners: Banner[]
  onBannerClick: (banner: Banner) => void
}
