interface Props {
  text?: string
}

export const Footer = ({ text = 'copy' }: Props): React.ReactElement => {
  return (
    <footer>
      <p>{text}</p>
    </footer>
  )
}
