import { useNavigate } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

export const SecondaryAppBar = ({ title }: { title: string }) => {
  const navigateTo = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => navigateTo(-1)}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
