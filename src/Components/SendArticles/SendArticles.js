import React,{useContext} from 'react'
import useFetch from '../../Hooks/useFetch'
import {Context, key} from '../../initialValues'
import  Articulo from '../Articulo/Articulo'


import './SendArticles.css'

const SendArticles = () => {
    
    
    const {lenguaje, firstInput} = useContext(Context)

   const [results, isLoading] = useFetch(`https://newsapi.org/v2/everything?q=${firstInput}&language=${lenguaje}&apiKey=${key}`, {})
  
    return( 
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
            results.articles.map((articulo,index) => {
                return(
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



 