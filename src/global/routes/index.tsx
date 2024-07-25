import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { HOME_PATH, ROOT_PATH } from './routePaths'
import App from '@pages/home/app'
import Header from '@/global/components/header'

export const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const Router = () => (
  <Routes>
    <Route path={ROOT_PATH} element={<Layout />}>
      <Route index element={<Navigate to={HOME_PATH} relative="route" />} />
      <Route path={HOME_PATH} element={<App />} />
      <Route path="*" element={<Navigate to={ROOT_PATH} relative="route" />} />
    </Route>
  </Routes>
)

export default Router
