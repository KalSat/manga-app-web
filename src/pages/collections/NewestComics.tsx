import ComicGrid from '@global/components/comic/ComicGrid'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicCoverProps } from '@global/components/comic/ComicCover'
import useTrans from '@common/i18n/useTrans'
import SecondaryAppBar from '@global/components/SecondaryAppBar'
import { getNewestComics } from '@data/network/comicCollection/comicCollectionApi'
import { UpdatedComic } from '@data/network/comicCollection/types'
import Scaffold from '@global/components/Scaffold'

const NewestComics = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()

  return (
    <Scaffold topBar={<SecondaryAppBar title={t('home.newest')} />}>
      <ComicGrid<UpdatedComic>
        queryKey="NewestComics"
        queryFn={({ offset, limit }) => getNewestComics(offset, limit)}
        pageSize={21}
        toComicCoverPropsFn={(it): ComicCoverProps => ({ comic: it.comic, onClick: navigateToComic })}
      />
    </Scaffold>
  )
}
export default NewestComics
