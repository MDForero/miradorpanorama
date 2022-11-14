
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import AboutUs from './pages/Aboutus';
import Home from './pages/Home';
import Services from './pages/Services';
import Glamping from './pages/servicios/Glamping';
import Restaurant from './pages/servicios/Restaurant';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<AboutUs />} />
          <Route path='servicios' element={<Services />} >
            <Route path='gampling' element={<Glamping />} />
            <Route path='restaurante' element={<Restaurant />} />
          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
