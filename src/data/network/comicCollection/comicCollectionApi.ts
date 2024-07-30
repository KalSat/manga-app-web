/**
 * Api for comic collection
 * refer to '1. Manga Collection APIs' of 'manga-api.http' for more details
 */
import httpClient from '@data/network/httpClient'
import { ComicTopic, HomeData, RankedComic, RecommendedComic, UpdatedComic } from '@data/network/comicCollection/types'
import { PagedResults } from '@data/network/types'

export const getHomeData = async () => httpClient.get<HomeData>('/h5/homeIndex')

export const getRecommendComics = async (offset: number, limit: number) =>
  httpClient.get<PagedResults<RecommendedComic>>('/recs?pos=3200102', { offset, limit })

export const getNewestComics = async (offset: number, limit: number) =>
  httpClient.get<PagedResults<UpdatedComic>>('/update/newest', { offset, limit })

export const getTopics = async (offset: number, limit: number) =>
  httpClient.get<PagedResults<ComicTopic>>('/topics', { type: 1, _update: true, offset, limit })

export const getRankedComics = async (dataType: string, audienceType: string, offset: number, limit: number) =>
  httpClient.get<PagedResults<RankedComic>>('/ranks', { dataType, audienceType, offset, limit })
