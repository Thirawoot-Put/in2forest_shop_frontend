import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContextProvider from './features/auth/context/AuthContext'
import AdminContextProvider from './features/admin/contexts/AdminContext'
import UserContextProvider from './features/home/contexts/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <UserContextProvider>
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </UserContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
)
