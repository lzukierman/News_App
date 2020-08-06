import React, { useState, useEffect } from 'react';
import { Context, ContextInterface, ContextBusquedaPersonalizada, key, keyIp, AVAILABLE_LENGUAGES as Languages } from './initialValues'
import Home from './Components/Home/Home'
import NewsPage from './Components/NewsPage/NewsPage'
import useFetch from './Hooks/useFetch'



import './App.css'



function App() {
  const [lenguaje, setLenguaje] = useState('en');
  const [isInHome, setIsInHome] = useState(true);
  const [firstInput, setFirstInput] = useState('');
  const [url, setUrl] = useState('')
  const [lenguajeInterface, setLenguajeInterface] = useState('en')
  const [idiomaCliente, setIdiomaCliente] = useState(true)

  const idiomas = Object.keys(Languages);

  const cambiarLenguaje = nuevoIdioma => setLenguaje(nuevoIdioma);
  const cambiarPagina = () => setIsInHome(!isInHome);
  const cambiarInput = input => setFirstInput(input);
  const cambiarLenguajeInterface = nuevoIdioma => setLenguajeInterface(nuevoIdioma);

  // Devuelve datos IP del cliente
  const [userData] = useFetch(`https://ipinfo.io?token=${keyIp}`)

  // Devuelve pais del cliente
  const [dataCountry] = useFetch(`https://restcountries.eu/rest/v2/alpha/${userData.country}`)



  // Devuelve todas las fuentes de la API-NEWS
  const [dataSource] = useFetch(`https://newsapi.org/v2/sources?apiKey=${key}`)



  useEffect(() => {
    if (idiomaCliente) {
      if (dataCountry.languages !== undefined) {
        let userIdioma = dataCountry.languages[0].iso639_1
        let idiomaDisponible = idiomas.indexOf(userIdioma)
        if (idiomaDisponible !== -1) {
          cambiarLenguajeInterface(userIdioma);
          cambiarLenguaje(userIdioma);
          setIdiomaCliente(false)
        }
      }
      else {
        cambiarLenguajeInterface("en");
        cambiarLenguaje("en");
      }
    }
  }, [dataCountry, dataSource, userData, idiomas, idiomaCliente])


  return (
    <ContextInterface.Provider
      value={
        {
          lenguajeInterface,
          cambiarLenguajeInterface
        }
      }>
      <Context.Provider
        value={
          {
            lenguaje,
            cambiarLenguaje,
            isInHome,
            cambiarPagina,
            firstInput,
            cambiarInput,
            url,
            setUrl,
            dataSource,
            userData,
          }
        }>
        {
          isInHome ?
            (<Home />) :
            (<ContextBusquedaPersonalizada.Provider
            value={
              {
                
              }
            }>
              <NewsPage />
            </ContextBusquedaPersonalizada.Provider>)
        }
      </Context.Provider>
    </ContextInterface.Provider>
  );
}

export default App;
