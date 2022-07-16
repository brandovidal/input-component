import './index.css'

interface Props {
  title?: string
}

export const Header = ({ title = '' }: Props): React.ReactElement => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}
