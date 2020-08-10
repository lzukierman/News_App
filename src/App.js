import React, { useEffect, createContext, useReducer } from 'react';
import { defaultFuente, addDefaultFuente, addIdioma, changeInterface } from './Context/actions/contextDispatch'
import { initialState } from './Context/state/contextState'
import { reducer } from './Context/reducer/reducerState'
import Home from './Components/Home/Home'
import NewsPage from './Components/NewsPage/NewsPage'
import useFetch from './Hooks/useFetch'

import './App.css'

// Contexts 
export const StateContext = createContext()
export const DispatchContext = createContext()


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { busqueda } = state

  // Devuelve todas las fuentes de la API-NEWS
  const { fuente, idioma } = busqueda
  const { fuentesDisponibles } = fuente
  const { idiomasDisponibles } = idioma


  useEffect(() => {
    fetch(`https://newsapi.org/v2/sources?apiKey=${process.env.REACT_APP_KEY}`)
    .then(res => res.json())
    .then(data => dispatch(defaultFuente(data.sources)))
  }, [])

  useEffect(() => {
    if (fuentesDisponibles !== undefined) {
      dispatch(addDefaultFuente(fuentesDisponibles))
    }
  }, [fuentesDisponibles])

  useEffect(() => {
    async function fetchMe() {
      // Devuelve datos IP del cliente
      let userRes = await fetch(`https://ipinfo.io?token=${process.env.REACT_APP_KEY_IP}`)
      userRes = await userRes.json()

      // Devuelve los datos del pais
      let countryRes = await fetch(`https://restcountries.eu/rest/v2/alpha/${userRes.country}`)
      countryRes = await countryRes.json()

      return countryRes
    }


    ///CORREGIR RENDERIZADO CUANDO SE CLICKEA EL IDIOMA POR LAS APIS: SOURCE EN HOME Y NEWSAPI EN SENDARTICLES
    async function dispatchTime() {
      let res = await fetchMe()
      let userIdioma = res.languages[0].iso639_1
      let idiomas = Object.keys(idiomasDisponibles)
      if (idiomas.indexOf(userIdioma) !== -1) {
        dispatch(changeInterface(userIdioma));
      } else {
        dispatch(addIdioma("en"));
        dispatch(changeInterface("en"));
      }
    }

    dispatchTime()
  }, [idiomasDisponibles])



  return (
    <DispatchContext.Provider
      value={dispatch}>
      <StateContext.Provider
        value={{
          state,
          busqueda
        }}>
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
