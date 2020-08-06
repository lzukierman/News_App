import React from 'react';
import BuscadorNews from '../BuscadorNews/BuscadorNews';
import IdiomasDisponibles from '../IdiomasDisponibles/IdiomasDisponibles';
import BusquedaPersonalizada from '../BusquedaPersonalizada/BusquedaPersonalizada';
import Logo from '../Logo/Logo';
import './NavNewsPage.css'

const NavNewsPage = () => {
    return(
        <nav className='nav-newspage'>
            <Logo className='logo'/>
            <BuscadorNews className='buscador'/>
            <IdiomasDisponibles />
            <BusquedaPersonalizada className='busqueda'/>
        </nav>
    )
}

export default NavNewsPage