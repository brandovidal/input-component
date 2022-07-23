interface Props {
  text?: String
}

export const Code = ({ text = '' }: Props): React.ReactElement => <pre>{text}</pre>
