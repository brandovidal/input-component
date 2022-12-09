import styles from './index.module.css'

import { Props } from '../../interfaces/Children'

export const List = ({ children = '' }: Props): React.ReactElement => <ul className={styles.list}>{children}</ul>
