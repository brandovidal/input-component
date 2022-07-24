interface Props {
  children?: React.ReactNode
}

export const List = ({ children = '' }: Props): React.ReactElement => <section className='list'>{children}</section>
