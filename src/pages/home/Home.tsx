import { noop } from 'lodash'
import { useQuery } from 'react-query'
import { CircularProgress, Typography } from '@mui/material'
import Banners from '@pages/home/banners/Banners'
import { getHomeData } from '@data/network/comicCollection/comicCollectionApi'

const Home = () => {
  const { isLoading, data: homeData } = useQuery(['homeData'], getHomeData)

  return (
    <div className="flex flex-1 flex-col items-start justify-start">
      {isLoading && (
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <CircularProgress />
          <Typography variant="subtitle1" className="mt-3">
            Loading...
          </Typography>
        </div>
      )}
      {homeData && (
        <>
          <Banners banners={homeData.banners} onBannerClick={noop} />
        </>
      )}
    </div>
  )
}

export default Home
