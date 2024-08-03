import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import ComicGrid from '@global/components/ComicGrid'
import { RecommendedComic } from '@data/network/comicCollection/types'
import useComicNavigator from '@pages/home/useComicNavigator'
import { ComicCoverProps } from '@global/components/ComicCover'
import { getRecommendComics } from '@data/network/comicCollection/comicCollectionApi'
import useTrans from '@common/i18n/useTrans'
import { HOME_PATH } from '@global/routes/routePaths'

const RecommendedComics = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()
  const navigateTo = useNavigate()

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigateTo(HOME_PATH)}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('home.recommended')}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="flex-1 overflow-y-auto">
        <ComicGrid<RecommendedComic>
          queryKey="RecommendedComics"
          queryFn={({ offset, limit }) => getRecommendComics(offset, limit)}
          pageSize={21}
          toComicCoverPropsFn={(it): ComicCoverProps => ({ comic: it.comic, onClick: navigateToComic })}
        />
      </div>
    </div>
  )
}
export default RecommendedComics
