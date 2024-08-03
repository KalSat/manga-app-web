/**
 * API for comic search
 * @see {@link manga-api.http}
 */
import httpClient from '@data/network/httpClient'
import { ComicFilters } from '@data/network/comicExploration/types'
import { PagedResults, QueryParams } from '@data/network/types'
import { ComicSummary } from '@data/model/comic'

export const getFilters = () => httpClient.get<ComicFilters>('/h5/filter/comic/tags', { type: 1 })

export const getComics = (
  offset: number,
  limit: number,
  ordering?: string,
  top?: string,
  theme?: string,
  author?: string,
) => {
  const queryParams: QueryParams = { offset, limit, free_type: 1, _update: true }
  if (ordering) queryParams['ordering'] = ordering
  if (top) queryParams['top'] = top
  if (theme) queryParams['theme'] = theme
  if (author) queryParams['author'] = author
  return httpClient.get<PagedResults<ComicSummary>>('/comics', queryParams)
}

export const getFinishedComics = (offset: number, limit: number, ordering?: string) =>
  getComics(offset, limit, ordering, 'finish')

export const getLatestUpdatedComics = (offset: number, limit: number) => getComics(offset, limit, '-datetime_updated')

export const getComicsByTheme = (offset: number, limit: number, theme: string, ordering?: string) =>
  getComics(offset, limit, ordering, undefined, theme)

export const getComicsByAuthor = (offset: number, limit: number, author: string, ordering?: string) =>
  getComics(offset, limit, ordering, undefined, undefined, author)

export const searchComic = (query: string, type: string, offset: number, limit: number) =>
  httpClient.get<PagedResults<ComicSummary>>('/search/comic', { q: query, q_type: type, offset, limit })
