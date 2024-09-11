import Aos from 'aos';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/saga-green/theme.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Page/Landing Page/LandingPage';

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
  )
}

export default App
