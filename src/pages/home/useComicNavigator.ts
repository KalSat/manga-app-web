import { NamePathPair } from '@data/model/comic'

export interface ComicNavigator {
  navigateToComic: (comic: NamePathPair) => void
}

const useComicNavigator = (): ComicNavigator => {
  const navigateToComic = (comic: NamePathPair) => {
    console.log('Navigate to comic:', comic)
    // TODO
  }
  return {
    navigateToComic,
  }
}
export default useComicNavigator
