import React, { useContext, useState, useEffect } from 'react'
import Articulo from '../Articulo/Articulo'
import { StateContext, DispatchContext } from '../../App'
import { changeFirstTime, addResults, removeResults } from '../../Context/actions/contextDispatch'
import styles from './SendArticles.module.css'




const SendArticles = () => {

    const dispatch = useContext(DispatchContext)
    const { state } = useContext(StateContext)
    const { lenguajeInterface, firstInput, articulos, isInHome } = state
    const {results} = articulos
    const { idiomaInterface } = lenguajeInterface
    const { input, firstTime } = firstInput

    return (
        <div className={styles['articulos-container']}>
            <h1>
                articles
            </h1>

            <ul className={styles['listaArticulos']}>
                {
                    isInHome ?
                        (<h1>loading...</h1>) :
                        results.map((articulo, index) => {
                            return (
                                <li key={`${articulo.title} id:${index}`}>
                                    <Articulo articulo={articulo} />
                                </li>
                            )
                        })
                }
                {console.log(results)}
            </ul>
        </div>
    )

}

export default SendArticles



