import ComicGrid from '@global/components/ComicGrid'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicCoverProps } from '@global/components/ComicCover'
import useTrans from '@common/i18n/useTrans'
import { SecondaryAppBar } from '@global/components/SecondaryAppBar'
import { getNewestComics } from '@data/network/comicCollection/comicCollectionApi'
import { UpdatedComic } from '@data/network/comicCollection/types'

const NewestComics = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <SecondaryAppBar title={t('home.newest')} />
      <div className="flex-1 overflow-y-auto">
        <ComicGrid<UpdatedComic>
          queryKey="NewestComics"
          queryFn={({ offset, limit }) => getNewestComics(offset, limit)}
          pageSize={21}
          toComicCoverPropsFn={(it): ComicCoverProps => ({ comic: it.comic, onClick: navigateToComic })}
        />
      </div>
    </div>
  )
}
export default NewestComics
