import { Color, Variant } from '../types/Input'
import { IconName, IconType } from '../types/Icon'

export interface Props {
  name?: IconName
  type?: IconType
  color?: Color | Variant
  className?: string
}
