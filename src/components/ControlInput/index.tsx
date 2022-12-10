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
  startIcon = undefined,
  endIcon = undefined
}: Props): React.ReactElement => {
  const colorError = error && !isHover && 'danger'

  return (
    <div className={styles.control}>
      <Label text={label} color={colorError || color} />
      <div className={styles.input}>
        {startIcon !== undefined && <Icon name={startIcon} color={color} type='append' className={styles.start} />}
        <Input
          type={type}
          color={colorError || color}
          size={size}
          placeholder={placeholder}
          value={value}
          isHover={isHover}
          isFocus={isFocus}
          disabled={disabled}
          error={error}
          withStartIcon={Boolean(startIcon)}
          withEndIcon={Boolean(endIcon)}
        />
        {endIcon !== undefined && <Icon name={endIcon} color={color} type='prepend' className={styles.end} />}
      </div>
      <span className={classNames(styles['helper-text'], styles[colorError || color])}>{helperText}</span>
    </div>
  )
}
