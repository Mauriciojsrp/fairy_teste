import './App.css'
import { AuthProvider } from './context/AuthContext'
import RoutesProject from './Routes'

function App() {

  return (
  <AuthProvider>
    <RoutesProject />
  </AuthProvider>
  )
}

export default App
