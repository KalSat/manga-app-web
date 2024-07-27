import { fireEvent, render, screen } from '@testing-library/react'
import ComicCollection from '@global/components/ComicCollection'
import { mockComics1, mockComics2 } from '@global/components/__mocks__/mockData'
import ComicCover from '@global/components/ComicCover'

jest.mock('@global/components/ComicCover')

/**
 * ### Prompt
 * 生成ComicCollection组件的单元测试，mock ComicCover，实现以下用例：
 * 1. 能正确渲染漫画专题，标题、漫画列表、more、refresh显示正常
 * 2. 当漫画被点击时能正确触发onComicClick回调
 * 3. 不传refresh时不显示refresh按钮
 * 4. 点击refresh按钮时，refresh函数能被调用，且漫画列表根据refresh函数的返回值变化
 * 5. 不传onMoreClick时，不显示more按钮
 * 6. 点击more按钮时能正确触发onMoreClick回调
 */
describe('ComicCollection', () => {
  const mockComics = mockComics1
  const mockOnComicClick = jest.fn()
  const mockRefresh = jest.fn().mockResolvedValue(mockComics2)
  const mockOnMoreClick = jest.fn()

  beforeEach(() => {
    jest.mocked(ComicCover).mockImplementation((props) => {
      const { comic, onClick } = props
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <div data-testid={props['data-testid']} onClick={() => onClick(comic)}>
          {comic.name}
        </div>
      )
    })
  })

  it('should render comic collection correctly', () => {
    // when
    render(
      <ComicCollection
        title="Test Collection"
        comics={mockComics}
        onComicClick={mockOnComicClick}
        refresh={mockRefresh}
        onMoreClick={mockOnMoreClick}
      />,
    )

    // then
    expect(screen.getByText('Test Collection')).toBeInTheDocument()
    mockComics.forEach((comic) => {
      expect(screen.getByText(comic.name)).toBeInTheDocument()
    })
    expect(screen.getByTestId('refresh')).toBeInTheDocument()
    expect(screen.getByTestId('more')).toBeInTheDocument()
  })

  it('should trigger onComicClick callback when a comic is clicked', () => {
    // given
    render(<ComicCollection title="Test Collection" comics={mockComics} onComicClick={mockOnComicClick} />)

    // when
    fireEvent.click(screen.getByTestId('comic1'))

    // then
    expect(mockOnComicClick).toHaveBeenCalledWith(mockComics[1])
  })

  it('should not display refresh button when refresh is not provided', () => {
    // when
    render(<ComicCollection title="Test Collection" comics={mockComics} onComicClick={mockOnComicClick} />)

    // then
    expect(screen.queryByTestId('refresh')).not.toBeInTheDocument()
  })

  it('should call refresh function and update comic list when refresh button is clicked', async () => {
    // given
    render(
      <ComicCollection
        title="Test Collection"
        comics={mockComics}
        onComicClick={mockOnComicClick}
        refresh={mockRefresh}
      />,
    )

    // when
    fireEvent.click(screen.getByTestId('refresh'))

    // then
    expect(mockRefresh).toHaveBeenCalled()
    const newComic = await screen.findByTestId('comic5')
    expect(newComic).toBeInTheDocument()
  })

  it('should not display more button when onMoreClick is not provided', () => {
    // when
    render(<ComicCollection title="Test Collection" comics={mockComics} onComicClick={mockOnComicClick} />)

    // then
    expect(screen.queryByTestId('more')).not.toBeInTheDocument()
  })

  it('should trigger onMoreClick callback when more button is clicked', () => {
    // given
    render(
      <ComicCollection
        title="Test Collection"
        comics={mockComics}
        onComicClick={mockOnComicClick}
        onMoreClick={mockOnMoreClick}
      />,
    )

    // when
    fireEvent.click(screen.getByTestId('more'))

    // then
    expect(mockOnMoreClick).toHaveBeenCalled()
  })
})
