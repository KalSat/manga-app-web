import SearchIcon from '@mui/icons-material/Search'
import { Button, InputBase } from '@mui/material'
import { useState } from 'react'
import Scaffold from '@global/components/Scaffold'
import SecondaryAppBar from '@global/components/SecondaryAppBar'
import useTrans from '@common/i18n/useTrans'
import RadioButtonGroup from '@global/components/RadioButtonGroup'
import { searchComic } from '@data/network/comicExploration/comicExplorationApi'
import useComicNavigator from '@pages/home/useComicNavigator'
import ComicList from '@global/components/comic/ComicList'
import { ComicSummary } from '@data/model/comic'

const Search = () => {
  const { t } = useTrans()
  const { navigateToComic } = useComicNavigator()
  const searchTypes = [
    { name: t('search.all'), path_word: '' },
    { name: t('search.name'), path_word: 'name' },
    { name: t('search.author'), path_word: 'author' },
    { name: t('search.translator'), path_word: 'local' },
  ]
  const [type, setType] = useState(searchTypes[0])
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')

  return (
    <Scaffold
      topBar={
        <SecondaryAppBar
          title={
            <div className="relative flex-1 rounded-full bg-white bg-opacity-15 hover:bg-opacity-25">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon />
              </div>
              <InputBase
                placeholder={t('home.search')}
                inputProps={{ 'aria-label': 'search' }}
                className="transition-width w-full pl-10 text-inherit"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          }
          action={
            <Button variant="text" color="inherit" size="small" onClick={() => setQuery(input)}>
              {t('search.search')}
            </Button>
          }
        />
      }
    >
      <div className="flex h-full w-full flex-col items-center justify-start gap-2 py-2">
        <RadioButtonGroup className="px-4" options={searchTypes} selected={type} onChange={setType} />
        {!!query && (
          <ComicList<ComicSummary>
            queryKey={[query, type.path_word]}
            queryFn={({ offset, limit }) => searchComic(query, type.path_word, offset, limit)}
            pageSize={20}
            toComicProfilePropsFn={(it) => ({
              comic: it,
              onComicClick: navigateToComic,
              onTagClick: () => {},
            })}
          />
        )}
      </div>
    </Scaffold>
  )
}
export default Search
