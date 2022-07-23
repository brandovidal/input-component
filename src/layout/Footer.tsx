interface Props {
  text?: string
}

export const Footer = ({ text = '' }: Props): React.ReactElement => (
  <footer>
    <p>{text}</p>
  </footer>
)
