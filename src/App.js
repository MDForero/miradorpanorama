import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import AboutUs from './pages/Aboutus';
import Home from './pages/Home';
import Services from './pages/Services';
import Glamping from './pages/servicios/Glamping';
import Restaurant from './pages/servicios/Restaurant';
import Menu from './pages/servicios/restaurant/Menu';
import Reservas from './pages/servicios/reservas/Reservas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='glamping' element={<Glamping />}>
          <Route path='reservas' element={<Reservas/>}/>
        </Route>
        <Route path='restaurante' element={<Restaurant />}>
          <Route path='menu' element={<Menu/>}/>
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<AboutUs />}/>
          <Route path='servicios' element={<Services />}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
