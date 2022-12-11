import styles from './index.module.css'

import { Code } from '../../common/Code'
import { Item } from '../../common/Item'

import { List } from '../../components/List'
import { ControlInput } from '../../components/ControlInput'

import { data } from '../../constant/data'

export const Home = (): React.ReactElement => {
  return (
    <main className={styles.main}>
      {
        data.map((data, index) => (
          <List key={index}>{data.list.map(({ code, input }, index) => (
            <Item key={index}>
              <Code text={code} />
              <ControlInput {...input} />
            </Item>
          ))}
          </List>
        ))
      }
    </main>
  )
}
