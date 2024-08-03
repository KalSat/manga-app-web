import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Paths } from './types'
import Landing from '@pages/landing/Landing'
import RecommendedComics from '@pages/collections/RecommendedComics'
import LatestUpdatedComics from '@pages/collections/LatestUpdatedComics'
import NewestComics from '@pages/collections/NewestComics'
import FinishedComics from '@pages/collections/FinishedComics'
import Search from '@pages/search/Search'

export const Layout = () => (
  <>
    <Outlet />
  </>
)

const Router = () => (
  <Routes>
    <Route path={Paths.ROOT} element={<Layout />}>
      <Route path="*" element={<Navigate to={Paths.ROOT} relative="route" />} />
      <Route index element={<Navigate to={Paths.LANDING} relative="route" />} />
      <Route path={Paths.LANDING} element={<Landing />} />
      <Route path={Paths.RECOMMENDED_COMICS} element={<RecommendedComics />} />
      <Route path={Paths.LATEST_UPDATED_COMICS} element={<LatestUpdatedComics />} />
      <Route path={Paths.NEWEST_COMICS} element={<NewestComics />} />
      <Route path={Paths.FINISHED_COMICS} element={<FinishedComics />} />
      <Route path={Paths.SEARCH} element={<Search />} />
    </Route>
  </Routes>
)

export default Router
