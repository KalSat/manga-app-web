/**
 * Api for comic collection
 * refer to '1. Manga Collection APIs' of 'manga-api.http' for more details
 */
import httpClient from '@data/network/httpClient'
import { ComicTopic, HomeData, RankedComic, RecommendedComic, UpdatedComic } from '@data/network/comicCollection/types'
import { PagedResults } from '@data/network/types'

export const getHomeData = async () =>
  httpClient.get<HomeData>('/h5/homeIndex')

export const getRecommendComics = async (limit: number, offset: number) =>
  httpClient.get<PagedResults<RecommendedComic>>('/recs?pos=3200102', { limit, offset })

export const getNewestComics = async (limit: number, offset: number) =>
  httpClient.get<PagedResults<UpdatedComic>>('/update/newest', { limit, offset })

export const getTopics = async (limit: number, offset: number) =>
  httpClient.get<PagedResults<ComicTopic>>('/topics', { type: 1, _update: true, limit, offset })

export const getRankedComics = async (dataType: string, audienceType: string, limit: number, offset: number) =>
  httpClient.get<PagedResults<RankedComic>>('/ranks', { dataType, audienceType, limit, offset })

