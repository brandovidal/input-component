import { Color } from '../types/Input'
import { IconName, IconType } from '../types/Icon'

export interface Props {
  name?: IconName
  type?: IconType
  color?: Color
  className?: string
}
