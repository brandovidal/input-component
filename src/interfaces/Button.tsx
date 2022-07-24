import { Color, Size, Variant } from '../types/Button'
import { IconName } from '../types/Icon'

export interface Props {
  variant?: Variant
  size?: Size
  color?: Color
  text?: string
  isHover?: boolean
  disableShadow?: boolean
  disabled?: boolean
  startIcon?: IconName
  endIcon?: IconName
}
