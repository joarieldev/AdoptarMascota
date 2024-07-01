import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.tsx'
import { LoginProvider } from './contexts/LoginContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </UserProvider>
  </BrowserRouter>
)
