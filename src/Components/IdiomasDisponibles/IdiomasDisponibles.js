import React, { useState, useContext, useEffect } from 'react'
import { AVAILABLE_LENGUAGES as Lenguajes, Context, ContextInterface } from '../../initialValues';
import Bandera from '../Bandera/Bandera'

import useComponentVisible from '../../Hooks/useComponentVisible'

import 'font-awesome/css/font-awesome.min.css'
import './IdiomasDisponibles.css'

const IdiomasDisponibles = () => {

    const { cambiarLenguaje, isInHome } = useContext(Context)
    const { lenguajeInterface, cambiarLenguajeInterface} = useContext(ContextInterface)
    const [claseContenedor, setClaseContenedor] = useState('contenedor-idiomas')


    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const idiomas = Object.keys(Lenguajes);

    const toggleIsVisible = () => {
        if(!isComponentVisible){

            setIsComponentVisible(!isComponentVisible)
        } else {
            toggleInvisible()
        }
    }

    const toggleInvisible = () => {
        setIsComponentVisible(false)
    }

    useEffect(() => {

        if(isComponentVisible){
            setClaseContenedor('contenedor-idiomas show')
        } else{
            setClaseContenedor('contenedor-idiomas')
        }
    }, [isComponentVisible])

    const handleLenguaje = (idioma) => {
        if(isInHome){
            cambiarLenguaje(idioma);
            cambiarLenguajeInterface(idioma);
            toggleIsVisible();
            toggleInvisible()
        } else {
            cambiarLenguajeInterface(idioma);
            toggleIsVisible();
            toggleInvisible()

        }
    }



    return (
        <nav className='nav-idiomas'>
            <div className='idioma' onClick={toggleIsVisible} ref={ref} > 
                    <Bandera lenguaje={lenguajeInterface} seleccionada={true}/>
                {Lenguajes[lenguajeInterface]}
                <span onClick={(toggleIsVisible)}  className="fa fa-caret-down"></span>
            </div>
            <div
             className={claseContenedor}
            >
                <ul className='menu-idiomas'>
                    {
                        idiomas.map((idioma, index) => {
                            if (idioma !== lenguajeInterface) {
                                return (
                                    <li
                                        key={index}
                                        className='idioma a-seleccionar'
                                        onClick={(e) => handleLenguaje(idioma)}>
                                        <Bandera 
                                        lenguaje={idioma}
                                        seleccionada={false}
                                        className='bandera-a-seleccionar'/>
                                        <p>{Lenguajes[idioma]}</p>
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