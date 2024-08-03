import Scaffold from '@global/components/Scaffold'
import PrimaryAppBar from '@pages/landing/PrimaryAppBar'
import Home from '@pages/home/Home'

const Landing = () => {
  return (
    <Scaffold topBar={<PrimaryAppBar />}>
      <Home />
    </Scaffold>
  )
}
export default Landing
