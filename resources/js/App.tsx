import { Route, Routes } from 'react-router'
import { AuthLayout } from './pages/auth/layout'
import { LoginPage } from './pages/auth/login'
import { DashboardPage } from './pages/dashboard'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
