import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContextProvider from './features/auth/context/AuthContext'
import AdminContextProvider from './features/admin/contexts/AdminContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
)
