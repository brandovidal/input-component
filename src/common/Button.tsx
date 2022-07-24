import classnames from 'classnames'

import { Props } from '../interfaces/Button'

import { Icon } from './Icon'

export const Button = ({
  color = 'default',
  variant,
  text = 'Default',
  size = 'md',
  isHover = false,
  disabled = false,
  disableShadow = false,
  startIcon = undefined,
  endIcon = undefined
}: Props): React.ReactElement => {
  return (
    <button
      type='button'
      className={classnames([color], [variant], [size], {
        active: isHover,
        primary: disableShadow
      })}
      disabled={disabled}
    >
      {startIcon !== undefined && <Icon name={startIcon} color={variant ?? color} type='append' />}
      {text}
      {endIcon !== undefined && <Icon name={endIcon} color={variant ?? color} type='prepend' />}
    </button>
  )
}
