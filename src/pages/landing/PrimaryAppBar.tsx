import { AppBar, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import { AccountCircle, AutoStories } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { noop } from 'lodash'
import useTrans from '@common/i18n/useTrans'

const PrimaryAppBar = () => {
  const { t } = useTrans()

  return (
    <AppBar position="static">
      <Toolbar className="gap-4">
        <div className="flex gap-1">
          <AutoStories className="size-8" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MANGA
          </Typography>
        </div>
        <div className="relative flex-1 rounded-full bg-white bg-opacity-15 hover:bg-opacity-25">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon />
          </div>
          <InputBase
            placeholder={t('home.search')}
            inputProps={{ 'aria-label': 'search' }}
            className="transition-width w-full pl-10 text-inherit"
          />
        </div>
        <IconButton
          className="p-0"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          onClick={noop}
          color="inherit"
        >
          <AccountCircle className="size-8" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default PrimaryAppBar
