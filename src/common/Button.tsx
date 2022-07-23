import classnames from 'classnames'
import { Color } from '../types/Color'

interface Props {
  variant?: 'outline' | 'text'
  color?: Color
  text?: String
  isHover?: Boolean
}

export const Button = ({
  color = 'default',
  variant,
  text = 'Default',
  isHover = false
}: Props): React.ReactElement => {
  return (
    <button
      className={classnames([variant], [color], {
        active: isHover
      })}
    >
      {text}
    </button>
  )
}
