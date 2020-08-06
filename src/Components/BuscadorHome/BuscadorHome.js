import React, { useState, useContext } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './BuscadorHome.css'
import { Context } from '../../initialValues';

const BuscadorHome = () => {

    const [search, setSearch] = useState('');

    const { cambiarInput, cambiarPagina, dataSource, userData} = useContext(Context)


    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(search)
        if (search !== '') {
            console.log('se mando supuestamente')
            cambiarInput(search)
            cambiarPagina()
        } else {
            alert('Ingrese su busqueda')
        }
    }

    const handleKeyPress = (e) => {
        if( e.key === 'Enter'){
            handleSearch(e)
        }
    }

    return (
        <div className='buscador'>
                {console.log(dataSource)}
                {console.log(userData)}


            <div className="input-data">
                <input
                    required
                    type='text'
                    onChange={handleInput}
                    onKeyPress={handleKeyPress}/>
                <label onClick={(e) => handleSearch(e)}>
                    <i
                        className='fa fa-search'>
                    </i>
                </label>

            </div>
        </div>

    )
}


export default BuscadorHome