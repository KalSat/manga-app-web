import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ResourceKeys } from '@/common/i18n/resources'

const useTrans = <T extends string = ResourceKeys>() => {
  const translation = useTranslation()

  const t = useCallback(
    (keys: T | T[]) => {
      return translation.t(keys)
    },
    [translation],
  )

  return { ...translation, t }
}

export default useTrans
