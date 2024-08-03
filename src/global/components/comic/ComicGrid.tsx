import { useInfiniteQuery } from 'react-query'
import { useEffect, useRef } from 'react'
import { CircularProgress, Typography } from '@mui/material'
import ComicCover, { ComicCoverProps } from '@global/components/comic/ComicCover'
import { PagedResults } from '@data/network/types'
import useTrans from '@common/i18n/useTrans'

export interface ComicGridProps<T> {
  queryKey: string
  queryFn: (pageParam: PageParam) => Promise<PagedResults<T>>
  pageSize: number
  toComicCoverPropsFn: (data: T) => ComicCoverProps
}

export interface PageParam {
  offset: number
  limit: number
}

/**
 * ### Prompt
 * ComicGrid组件是一个用来展示漫画列表的组件。它内部会以网格样式排列ComicCover组件，每行3个宽度均分，使用Tailwind CSS的grid布局来实现，不需要考虑响应式布局。首次加载时会居中显示Loading Indicator，加载完成后显示漫画网格。每个漫画用ComicCover组件来渲染，通过toComicCoverPropsFn来将泛型数据T装换为ComicCover组件的入参。组件中会使用react-query提供的useInfiniteQuery来管理分页加载的状态。另外，需要实现滑至底部自动加载下一页的功能，组件最底部添加一个CircularProgress组件，当滑动至CircularProgress组件显示时则自动触发handleLoadMore函数来加载下一页数据。
 */
const ComicGrid = <T,>({ queryKey, queryFn, pageSize, toComicCoverPropsFn }: ComicGridProps<T>) => {
  const { t } = useTrans()
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    queryKey,
    ({ pageParam = { offset: 0, limit: pageSize } }: { pageParam?: PageParam }) => queryFn(pageParam),
    {
      getNextPageParam: (lastPage): PageParam | undefined =>
        lastPage.offset + lastPage.limit < lastPage.total
          ? { offset: lastPage.offset + lastPage.limit, limit: pageSize }
          : undefined,
    },
  )

  const comics = data?.pages.flatMap((page) => page.list) || []

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const handleLoadMore = () => {
    if (hasNextPage) {
      void fetchNextPage()
    }
  }

  useEffect(() => {
    const currentRef = loadMoreRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore()
        }
      },
      { threshold: 1.0 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasNextPage])

  return (
    <div>
      <div className="comic-grid w-full px-4 py-2">
        {isLoading && comics.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <CircularProgress />
            <Typography variant="subtitle1" className="mt-3">
              {t('common.loading')}
            </Typography>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {comics.map((comic, index) => (
              <ComicCover key={index} {...toComicCoverPropsFn(comic)} />
            ))}
          </div>
        )}
        <div ref={loadMoreRef} className="mt-4 flex justify-center">
          {hasNextPage && <CircularProgress />}
        </div>
      </div>
    </div>
  )
}

export default ComicGrid
