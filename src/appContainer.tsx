import Routes from 'src/global/routes'

const AppContainer = () => {
  return (
    <div id="app" className="flex h-full w-full flex-col items-stretch justify-start overflow-y-auto">
      <Routes />
    </div>
  )
}

export default AppContainer
