import classnames from 'classnames'

import { Color, Size, Variant } from '../types/Button'
import { IconName } from '../types/Icon'

import { Icon } from './Icon'

interface Props {
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

export const Button = ({
  color = 'default',
  variant,
  text = 'Default',
  size = 'md',
  isHover = false,
  disabled = false,
  disableShadow = false,
  startIcon,
  endIcon,
}: Props): React.ReactElement => {
  return (
    <button
      type="button"
      className={classnames([color], [variant], [size], {
        active: isHover,
        primary: disableShadow
      })}
      disabled={disabled}
    >
      {startIcon && <Icon name={startIcon} color={variant || color} type='append' />}
      {text}
      {endIcon && <Icon name={endIcon} color={variant || color} type='prepend' />}
    </button>
  )
}
