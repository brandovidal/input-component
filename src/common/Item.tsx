import { Props } from '../interfaces/Children'

export const Item = ({ children = '' }: Props): React.ReactElement => <article className="item">{children}</article>
