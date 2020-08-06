import React from 'react';
import './BusquedaPersonalizada.css'

const BusquedaPersonalizada = () => {

    return(
        <div className='wraper'>
            <ul className='lista'>
            <li className='item'>
                Por Idioma
            </li>
            <li className='item'>
                Por Pais
            </li>
            <li className='item'>
                Por Region
            </li>
            <li className='item'>
                Elegi tus medios
            </li>
            <li className='item'>
                Por Categorias
            </li>
            <li className='item' >
                Por Fecha
            </li>
            </ul>
        </div>
    )
}

export default BusquedaPersonalizada