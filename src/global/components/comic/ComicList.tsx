import { useInfiniteQuery } from 'react-query'
import { useEffect, useRef } from 'react'
import { CircularProgress, Divider } from '@mui/material'
import ComicProfile, { ComicProfileProps } from '@global/components/comic/ComicProfile'
import { PageParam } from '@global/components/comic/ComicGrid'
import { PagedResults } from '@data/network/types'
import LoadingView from '@global/components/LoadingView'
import ServerErrorView from '@global/components/ServerErrorView'

export interface ComicListProps<T> {
  queryKey: string | string[]
  queryFn: (pageParam: PageParam) => Promise<PagedResults<T>>
  pageSize: number
  toComicProfilePropsFn: (data: T) => ComicProfileProps
}

const ComicList = <T,>({ queryKey, queryFn, pageSize, toComicProfilePropsFn }: ComicListProps<T>) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery(
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
    <>
      {isLoading ? (
        <LoadingView />
      ) : isError && comics.length === 0 ? (
        <ServerErrorView onRetry={refetch} />
      ) : (
        <div className="w-full">
          <div className="flex flex-col">
            {comics.map((comic, index) => {
              const comicProfileProps = toComicProfilePropsFn(comic)
              return (
                <>
                  {index !== 0 && <Divider />}
                  <ComicProfile key={comicProfileProps.comic.path_word} {...comicProfileProps} />
                </>
              )
            })}
          </div>
          <div ref={loadMoreRef} className="mt-4 flex justify-center">
            {hasNextPage && <CircularProgress />}
          </div>
        </div>
      )}
    </>
  )
}
export default ComicList
