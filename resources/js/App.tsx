import { Route, Routes } from 'react-router'
import { AuthLayout } from './pages/auth/layout'
import { LoginPage } from './pages/auth/login'
import { DashboardPage } from './pages/dashboard'
import { DefaultLayout } from './pages/layout'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default App
