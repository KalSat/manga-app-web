import { Typography } from '@mui/material'
import { SignalWifiStatusbarConnectedNoInternet4 } from '@mui/icons-material'
import useTrans from '@common/i18n/useTrans'
import PrimaryButton from '@global/components/buttons/PrimaryButton'

const ServerErrorView = ({ onRetry }: { onRetry: () => void }) => {
  const { t } = useTrans()

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-6">
      <SignalWifiStatusbarConnectedNoInternet4 className="size-12" />
      <Typography variant="subtitle1" className="w-64 text-center">
        {t('common.serverError')}
      </Typography>
      <PrimaryButton className="mt-4" onClick={onRetry}>
        {t('common.retry')}
      </PrimaryButton>
    </div>
  )
}
export default ServerErrorView
