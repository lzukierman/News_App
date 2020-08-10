import React from 'react'

import styles from './BuscadorNews.module.css'

const BuscadorNews = () => {

    return(
        <div className={styles['buscador-news']}>
        <div className={styles['input-data-news']}>
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