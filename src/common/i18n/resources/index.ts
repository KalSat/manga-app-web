import en from './en'
import fr from './fr'
import { NestedKeyOf } from '@/common/types'

export type ResourceKeys = NestedKeyOf<typeof en.translation>
export default {
  en,
  fr,
}
