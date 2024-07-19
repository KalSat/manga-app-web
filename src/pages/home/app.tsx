import classNames from 'classnames'
import useHomeStore from '@global/states/home'
import useTrans from '@common/i18n/useTrans'
import { ReactComponent as ReactLogo } from '@assets/react.svg'
import viteLogo from '/vite.svg'
import styles from '@pages/home/app.module.css'

const App = () => {
  const { count, increase } = useHomeStore()
  const { t } = useTrans()

  return (
    <div className="container mx-auto px-6 py-16 pt-28 text-center">
      <div className="flex justify-center items-center mb-6">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className={classNames(
              'relative inline-block h-24 rounded-2xl object-cover object-center mr-8',
              styles.logo,
            )}
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <ReactLogo
            className={classNames(
              'relative inline-block w-24 h-24 rounded-2xl object-cover object-center',
              styles.logo,
            )}
          />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-6xl mb-6">Vite + React</h1>
      <div className="mb-6">
        <button
          className="m-1 h-10 transform rounded-md bg-blue-700 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          onClick={increase}
        >
          count is {count}
        </button>
        {count > 0 ? (
          <p>
            <code>The count is now: {count}</code>
          </p>
        ) : null}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p>{`${t('common.Hello')} - ${t('Welcome to React')}`}</p>
    </div>
  )
}

export default App
