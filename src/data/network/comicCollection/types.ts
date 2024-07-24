import { ComicSummary, NamePathPair } from '@data/model/comic'
import { PagedResults } from '@data/network/types'

export interface RecommendedComic {
  type: number,
  comic: ComicSummary,
}

export interface UpdatedComic {
  name: string,
  datetime_created: string,
  comic: ComicSummary,
}

export interface RankedComic {
  sort: number,
  sort_last: number,
  rise_sort: number,
  rise_num: number,
  date_type: number,
  popular: number,
  comic: ComicSummary,
}

export interface Banner {
  type: number,
  cover: string,
  brief: string,
  out_uuid: string,
  comic?: NamePathPair,
}

export interface ComicTopic {
  title: string,
  series: NamePathPair,
  journal: string,
  cover: string,
  period: string,
  type: number,
  brief: string,
  path_word: string,
  datetime_created: string,
}

export interface HomeData {
  banners: Banner[],
  recComics: PagedResults<RecommendedComic>,
  topics: PagedResults<ComicTopic>,
  hotComics: PagedResults<UpdatedComic>,
  newComics: PagedResults<UpdatedComic>,
  finishComics: PagedResults<ComicSummary>,
  rankDayComics: PagedResults<RankedComic>,
  rankWeekComics: PagedResults<RankedComic>,
  rankMonthComics: PagedResults<RankedComic>,
}
