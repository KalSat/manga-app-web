import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Paths } from './types'
import Home from '@pages/home/Home'
import RecommendedComics from '@pages/collections/RecommendedComics'
import LatestUpdatedComics from '@pages/collections/LatestUpdatedComics'
import NewestComics from '@pages/collections/NewestComics'
import FinishedComics from '@pages/collections/FinishedComics'

export const Layout = () => (
  <>
    <Outlet />
  </>
)

const Router = () => (
  <Routes>
    <Route path={Paths.ROOT} element={<Layout />}>
      <Route path="*" element={<Navigate to={Paths.ROOT} relative="route" />} />
      <Route index element={<Navigate to={Paths.HOME} relative="route" />} />
      <Route path={Paths.HOME} element={<Home />} />
      <Route path={Paths.RECOMMENDED_COMICS} element={<RecommendedComics />} />
      <Route path={Paths.LATEST_UPDATED_COMICS} element={<LatestUpdatedComics />} />
      <Route path={Paths.NEWEST_COMICS} element={<NewestComics />} />
      <Route path={Paths.FINISHED_COMICS} element={<FinishedComics />} />
    </Route>
  </Routes>
)

export default Router
