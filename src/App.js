import React, { useState, useEffect, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import {Routes,  Route, useLocation} from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      
    
      <Routes>
        <Route path="*" element={<Home/>} exact />
        <Route path="/About" element={<About/>}  />
        <Route path="/Homes" element={<Homes/>}  />
        <Route path="/Rentals" element={<Rentals/>}  />
        <Route path="/Contact" element={<Contact/>}  />
        </Routes>
       
     
        <Footer />
   
    </>
  );
  }

export default App;
