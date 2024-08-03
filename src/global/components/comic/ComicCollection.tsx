import { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { ChevronRight } from '@mui/icons-material'
import { useMutation } from 'react-query'
import ComicCover from '@global/components/comic/ComicCover'
import { ComicSummary, NamePathPair } from '@data/model/comic'

export interface ComicCollectionProps {
  title: string
  comics: ComicSummary[]
  onComicClick: (comic: NamePathPair) => void
  refresh?: (offset: number, limit: number) => Promise<ComicSummary[]>
  onMoreClick?: () => void
}

/**
 * ComicCollection component displays a collection of comic covers with a title and optional actions.
 *
 * ### Prompt
 * ComicCollection组件是一个用来展示漫画专题的组件，它可以纵向分为两个部分：header和body。header是标题栏，左侧显示title右侧放置两个IconButton用于表示refresh和more, refresh按钮点击后会刷新body中的内容，more按钮点击会触发onMoreClick函数。若refresh或onMoreClick值为空则相应按钮不显示。body会以网格样式排列ComicCover组件，每行3个宽度均分，数量与comics数组长度一致。使用Tailwind CSS的grid布局来实现，不需要考虑响应式布局。
 *
 * @component
 * @param {ComicCollectionProps} props - The properties for the ComicCollection component.
 * @param {string} props.title - The title of the comic collection.
 * @param {ComicSummary[]} props.comics - The list of comics to display.
 * @param {function} props.onComicClick - Callback function to handle click events on a comic cover.
 * @param {function} [props.refresh] - Optional callback function to refresh the comic list.
 * @param {function} [props.onMoreClick] - Optional callback function to handle "more" button click events.
 */
const ComicCollection = ({ title, comics, onComicClick, refresh, onMoreClick }: ComicCollectionProps) => {
  const [comicList, setComicList] = useState(comics)
  const [offset, setOffset] = useState(comics.length)
  const limit = comics.length

  const { mutateAsync } = useMutation([title, offset, limit], async () =>
    refresh ? await refresh(offset, limit) : comicList,
  )

  const handleRefresh = async () => {
    if (refresh) {
      const refreshedComics = await mutateAsync()
      setComicList(refreshedComics)
      setOffset(offset + refreshedComics.length)
    }
  }

  return (
    <div className="comic-collection w-full px-4 py-2">
      <div className="header flex items-center justify-between">
        <Typography variant="h6">{title}</Typography>
        <div className="actions flex">
          {refresh && (
            <IconButton data-testid="refresh" onClick={handleRefresh}>
              <RefreshIcon />
            </IconButton>
          )}
          {onMoreClick && (
            <IconButton data-testid="more" className="ms-2" onClick={onMoreClick}>
              <ChevronRight />
            </IconButton>
          )}
        </div>
      </div>
      <div className="body mt-4">
        <div className="grid grid-cols-3 gap-4">
          {comicList.map((comic, i) => (
            <div className="comic-item" key={comic.path_word}>
              <ComicCover data-testid={`comic${i}`} comic={comic} onClick={onComicClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ComicCollection
