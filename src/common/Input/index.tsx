import styles from './index.module.css'

import classnames from 'classnames'

import { Props } from '../../interfaces/Input'

export const Input = ({
  type = 'text',
  size = 'md',
  color = 'default',
  placeholder = '',
  value = '',
  isHover = false,
  isFocus = false,
  disabled = false,
  error = false,
  withStartIcon = false,
  withEndIcon = false
}: Props): React.ReactElement => {
  const colorError = error && 'danger'

  return (
    <input
      type={type}
      className={classnames(
        styles.input,
        styles[colorError || color],
        styles[size],
        isHover && styles.active,
        isFocus && styles.focus,
        withStartIcon && styles['with-start-icon'],
        withEndIcon && styles['with-end-icon'])}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
  )
}
