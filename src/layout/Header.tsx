import { Props } from '../interfaces/Text'

export const Header = ({ text = '' }: Props): React.ReactElement => (
  <header>
    <h1>{text}</h1>
  </header>
)
