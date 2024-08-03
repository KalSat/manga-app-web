import ComicGrid from '@global/components/comic/ComicGrid'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicCoverProps } from '@global/components/comic/ComicCover'
import useTrans from '@common/i18n/useTrans'
import { SecondaryAppBar } from '@global/components/SecondaryAppBar'
import { getFinishedComics } from '@data/network/comicExploration/comicExplorationApi'
import { ComicSummary } from '@data/model/comic'

const FinishedComics = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <SecondaryAppBar title={t('home.finished')} />
      <div className="flex-1 overflow-y-auto">
        <ComicGrid<ComicSummary>
          queryKey="FinishedComics"
          queryFn={({ offset, limit }) => getFinishedComics(offset, limit)}
          pageSize={21}
          toComicCoverPropsFn={(it): ComicCoverProps => ({ comic: it, onClick: navigateToComic })}
        />
      </div>
    </div>
  )
}
export default FinishedComics
