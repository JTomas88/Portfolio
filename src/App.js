import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from "./store/appContext.js";
import './App.css';
import { Home } from './pages/Home.jsx';
import { Info } from './components/Info/Info.jsx';
import { Experiencia } from './components/Experiencia/Experiencia.jsx';
import { Formacion } from './components/Formación/Formación.jsx';
import { Conocimientos } from './components/Conocimientos/Conocimientos.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App-content">
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/sobremi" element={<Info />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/conocimientos" element={<Conocimientos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);


