import React from 'react'
import SendArticles from '../SendArticles/SendArticles'
import NavNewsPage from '../NavNewsPage/NavNewsPage'

const NewsPage = () => {    
    return(
        <div>
            <NavNewsPage />
            <SendArticles/> 
        </div>
    )
}

export default NewsPage