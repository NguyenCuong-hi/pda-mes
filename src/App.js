import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AppRoutes } from './routes';
import Login from './auth/login';
import AuthLayout from './auth/AuthLayout';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
