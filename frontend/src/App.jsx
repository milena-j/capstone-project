import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EVENTI from './pages/EVENTI';
import EVENTO_ID from './pages/EVENTO_ID';
import GESTIONE_UTENTI from './pages/GESTIONE_UTENTI';
import LOGIN from './pages/LOGIN';
import SPESE_FISSE from './pages/SPESE_FISSE';
import SPESE_VARIABILI from './pages/SPESE_VARIABILI';
import STATISTICHE from './pages/STATISTICHE';
import TESSERE from './pages/TESSERE';

import NavMenu from './components/NavMenu.jsx';

function App({ location }) {

  const hideNavBar = location.pathname === '/login';

  return (
    <>
      {!hideNavBar && <NavMenu />}
      <Routes>
        <Route path="/" element={<EVENTI />} />
        <Route path="/evento/:id" element={<EVENTO_ID />} />
        <Route path="/gestione-utenti" element={<GESTIONE_UTENTI />} />
        <Route path="/login" element={<LOGIN />} />
        <Route path="/spese-fisse" element={<SPESE_FISSE />} />
        <Route path="/spese-variabili" element={<SPESE_VARIABILI />} />
        <Route path="/statistiche" element={<STATISTICHE />} />
        <Route path="/tessere" element={<TESSERE />} />
      </Routes>
    </>
  );
}

export default function AppWithRouter() {
  const location = window.location;

  return (
    <BrowserRouter>
      <App location={location} />
    </BrowserRouter>
  );
}