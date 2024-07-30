import { noop } from 'lodash'
import { useQuery } from 'react-query'
import { CircularProgress, Typography } from '@mui/material'
import Banners from '@pages/home/banners/Banners'
import { getHomeData, getNewestComics, getRecommendComics } from '@data/network/comicCollection/comicCollectionApi'
import ComicCollection from '@global/components/ComicCollection'
import useTrans from '@common/i18n/useTrans'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicSummary } from '@data/model/comic'

const Home = () => {
  const { isLoading, data: homeData } = useQuery(['homeData'], getHomeData)
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()

  return (
    <div className="flex flex-1 flex-col items-start justify-start">
      {isLoading && (
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <CircularProgress />
          <Typography variant="subtitle1" className="mt-3">
            {t('common.loading')}
          </Typography>
        </div>
      )}
      {homeData && (
        <>
          <Banners banners={homeData.banners} onBannerClick={navigateToComic} />
          <ComicCollection
            title={t('home.recommended')}
            comics={homeData.recComics.list.map((it) => it.comic)}
            onComicClick={navigateToComic}
            refresh={(offset, limit) => getRecommendComics(offset, limit).then((res) => res.list.map((it) => it.comic))}
            onMoreClick={noop}
          />
          <ComicCollection
            title={t('home.popular')}
            comics={homeData.hotComics.map((it) => it.comic)}
            onComicClick={navigateToComic}
          />
          <ComicCollection
            title={t('home.newest')}
            comics={homeData.newComics.map((it) => it.comic)}
            onComicClick={navigateToComic}
            refresh={(offset, limit) => getNewestComics(offset, limit).then((res) => res.list.map((it) => it.comic))}
            onMoreClick={noop}
          />
          <ComicCollection
            title={t('home.finished')}
            comics={homeData.finishComics.list}
            onComicClick={noop}
            refresh={() => Promise.resolve([] as ComicSummary[])}
            onMoreClick={noop}
          />
        </>
      )}
    </div>
  )
}

export default Home
