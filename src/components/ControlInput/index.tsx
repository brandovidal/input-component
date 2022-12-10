import styles from './index.module.css'

import { Props } from '../../interfaces/ControlInput'

import { Icon } from '../../common/Icon'
import { Input } from '../../common/Input'
import { Label } from '../../common/Label'
import classNames from 'classnames'

export const ControlInput = ({
  label = 'Label',
  type = 'text',
  color = 'default',
  placeholder = 'Placeholder',
  value = '',
  helperText = '',
  size = 'md',
  isHover = false,
  isFocus = false,
  disabled = false,
  error = false,
  fullWidth = false,
  startIcon = undefined,
  endIcon = undefined
}: Props): React.ReactElement => {
  const newColor = error ? 'danger' : color

  return (
    <div className={classNames(styles.control, fullWidth && styles['full-width'])}>
      <Label text={label} color={newColor} />
      <div className={classNames(styles.input, fullWidth && styles['full-width'])}>
        {startIcon !== undefined && <Icon name={startIcon} color={color} type='append' className={styles.start} />}
        <Input
          type={type}
          color={newColor}
          size={size}
          placeholder={placeholder}
          value={value}
          isHover={isHover}
          isFocus={isFocus}
          disabled={disabled}
          error={error}
          fullWidth={fullWidth}
          withStartIcon={Boolean(startIcon)}
          withEndIcon={Boolean(endIcon)}
        />
        {endIcon !== undefined && <Icon name={endIcon} color={color} type='prepend' className={styles.end} />}
      </div>
      <span className={classNames(styles['helper-text'], styles[newColor])}>{helperText}</span>
    </div>
  )
}