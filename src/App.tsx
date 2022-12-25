import './styles/index.css'

import { Layout } from './layout'
import { Home } from './pages/Home'

function App (): React.ReactElement {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
