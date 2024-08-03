import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Paths } from './types'
import Home from '@pages/home/Home'
import RecommendedComics from '@pages/collections/RecommendedComics'

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
    </Route>
  </Routes>
)

export default Router
