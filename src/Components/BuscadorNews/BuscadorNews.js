import React from 'react'

import './BuscadorNews.css'

const BuscadorNews = () => {

    return(
        <div className='buscador-news'>
        <div className="input-data-news">
            <input
                required
                type='text'
                />
            <label>
                <i
                    className='fa fa-search'>
                </i>
            </label>

        </div>
    </div>
    )
}

export default BuscadorNews