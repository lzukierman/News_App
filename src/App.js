import React, { useState, useEffect, createContext, useReducer } from 'react';
import { defaultFuente, addDefaultFuente, addIdioma, changeInterface } from './Context/actions/contextDispatch'
import { key, keyIp } from './initialValues'
import {initialState} from './Context/state/contextState'
import {reducer} from './Context/reducer/reducerState'
import Home from './Components/Home/Home'
import NewsPage from './Components/NewsPage/NewsPage'
import useFetch from './Hooks/useFetch'


import './App.css'



function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
  
  const StateContext = createContext()
  const DispatchContext = createContext()
  

   // Devuelve datos IP del cliente
  const [userData] = useFetch(`https://ipinfo.io?token=${keyIp}`)

  // Devuelve todas las fuentes de la API-NEWS
  const [dataSource] = useFetch(`https://newsapi.org/v2/sources?apiKey=${key}`)


  useEffect(() => {
    dispatch(defaultFuente(dataSource.sources))
  }, [dataSource])

  useEffect(() => {
    dispatch(addDefaultFuente(state.busqueda.fuente.fuentesDisponibles))
  }, [state.busqueda.fuente.fuentesDisponibles])

  useEffect(() => {
     fetch(`https://restcountries.eu/rest/v2/alpha/${userData.country}`)
     .then(data => data.json())
     .then(res => {
        let userIdioma = res.languages[0].iso639_1
        let idiomas = Object.keys(state.busqueda.idioma.idiomasDisponibles)
        if(idiomas.indexOf(userIdioma) !== -1){
          dispatch(addIdioma(userIdioma));
          dispatch(changeInterface(userIdioma));
        } else {
          dispatch(addIdioma("en"));
          dispatch(changeInterface("en"));
        }
     })
  }, [userData])



  return (
    <DispatchContext.Provider
      value={ dispatch }>
      <StateContext.Provider
        value={state}>
        {
          state.isInHome ?
            (<Home />) :
            (<NewsPage />)
        }
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
