import { Props } from '../interfaces/Children'

import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children = '' }: Props): React.ReactElement => (
  <div className='container'>
    <Header text='Buttons' />
    {children}
    <Footer text='created by @brandovidal - devChallenges.io' />
  </div>
)
