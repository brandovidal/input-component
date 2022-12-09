import styles from './index.module.css'

import { Props } from '../../interfaces/Children'

export const List = ({ children = '' }: Props): React.ReactElement => <section className={styles.list}>{children}</section>
