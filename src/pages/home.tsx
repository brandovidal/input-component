import { Button } from '../common/Button'
import { Code } from '../common/Code'
import { Item } from '../common/Item'
import { List } from '../components/List'

export const Home = (): React.ReactElement => {
  return (
    <main>
      <List>
        <Item>
          <Code text="<Button />" />
          <Button />
        </Item>
        <Item>
          <Code text="&:hover, &:focus" />
          <Button isHover />
        </Item>
      </List>
      <List>
        <Item>
          <Code text="<Button variant='outline' />" />
          <Button variant='outline' />
        </Item>
        <Item>
          <Code text="&:hover, &:focus" />
          <Button variant='outline' isHover />
        </Item>
      </List>
      <List>
        <Item>
          <Code text="<Button variant='text' />" />
          <Button variant='text' />
        </Item>
        <Item>
          <Code text="&:hover, &:focus" />
          <Button variant='text' isHover />
        </Item>
      </List>
    </main>
  )
}
