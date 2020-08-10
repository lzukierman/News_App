import React, { useState, useContext } from 'react'
import { DispatchContext, StateContext } from '../../App'
import { changeFirstTime, changeFirstInput, leaveHome,addResults,addTotalResults, addIdioma } from '../../Context/actions/contextDispatch'


import 'font-awesome/css/font-awesome.min.css'
import styles from './BuscadorHome.module.css'




const BuscadorHome = () => {
    const dispatch = useContext(DispatchContext)
    const {state} = useContext(StateContext)
    const { lenguajeInterface, firstInput} = state
    const {input, firstTime} = firstInput
    const {idiomaInterface} = lenguajeInterface

    const [search, setSearch] = useState('');


    const firstSearch = () => {
        fetch(`https://newsapi.org/v2/everything?q=${search}&language=${idiomaInterface}&apiKey=${process.env.REACT_APP_KEY}`)
            .then(res => res.json())
            .then(data => {
                dispatch(addResults(data.articles))
                dispatch(addTotalResults(data.totalResults))
                dispatch(changeFirstTime());
            })
    }
    

    const handleInput = (e) => {
        let inputValue = e.target.value
        setSearch(inputValue);
    }


    const initSearch = (search) => {
        if(firstTime){
            dispatch(changeFirstInput(search))
            dispatch(leaveHome())
            firstSearch()
            dispatch(addIdioma(idiomaInterface))
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (search !== '') {
            initSearch(search)
        } else {
            alert('Ingrese su busqueda')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e)
        }
    }

    return (
        <div className={styles.buscador}>
            <div className={styles["input-data"]}>
                <input
                    required
                    type={styles.text}
                    onChange={handleInput}
                    onKeyPress={handleKeyPress} />
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