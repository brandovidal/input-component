// import { iconsMap } from '../helper/Icon'

import classNames from 'classnames'

import { iconsMap } from '../helper/Icon'

import { Color, Variant } from '../types/Button'
import { IconName } from '../types/Icon'

interface Props {
  name?: IconName
  type?: 'append' | 'prepend'
  color?: Color | Variant
}

export const Icon = ({ name = 'local_grocery_store', type = 'append', color }: Props): React.ReactElement => {
  const icon = iconsMap[name]

  return (
    <picture className={classNames('icon', [type], [color])}>
      <svg viewBox="0 0 24 24">{icon}</svg>
    </picture>
  )
}
