import { fireEvent, render, screen } from '@testing-library/react'
import Banners from '@pages/home/banners/Banners'
import { Banner } from '@data/network/comicCollection/types'

jest.mock('@pages/home/banners/AutoPlaySwipeableViews')

describe('Banners', () => {
  const mockBanners: Banner[] = [
    { out_uuid: '1', type: 1, cover: 'image1.jpg', brief: 'Banner 1' },
    { out_uuid: '2', type: 1, cover: 'image2.jpg', brief: 'Banner 2' },
    { out_uuid: '3', type: 1, cover: 'image3.jpg', brief: 'Banner 3' },
  ]
  const mockOnBannerClick = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render all banners correctly', () => {
    // given
    render(<Banners banners={mockBanners} onBannerClick={mockOnBannerClick} />)

    // then
    expect(screen.getByAltText('Banner 1')).toBeInTheDocument()
    expect(screen.getByAltText('Banner 2')).toBeInTheDocument()
    expect(screen.getByAltText('Banner 3')).toBeInTheDocument()
  })

  it('should change index value of AutoPlaySwipeableViews when next and back buttons are clicked', () => {
    // given
    render(<Banners banners={mockBanners} onBannerClick={mockOnBannerClick} />)
    const nextButton = screen.getByTestId('next')
    const backButton = screen.getByTestId('back')

    // when
    fireEvent.click(nextButton)

    // then
    expect(screen.getByText('index: 1')).toBeInTheDocument()

    // when
    fireEvent.click(nextButton)

    // then
    expect(screen.getByText('index: 2')).toBeInTheDocument()

    // when
    fireEvent.click(backButton)

    // then
    expect(screen.getByText('index: 1')).toBeInTheDocument()
  })

  it('should call onBannerClick callback when a banner is clicked', () => {
    // given
    render(<Banners banners={mockBanners} onBannerClick={mockOnBannerClick} />)
    const banner = screen.getByAltText('Banner 1')

    // when
    fireEvent.click(banner)

    // then
    expect(mockOnBannerClick).toHaveBeenCalledWith(mockBanners[0])
  })
})
