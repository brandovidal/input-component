import styles from './index.module.css'

import { Props } from '../../interfaces/Children'

export const Item = ({ children = '' }: Props): React.ReactElement => <article className={styles.item}>{children}</article>
