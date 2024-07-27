import en from './en'
import cn from './cn'
import { NestedKeyOf } from '@/common/types'

export type ResourceKeys = NestedKeyOf<typeof en.translation>
export default {
  en,
  cn,
}
