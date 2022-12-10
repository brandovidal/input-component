import styles from './index.module.css'

import classNames from 'classnames'

import { Props } from '../../interfaces/Icon'

import { iconsMap } from '../../helper/Icon'

export const Icon = ({ name = 'phone', type = 'append', color = '', className = '' }: Props): React.ReactElement => {
  const icon = iconsMap[name]

  return (
    <picture className={classNames(styles.icon, styles[type], styles[color], className)}>
      <svg viewBox='0 0 24 24'>{icon}</svg>
    </picture>
  )
}
