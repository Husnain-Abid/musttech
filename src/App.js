import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Common.css';
import Home from './page/Home/Home';
import Pricing from './page/Pricing/Pricing';
import Portfolio from './page/Portfolio/Portfolio';
import Contact from './page/Contact/Contact';
import Service from './page/Service/Service';
import About from './page/About/About';
import ServiceDetail from './page/ServiceDetail/ServiceDetail';

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Service />} />
        
        <Route path='/service-detail/:slug' element={<ServiceDetail />} />

        <Route path='/about' element={<About />} />
    
      </Routes>

    </>
  );
}

export default App;
