import { Props as ButtonProps } from '../interfaces/Button'

export interface Props {
  list: List[]
}

export interface List {
  code: string
  button: ButtonProps
}
