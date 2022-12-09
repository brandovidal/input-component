import styles from './index.module.css'

import { Props } from '../interfaces/Children'

import { Footer } from './Footer'
import { Header } from './Header'

import { layout } from '../constant/layout'

export const Layout = ({ children = '' }: Props): React.ReactElement => (
  <div className={styles.container}>
    <Header text={layout.header} />
    {children}
    <Footer text={layout.footer} />
  </div>
)
