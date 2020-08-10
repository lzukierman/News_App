import React,{Fragment, useContext} from 'react'
import LogoImagen from '../../png/logo.png'
import { StateContext, DispatchContext } from '../../App'
import {goHome} from '../../Context/actions/contextDispatch'

import styles from './Logo.module.css'


const Logo = () => {

    const {isInHome} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    const handleClick = () => {
        if(!isInHome){
            dispatch(goHome())
        }
    }
    
    return(
        <Fragment>
            <img 
            onClick={handleClick}
            src={LogoImagen}
             alt='logo'
             className={styles.logo}/>
        </Fragment>
    )
}

export  default Logo