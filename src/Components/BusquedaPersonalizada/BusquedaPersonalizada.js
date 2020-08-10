import React from 'react';
import PorIdioma from '../PorIdioma/PorIdioma'
// import PorPais from '../PorPais/PorPais'

import styles from './BusquedaPersonalizada.module.css'

const BusquedaPersonalizada = () => {

    return(
        <div className={styles.wraper}>
            <ul className={styles.lista}>
            <li className={styles.item}>
                <PorIdioma/>
            </li>
            <li className={styles.item}>
                Por Pais
                {/* <PorPais/> */}
            </li>
            <li className={styles.item}>
                Por Region
            </li>
            <li className={styles.item}>
                Elegi tus medios
            </li>
            <li className={styles.item}>
                Por Categorias
            </li>
            <li className={styles.item} >
                Por Fecha
            </li>
            </ul>
        </div>
    )
}

export default BusquedaPersonalizada