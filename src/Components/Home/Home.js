import React from 'react'
import BuscadorHome from '../BuscadorHome/BuscadorHome'
import IdiomasDisponibles from '../IdiomasDisponibles/IdiomasDisponibles'
import Carrousel from '../Carrousel/Carrousel'
import styles from './Home.module.css'

const Home = () => {


   
      
    return (
        
        <div className={styles['home-container']}>
            <Carrousel>
                <IdiomasDisponibles/>
                <BuscadorHome/>
            </Carrousel>
        </div>
    )


}

export default Home