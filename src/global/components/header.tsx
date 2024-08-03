import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'
import { Paths } from '@global/routes/types'

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 bg-zinc-100 px-4 py-2.5 lg:px-6 dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={viteLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Vite + React</span>
          </a>
          <div className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <Link
                  className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 lg:text-blue-700 dark:text-white"
                  to={Paths.HOME}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
