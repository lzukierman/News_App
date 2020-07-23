import React,{useState,useContext, useEffect} from 'react'
import useFetch from '../../Hooks/useFetch'
import {Context, key} from '../../initialValues'


const SendArticles = ({inputValue}) => {

    
    const {lenguaje} = useContext(Context)

   const [articles, isLoading] = useFetch(`https://newsapi.org/v2/everything?q=${inputValue}&language=${lenguaje}&apiKey=${key}`, {})
  
    return( 
        <div>
            <h1>
                articles
            </h1>

            
            {isLoading ?
            console.log('loading') :
            console.log(articles)
            }
        
        </div>
    )

}

export default SendArticles

