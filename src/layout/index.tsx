import { Footer } from './Footer'
import { Header } from './Header'

interface Props {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Header title='Buttons' />
      {children}
      <Footer />
    </>
  )
}
