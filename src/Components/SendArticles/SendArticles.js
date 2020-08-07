import React, { useContext, useState, useEffect } from 'react'
import { key } from '../../initialValues'
import Articulo from '../Articulo/Articulo'
import { StateContext, DispatchContext } from '../../App'
import { changeFirstTime } from '../../Context/actions/contextDispatch'
import './SendArticles.css'




const SendArticles = () => {
    
    const dispatch = useContext(DispatchContext)
    const { state }= useContext(StateContext)
    const { lenguajeInterface, firstInput } = state
    const { idiomaInterface } = lenguajeInterface
    const { input, firstTime } = firstInput
    
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        if (firstTime) {

            fetch(`https://newsapi.org/v2/everything?q=${input}&language=${idiomaInterface}&apiKey=${key}`)
                .then(res => res.json())
                .then(data => {
                    setResults(data.articles)
                })

            dispatch(changeFirstTime())
            setIsLoading(false);
        }

    }, [firstTime, dispatch, idiomaInterface, input])

    return (
        <div className='articulos-container'>
            <h1>
                articles
            </h1>

            <ul className='listaArticulos'>
                {
                    // {
                    //     status: 'ok',
                    //     totalResults: 63,
                    //     articles: [{}]
                    // }
                    isLoading ?
                        console.log('loading') :
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



