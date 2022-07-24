import { Props } from '../interfaces/Text'

export const Code = ({ text = '' }: Props): React.ReactElement => <pre>{text}</pre>
