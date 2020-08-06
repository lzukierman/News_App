import React,{useContext}from 'react'
import { AVAILABLE_LENGUAGES as Lenguajes, Context} from '../../initialValues';


const Poridioma = () => {
    const {cambiarLenguaje} = useContext(Context)
    const idiomas = Object.keys(Lenguajes);

    return (
        <div>
            Poridioma
        </div>
    )
}

export default Poridioma