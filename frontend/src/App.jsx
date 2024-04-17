import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ACCESSO from './pages/ACCESSO';
import DASHBOARD from './pages/DASHBOARD';
import EVENTI from './pages/EVENTI';
import EVENTO_NUOVO from './pages/EVENTO_NUOVO.jsx';
import EVENTO_ID from './pages/EVENTO_ID';
import GESTIONE_UTENTI from './pages/GESTIONE_UTENTI';
import SPESE_FISSE from './pages/SPESE_FISSE';
import SPESE_VARIABILI from './pages/SPESE_VARIABILI';
import STATISTICHE from './pages/STATISTICHE';
import TESSERE from './pages/TESSERE';

import NavMenu from './components/NavMenu.jsx';

function App({ location }) {

  const hideNavMenu = location.pathname === '/accesso';

  return (
    <>
      {!hideNavMenu && <NavMenu />}
      <Routes>
        <Route path="/accesso" element={<ACCESSO />} />
        <Route path="/" element={<DASHBOARD />} />
        <Route path="/eventi" element={<EVENTI />} />
        <Route path="/evento/:id" element={<EVENTO_ID />} />
        <Route path="/evento/nuovo" element={<EVENTO_NUOVO />} />
        <Route path="/gestione-utenti" element={<GESTIONE_UTENTI />} />
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