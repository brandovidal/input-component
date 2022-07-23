interface Props {
  children?: React.ReactNode
}

export const Item = ({ children = '' }: Props): React.ReactElement => <article className="item">{children}</article>
