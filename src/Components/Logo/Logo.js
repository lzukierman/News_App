import React,{Fragment, useContext} from 'react'
import LogoImagen from '../../png/logo.png'
import { Context } from '../../initialValues'
import './Logo.css'


const Logo = () => {

    const { isInHome, cambiarPagina} = useContext(Context)

    const handleClick = () => {
        if(!isInHome){
            cambiarPagina()
        }
    }
    
    return(
        <Fragment>
            <img 
            onClick={handleClick}
            src={LogoImagen}
             alt='logo'
             className='logo'/>
        </Fragment>
    )
}

export  default Logo