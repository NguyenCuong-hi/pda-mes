
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthPage from './auth/AuthPage'
import Login from './auth/login'
import AuthLayout from './auth/AuthLayout'

const { PUBLIC_URL } = process.env
const AppRoutes = () => {
  <Routes>
    <Route element={<AuthLayout/>}>
      <Route path="login" element={<Login />}></Route>
    </Route>

  </Routes>
}

export { AppRoutes }