import React from 'react';
import BuscadorNews from '../BuscadorNews/BuscadorNews';
import IdiomasDisponibles from '../IdiomasDisponibles/IdiomasDisponibles';
import BusquedaPersonalizada from '../BusquedaPersonalizada/BusquedaPersonalizada';
import Logo from '../Logo/Logo';
import styles from './NavNewsPage.module.css'

const NavNewsPage = () => {
    return(
        <nav className={styles['nav-newspage']}>
            <Logo className={styles.logo}/>
            <BuscadorNews className={styles.buscador}/>
            <IdiomasDisponibles />
            <BusquedaPersonalizada className={styles.busqueda}/>
        </nav>
    )
}

export default NavNewsPage