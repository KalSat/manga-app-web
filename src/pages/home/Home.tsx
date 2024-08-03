import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Banners from '@pages/home/banners/Banners'
import { getHomeData, getNewestComics, getRecommendComics } from '@data/network/comicCollection/comicCollectionApi'
import ComicCollection from '@global/components/comic/ComicCollection'
import useTrans from '@common/i18n/useTrans'
import useComicNavigator from '@pages/home/useComicNavigator'
import { getFinishedComics, getLatestUpdatedComics } from '@data/network/comicExploration/comicExplorationApi'
import { Paths } from '@global/routes/types'
import LoadingView from '@global/components/LoadingView'
import ServerErrorView from '@global/components/ServerErrorView'

const Home = () => {
  const { isLoading, data: homeData, refetch } = useQuery(['homeData'], getHomeData)
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()
  const navigateTo = useNavigate()

  return (
    <>
      {isLoading ? (
        <LoadingView />
      ) : !homeData ? (
        <ServerErrorView onRetry={refetch} />
      ) : (
        <div className="flex flex-1 flex-col items-start justify-start">
          <Banners banners={homeData.banners} onBannerClick={navigateToComic} />
          <ComicCollection
            title={t('home.recommended')}
            comics={homeData.recComics.list.map((it) => it.comic)}
            onComicClick={navigateToComic}
            refresh={(offset, limit) => getRecommendComics(offset, limit).then((res) => res.list.map((it) => it.comic))}
            onMoreClick={() => navigateTo(Paths.RECOMMENDED_COMICS)}
          />
          <ComicCollection
            title={t('home.popular')}
            comics={homeData.hotComics.map((it) => it.comic)}
            onComicClick={navigateToComic}
            refresh={(offset, limit) => getLatestUpdatedComics(offset, limit).then((res) => res.list)}
            onMoreClick={() => navigateTo(Paths.LATEST_UPDATED_COMICS)}
          />
          <ComicCollection
            title={t('home.newest')}
            comics={homeData.newComics.map((it) => it.comic)}
            onComicClick={navigateToComic}
            refresh={(offset, limit) => getNewestComics(offset, limit).then((res) => res.list.map((it) => it.comic))}
            onMoreClick={() => navigateTo(Paths.NEWEST_COMICS)}
          />
          <ComicCollection
            title={t('home.finished')}
            comics={homeData.finishComics.list}
            onComicClick={navigateToComic}
            refresh={(offset, limit) => getFinishedComics(offset, limit).then((res) => res.list)}
            onMoreClick={() => navigateTo(Paths.FINISHED_COMICS)}
          />
        </div>
      )}
    </>
  )
}

export default Home
