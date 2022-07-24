import { Props } from '../interfaces/Text'

export const Footer = ({ text = '' }: Props): React.ReactElement => (
  <footer>
    <p>{text}</p>
  </footer>
)
