import { fireEvent, render, screen } from '@testing-library/react'
import ComicCover from '@global/components/comic/ComicCover'
import { ComicSummary } from '@data/model/comic'

describe('ComicCover', () => {
  const mockComicSummary: ComicSummary = {
    name: 'Example Comic',
    path_word: 'example-comic',
    author: [{ name: 'Author Name', path_word: 'authorpath' }],
    theme: [],
    cover: 'https://example.com/cover.jpg',
    popular: 12345,
    datetime_updated: '2024-07-26',
  }
  const mockOnClick = jest.fn()

  it('should render comic cover correctly', () => {
    // when
    render(<ComicCover comic={mockComicSummary} onClick={mockOnClick} />)

    // then
    expect(screen.getByAltText('Example Comic')).toBeInTheDocument()
    expect(screen.getByText('12345')).toBeInTheDocument()
    expect(screen.getByText('2024-07-26')).toBeInTheDocument()
    expect(screen.getByText('Example Comic')).toBeInTheDocument()
  })

  it('should not render popularity when showPopular is false', () => {
    // when
    render(<ComicCover comic={mockComicSummary} onClick={mockOnClick} showPopular={false} />)

    // then
    expect(screen.queryByText('12345')).not.toBeInTheDocument()
  })

  it('should not render update date when datetime_updated is empty', () => {
    // given
    const comicWithoutDate: ComicSummary = { ...mockComicSummary, datetime_updated: '' }

    // when
    render(<ComicCover comic={comicWithoutDate} onClick={mockOnClick} />)
    // then
    expect(screen.queryByText('2024-07-26')).not.toBeInTheDocument()
  })

  it('should call onClick when the component is clicked', () => {
    // given
    render(<ComicCover comic={mockComicSummary} onClick={mockOnClick} />)

    // when
    fireEvent.click(screen.getByAltText('Example Comic'))

    // then
    expect(mockOnClick).toHaveBeenCalledWith(mockComicSummary)
  })
})
