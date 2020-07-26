import React, { useState } from 'react';
import Buscador from './Components/Buscador/Buscador'
import SelectorIdioma from './Components/SelectorIdioma/SelectorIdioma'
import { Context } from './initialValues'

import './App.css'




function App() {
  const [lenguaje, setLenguaje] = useState("es");

  const cambiarLenguaje = nuevoIdioma => setLenguaje(nuevoIdioma);

  return (
    <Context.Provider value={{ lenguaje, cambiarLenguaje }}>
      <SelectorIdioma />
      <Buscador />
    </Context.Provider>
  );
}

export default App;
