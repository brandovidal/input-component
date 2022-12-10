import styles from './index.module.css'

import { Props } from '../../interfaces/Label'

import classNames from 'classnames'

export const Label = ({ text = '', color = 'default' }: Props): React.ReactElement => <label className={classNames(styles.label, styles[color])}>{text}</label>
