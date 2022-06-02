//COMPONENTS
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
//CONTEXTS
import { UserContextFunction } from './contexts/UserContext'

function App() {
  return (
    <UserContextFunction>
      <Header />
      <Main />
    </UserContextFunction>
  )
}

export default App
