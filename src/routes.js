
import { BrowserRouter, Routes } from 'react-router-dom'

const {PUBLIC_URL} = process.env
const AppRoutes = () =>{
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes path='/'>

      </Routes>
    </BrowserRouter>
}

export {AppRoutes}