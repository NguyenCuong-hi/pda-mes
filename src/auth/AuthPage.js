import { Route, Routes } from "react-router-dom"
import Login from "./login"

const AuthPage = () =>
(
    <Routes>
        <Route path='login' element={<Login />} />
    </Routes>
)

export default AuthPage