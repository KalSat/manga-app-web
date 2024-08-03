import ComicGrid from '@global/components/comic/ComicGrid'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicCoverProps } from '@global/components/comic/ComicCover'
import useTrans from '@common/i18n/useTrans'
import SecondaryAppBar from '@global/components/SecondaryAppBar'
import { getLatestUpdatedComics } from '@data/network/comicExploration/comicExplorationApi'
import { ComicSummary } from '@data/model/comic'
import Scaffold from '@global/components/Scaffold'

const LatestUpdatedComics = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()

  return (
    <Scaffold topBar={<SecondaryAppBar title={t('home.popular')} />}>
      <ComicGrid<ComicSummary>
        queryKey="LatestUpdatedComics"
        queryFn={({ offset, limit }) => getLatestUpdatedComics(offset, limit)}
        pageSize={21}
        toComicCoverPropsFn={(it): ComicCoverProps => ({ comic: it, onClick: navigateToComic })}
      />
    </Scaffold>
  )
}
export default LatestUpdatedComics
