import React from 'react'
import BuscadorHome from '../BuscadorHome/BuscadorHome'
import IdiomasDisponibles from '../IdiomasDisponibles/IdiomasDisponibles'
import Carrousel from '../Carrousel/Carrousel'
import './Home.css'

const Home = () => {


   
      
    return (
        
        <div className='home-container'>
            <Carrousel>
                <IdiomasDisponibles/>
                <BuscadorHome/>
            </Carrousel>
        </div>
    )


}

export default Home