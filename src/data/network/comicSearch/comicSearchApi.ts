/**
 * API for comic search
 * @see {@link manga-api.http}
 */
import httpClient from '@data/network/httpClient'

const searchComic = (query: string, type: string, offset: number, limit: number) => {
  return httpClient.get('/search/comic', {
    q: query,
    q_type: type,
    offset,
    limit,
  })
}

const getFilters = () => {
  return httpClient.get('/h5/filter/comic/tags')
}
