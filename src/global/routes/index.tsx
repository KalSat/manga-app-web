import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { HOME_PATH, RECOMMENDED_COMICS_PATH, ROOT_PATH } from './routePaths'
import Home from '@pages/home/Home'
import RecommendedComics from '@pages/collections/RecommendedComics'

export const Layout = () => (
  <>
    <Outlet />
  </>
)

const Router = () => (
  <Routes>
    <Route path={ROOT_PATH} element={<Layout />}>
      <Route index element={<Navigate to={HOME_PATH} relative="route" />} />
      <Route path={HOME_PATH} element={<Home />} />
      <Route path="*" element={<Navigate to={ROOT_PATH} relative="route" />} />
      <Route path={RECOMMENDED_COMICS_PATH} element={<RecommendedComics />} />
    </Route>
  </Routes>
)

export default Router
