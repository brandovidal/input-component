import { Color, Variant } from '../types/Button'
import { IconName, IconType } from '../types/Icon'

export interface Props {
  name?: IconName
  type?: IconType
  color?: Color | Variant
}
