import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './auth/layout';
import SideBar from './sidebar/sidebar';
import AuthPage from './auth/AuthPage';
import PrivateRouter from './routing/privateRouters';
import MainLayout from './components/layout/mainlayout';


const { PUBLIC_URL } = process.env

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>               
        <Route element={<AuthLayout />}>
          <Route path='auth/*' element={<AuthPage />} />

        </Route>

        <Route path='home/*' element={<SideBar />} >
          <Route element={<MainLayout />}>
            <Route path = 'menu/*'  element={<PrivateRouter />} />
          </Route>
        </Route>




      </Routes>
    </BrowserRouter>


  );
}

export default App;
