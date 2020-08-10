import React, { useState, useContext, useEffect } from 'react'
import Bandera from '../Bandera/Bandera'
import useComponentVisible from '../../Hooks/useComponentVisible'
import { addIdioma, changeInterface,removeAllIdioma } from '../../Context/actions/contextDispatch'
import { StateContext, DispatchContext } from '../../App'
import 'font-awesome/css/font-awesome.min.css'
import styles from './IdiomasDisponibles.module.css'





const IdiomasDisponibles = () => {

    const { state } = useContext(StateContext)
    const dispatch  = useContext(DispatchContext)
    const { isInHome, lenguajeInterface, firstInput } = state
    const { idiomasDisponibles, idiomaInterface } = lenguajeInterface
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [claseContenedor, setClaseContenedor] = useState(styles['contenedor-idiomas'])
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
            setClaseContenedor(`${styles['contenedor-idiomas']} ${styles.show}`)
        } else {
            setClaseContenedor(styles['contenedor-idiomas'])
        }
    }, [isComponentVisible])

    const handleLenguaje = (lenguaje) => {
            dispatch(changeInterface(lenguaje))
            toggleIsVisible();
            toggleInvisible()
    }



    return (
        <nav className={styles['nav-idiomas']}>
            <div className={styles.idioma} onClick={toggleIsVisible} ref={ref} >
                <Bandera
                    lenguaje={idiomaInterface}
                />

                {idiomasDisponibles[idiomaInterface]}
                <span onClick={(toggleIsVisible)} className="fa fa-caret-down"></span>
            </div>
            <div
                className={claseContenedor}
            >
                <ul className={styles['menu-idiomas']}>
                    {
                        idiomas.map((idioma, index) => {
                            if (idioma !== idiomaInterface) {
                                return (
                                    <li
                                        key={index}
                                        className={`${styles.idioma} ${styles['a-seleccionar']}`}
                                        onClick={(e) => handleLenguaje(idioma)}>
                                        <Bandera
                                            lenguaje={idioma}
                                            className={styles['bandera-a-seleccionar']} />
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

