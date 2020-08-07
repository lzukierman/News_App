import React, { useState, useContext, useEffect } from 'react'
import Bandera from '../Bandera/Bandera'
import useComponentVisible from '../../Hooks/useComponentVisible'
import { addIdioma, changeInterface,removeIdioma } from '../../Context/actions/contextDispatch'
import { StateContext, DispatchContext } from '../../App'
import 'font-awesome/css/font-awesome.min.css'
import './IdiomasDisponibles.css'





const IdiomasDisponibles = () => {

    const { state } = useContext(StateContext)
    const dispatch  = useContext(DispatchContext)
    const { isInHome, lenguajeInterface, firstInput } = state
    const { idiomasDisponibles, idiomaInterface } = lenguajeInterface
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [claseContenedor, setClaseContenedor] = useState('contenedor-idiomas')
    const [idioma, setIdioma] = useState("en")
    const idiomas = Object.keys(idiomasDisponibles)


  // tiene q ir a la par el interface e idioma,
  // y estar atento a cambios en el boton de idioma para actualizarlos y tambien el idioma seleccionado



    const toggleIsVisible = () => {
        if (!isComponentVisible) {
            setIsComponentVisible(!isComponentVisible)
        } else {
            toggleInvisible()
        }
    }

    const toggleInvisible = () => {
        setIsComponentVisible(false)
    }

    useEffect(() => {

        if (isComponentVisible) {
            setClaseContenedor('contenedor-idiomas show')
        } else {
            setClaseContenedor('contenedor-idiomas')
        }
    }, [isComponentVisible])

    const handleLenguaje = (lenguaje) => {
        if(firstInput.firstTime && isInHome){
                dispatch(removeIdioma(idioma))
                dispatch(addIdioma(lenguaje))
                dispatch(changeInterface(lenguaje))
                setIdioma(lenguaje)
                toggleIsVisible();
                toggleInvisible()
            } else {
                dispatch(changeInterface(lenguaje))
                toggleIsVisible();
                toggleInvisible()
            }
    }



    return (
        <nav className='nav-idiomas'>
            <div className='idioma' onClick={toggleIsVisible} ref={ref} >
                <Bandera
                    lenguaje={idiomaInterface}
                    seleccionada={true}
                />

                {idiomasDisponibles[idiomaInterface]}
                <span onClick={(toggleIsVisible)} className="fa fa-caret-down"></span>
            </div>
            <div
                className={claseContenedor}
            >
                <ul className='menu-idiomas'>
                    {
                        idiomas.map((idioma, index) => {
                            if (idioma !== idiomaInterface) {
                                return (
                                    <li
                                        key={index}
                                        className='idioma a-seleccionar'
                                        onClick={(e) => handleLenguaje(idioma)}>
                                        <Bandera
                                            lenguaje={idioma}
                                            seleccionada={false}
                                            className='bandera-a-seleccionar' />
                                        {<p> {idiomasDisponibles[idioma]}</p>}
                                    </li>
                                )
                            }
                            return null;
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default IdiomasDisponibles