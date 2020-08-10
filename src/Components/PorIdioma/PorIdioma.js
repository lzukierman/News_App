import React, { useContext, useState, Fragment,useEffect } from 'react'
import { StateContext, DispatchContext } from '../../App'
import Bandera from '../Bandera/Bandera'
import ItemBusqueda from '../ItemBusqueda/ItemBusqueda'
import { removeIdioma, addIdioma, addAllIdioma, removeAllIdioma } from '../../Context/actions/contextDispatch'
import useComponentVisibleDos from '../../Hooks/useComponentVisibleDos'

import styles from './PorIdioma.module.css'



const Poridioma = () => {
    const { busqueda, state } = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const { idiomasDisponibles, idiomasSeleccionados } = busqueda.idioma
    const { idiomaInterface } = state.lenguajeInterface
    const [idiomaDefault, setIdiomaDefault] = useState(idiomaInterface)
    const [allSelected, setAllSelected] = useState(false)
    const { ref1, ref2, isComponentVisible, setIsComponentVisible } = useComponentVisibleDos(false);
    const [wrapper, setWrapper]= useState(styles.wrapper) 
    

    console.log(state)

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
        
        isComponentVisible ?
            setWrapper(`${styles.wrapper} ${styles.show}`) :  
            setWrapper(styles.wrapper)   
            
    }, [isComponentVisible])

    return (
        <Fragment>
            <nav className={styles.nav} >
                <div className={styles["drop-btn"]} onClick={toggleIsVisible} ref={ref2} >
                    <div>Por Idioma</div>
                    <span className="fa fa-caret-down"></span>
                </div>
                <div className={wrapper} ref={ref1}>
                    <ul className={styles['list-contenedor']}>
                        {/* <p>All</p>
            allSelected?
            handleRemoveAll :
            addAllIdioma */}
                        {
                            idiomasSeleccionados.map((idioma, index) => {
                                return (
                                    <li key={`${idioma} - ${index}`} className={styles["item-li"]}>
                                        <Bandera
                                            lenguaje={idioma.idioma}
                                            className={styles.bandera} />
                                        <ItemBusqueda
                                            seleccionado={idioma.seleccionado}
                                            itemName={idiomasDisponibles[idioma.idioma]}
                                            className={styles.idioma} />

                                    </li>)
                            })
                        }
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Poridioma