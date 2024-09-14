import Aos from 'aos';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/saga-green/theme.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './Page/Account/Account';
import Company from './Page/Company/Company';
import LandingPage from './Page/Landing Page/LandingPage';
import Products from './Page/Products/Products';

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products/foryou' element={<Products/>}/>
        <Route path='/profile' element={<Account/>}/>
        <Route path='/company' element={<Company/>}/>
      </Routes>
  )
}

export default App
