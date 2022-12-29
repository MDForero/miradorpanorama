import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import AboutUs from './pages/Aboutus';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path="nosotros" element={<AboutUs />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
