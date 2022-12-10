import { Props as InputProps } from './Input'

export interface Props {
  list: List[]
}

export interface List {
  code: string
  input: InputProps
}
