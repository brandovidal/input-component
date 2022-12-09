import styles from './index.module.css'

import { Props } from '../../interfaces/Text'

export const Code = ({ text = '' }: Props): React.ReactElement => <pre className={styles.code}>{text}</pre>
