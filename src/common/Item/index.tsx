import styles from './index.module.css'

import { Props } from '../../interfaces/Children'

export const Item = ({ children = '' }: Props): React.ReactElement => <li className={styles.item}>{children}</li>
