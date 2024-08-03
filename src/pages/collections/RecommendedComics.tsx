import ComicGrid from '@global/components/comic/ComicGrid'
import { RecommendedComic } from '@data/network/comicCollection/types'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicCoverProps } from '@global/components/comic/ComicCover'
import { getRecommendComics } from '@data/network/comicCollection/comicCollectionApi'
import useTrans from '@common/i18n/useTrans'
import SecondaryAppBar from '@global/components/SecondaryAppBar'
import Scaffold from '@global/components/Scaffold'

const RecommendedComics = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()

  return (
    <Scaffold topBar={<SecondaryAppBar title={t('home.recommended')} />}>
      <ComicGrid<RecommendedComic>
        queryKey="RecommendedComics"
        queryFn={({ offset, limit }) => getRecommendComics(offset, limit)}
        pageSize={21}
        toComicCoverPropsFn={(it): ComicCoverProps => ({ comic: it.comic, onClick: navigateToComic })}
      />
    </Scaffold>
  )
}
export default RecommendedComics
