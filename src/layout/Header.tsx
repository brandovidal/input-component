interface Props {
  text?: string
}

export const Header = ({ text = '' }: Props): React.ReactElement => (
  <header>
    <h1>{text}</h1>
  </header>
)
