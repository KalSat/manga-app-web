import { useNavigate } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { ReactNode } from 'react'

export interface SecondaryAppBarProps {
  title: string | ReactNode
  action?: ReactNode
}

const SecondaryAppBar = ({ title, action }: SecondaryAppBarProps) => {
  const navigateTo = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar className="gap-2">
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={() => navigateTo(-1)}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {action}
      </Toolbar>
    </AppBar>
  )
}
export default SecondaryAppBar
