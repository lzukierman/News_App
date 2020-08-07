import React, { useState, useContext } from 'react'
import { DispatchContext } from '../../App'
import {changeFirstInput, leaveHome} from '../../Context/actions/contextDispatch'
import 'font-awesome/css/font-awesome.min.css'
import './BuscadorHome.css'
const BuscadorHome = () => {


    const dispatch = useContext(DispatchContext)
    const [search, setSearch] = useState('');




    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (search !== '') {
            dispatch(changeFirstInput(search))
            dispatch(leaveHome())
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