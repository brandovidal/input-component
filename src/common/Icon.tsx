// import { iconsMap } from '../helper/Icon'

import classNames from 'classnames'

import { Props } from '../interfaces/Icon'

import { iconsMap } from '../helper/Icon'

export const Icon = ({ name = 'local_grocery_store', type = 'append', color }: Props): React.ReactElement => {
  const icon = iconsMap[name]

  return (
    <picture className={classNames('icon', [type], [color])}>
      <svg viewBox='0 0 24 24'>{icon}</svg>
    </picture>
  )
}
