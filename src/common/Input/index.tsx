import styles from './index.module.css'

import classnames from 'classnames'

import { Props } from '../../interfaces/Input'

export const Input = ({
  type = 'text',
  size = 'md',
  color = 'default',
  placeholder = '',
  name = 'default',
  value = '',
  isHover = false,
  isFocus = false,
  disabled = false,
  error = false,
  fullWidth = false,
  multine = false,
  row = 0,
  withStartIcon = false,
  withEndIcon = false
}: Props): JSX.Element => {
  const newColor = error ? 'danger' : color

  return (
    multine
      ? (<textarea
          className={classnames(
            styles.input,
            styles[newColor],
            styles[size],
            isHover && styles.active,
            isFocus && styles.focus)}
          rows={row}
          placeholder={placeholder}
          disabled={disabled}
          data-testid={name}
          name={name}
          defaultValue={value}
         />)
      : (<input
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
          data-testid={name}
          name={name}
          defaultValue={value}
         />)
  )
}
