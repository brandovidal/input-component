import { Color, Size, Type } from '../types/Input'
import { IconName } from '../types/Icon'

export interface Props {
  type?: Type
  size?: Size
  color?: Color
  placeholder?: string
  value?: string
  helperText?: string
  startIcon?: IconName
  endIcon?: IconName
  isHover?: boolean
  isFocus?: boolean
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  withStartIcon?: boolean
  withEndIcon?: boolean
}
