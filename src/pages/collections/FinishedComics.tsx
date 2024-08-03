import ComicGrid from '@global/components/comic/ComicGrid'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicCoverProps } from '@global/components/comic/ComicCover'
import useTrans from '@common/i18n/useTrans'
import SecondaryAppBar from '@global/components/SecondaryAppBar'
import { getFinishedComics } from '@data/network/comicExploration/comicExplorationApi'
import { ComicSummary } from '@data/model/comic'
import Scaffold from '@global/components/Scaffold'

const FinishedComics = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()

  return (
    <Scaffold topBar={<SecondaryAppBar title={t('home.finished')} />}>
      <ComicGrid<ComicSummary>
        queryKey="FinishedComics"
        queryFn={({ offset, limit }) => getFinishedComics(offset, limit)}
        pageSize={21}
        toComicCoverPropsFn={(it): ComicCoverProps => ({ comic: it, onClick: navigateToComic })}
      />
    </Scaffold>
  )
}
export default FinishedComics
