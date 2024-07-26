export interface NamePathPair {
  name: string
  path_word: string
}

export interface DisplayValuePair {
  display: string
  value: number
}

export interface ComicSummary extends NamePathPair {
  author: NamePathPair[]
  theme: NamePathPair[]
  cover: string
  popular: number
  datetime_updated?: string
  last_chapter_name?: string
  img_type?: number
  free_type?: DisplayValuePair
}
