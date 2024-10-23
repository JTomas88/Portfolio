import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from "./store/appContext.js";
import './App.css';
import { Home } from './pages/Home.jsx';
import { Info } from './components/Info/Info.jsx';
import { Experiencia } from './components/Experiencia/Experiencia.jsx';
import { Formacion } from './components/Formación/Formación.jsx';
import { Conocimientos } from './components/Conocimientos/Conocimientos.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobremi' element={<Info />} />
          <Route path='/experiencia' element={<Experiencia />} />
          <Route path='/formacion' element={<Formacion />} />
          <Route path='/conocimientos' element={<Conocimientos />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);


