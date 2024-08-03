import { CircularProgress, Typography } from '@mui/material'
import useTrans from '@common/i18n/useTrans'

const LoadingView = () => {
  const { t } = useTrans()

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-3">
      <CircularProgress />
      <Typography variant="subtitle1">{t('common.loading')}</Typography>
    </div>
  )
}
export default LoadingView
