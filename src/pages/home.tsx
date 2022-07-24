import { Button } from '../common/Button'
import { Code } from '../common/Code'
import { Item } from '../common/Item'
import { List } from '../components/List'

export const Home = (): React.ReactElement => {
  return (
    <main>
      <List>
        <Item>
          <Code text='<Button />' />
          <Button />
        </Item>
        <Item>
          <Code text='&:hover, &:focus' />
          <Button isHover />
        </Item>
      </List>
      <List>
        <Item>
          <Code text="<Button variant='outline' />" />
          <Button variant='outline' />
        </Item>
        <Item>
          <Code text='&:hover, &:focus' />
          <Button variant='outline' isHover />
        </Item>
      </List>
      <List>
        <Item>
          <Code text="<Button variant='text' />" />
          <Button variant='text' />
        </Item>
        <Item>
          <Code text='&:hover, &:focus' />
          <Button variant='text' isHover />
        </Item>
      </List>
      <List>
        <Item>
          <Code text='<Button disableShadow />' />
          <Button text='Disabled' disableShadow />
        </Item>
      </List>
      <List>
        <Item>
          <Code text='<Button disabled />' />
          <Button text='Disabled' disabled />
        </Item>
        <Item>
          <Code text="<Button variant='text' disabled />" />
          <Button variant='text' text='Disabled' disabled />
        </Item>
      </List>
      <List>
        <Item>
          <Code text="<Button startIcon='local_grocery_store' />" />
          <Button color='primary' text='Disabled' startIcon='local_grocery_store' />
        </Item>
        <Item>
          <Code text="<Button startIcon='local_grocery_store' />" />
          <Button color='primary' text='Disabled' endIcon='local_grocery_store' />
        </Item>
      </List>
      <List>
        <Item>
          <Code text="<Button size='sm' />" />
          <Button color='primary' size='sm' />
        </Item>
        <Item>
          <Code text="<Button size='md' />" />
          <Button color='primary' size='md' />
        </Item>
        <Item>
          <Code text="<Button size='lg' />" />
          <Button color='primary' size='lg' />
        </Item>
      </List>
      <List>
        <Item>
          <Code text="<Button color='default' />" />
          <Button color='default' />
        </Item>
        <Item>
          <Code text="<Button color='primary' />" />
          <Button color='primary' />
        </Item>
        <Item>
          <Code text="<Button color='secondary' />" />
          <Button color='secondary' />
        </Item>
        <Item>
          <Code text="<Button color='danger' />" />
          <Button color='danger' />
        </Item>
      </List>
      <List>
        <Item>
          <Code text='&:hover, &:focus' />
          <Button color='default' isHover />
        </Item>
        <Item>
          <Code text="<Button color='primary' />" />
          <Button color='primary' isHover />
        </Item>
        <Item>
          <Code text="<Button color='secondary' />" />
          <Button color='secondary' isHover />
        </Item>
        <Item>
          <Code text="<Button color='danger' />" />
          <Button color='danger' isHover />
        </Item>
      </List>
    </main>
  )
}
