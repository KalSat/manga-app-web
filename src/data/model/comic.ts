export interface NamePathPair {
  name: string
  path_word: string
}

export interface DisplayValuePair {
  display: string
  value: number
}

export interface ComicSummary extends NamePathPair {
  females: NamePathPair[],
  males: NamePathPair[],
  author: NamePathPair[],
  theme: NamePathPair[],
  img_type: number,
  cover: string,
  popular: number,
  datetime_updated: string,
  last_chapter_name: string,
  free_type: DisplayValuePair,
}
