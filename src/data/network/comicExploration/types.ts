import { NamePathPair } from '@data/model/comic'

export interface ComicTheme extends NamePathPair {
  initials: number
  count: number
}

export interface ComicFilters {
  theme: ComicTheme[]
  ordering: NamePathPair[]
  top: NamePathPair[]
}
