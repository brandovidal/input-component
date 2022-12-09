import styles from './index.module.css'

import { Button } from '../../common/Button'
import { Code } from '../../common/Code'
import { Item } from '../../common/Item'
import { List } from '../../components/List'

import { data } from '../../constant/layout'

export const Home = (): React.ReactElement => {
  return (
    <main className={styles.main}>
      {
        data.map((data, index) => (
          <List key={index}>{data.list.map(({ code, button }, index) => (
            <Item key={index}>
              <Code text={code} />
              <Button {...button} />
            </Item>
          ))}
          </List>
        ))
      }
    </main>
  )
}
