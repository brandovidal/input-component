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
  fullWidth = false,
  withStartIcon = false,
  withEndIcon = false,
}: Props): React.ReactElement => {
  const newColor = error ? 'danger' : color

  return (
    <input
      type={type}
      className={classnames(
        styles.input,
        styles[newColor],
        styles[size],
        isHover && styles.active,
        isFocus && styles.focus,
        fullWidth && styles['full-width'],
        withStartIcon && styles['with-start-icon'],
        withEndIcon && styles['with-end-icon'])}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
  )
}
