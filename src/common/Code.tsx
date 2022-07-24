interface Props {
  text?: string
}

export const Code = ({ text = '' }: Props): React.ReactElement => <pre>{text}</pre>
