import React, { useContext } from 'react';
import IdiomasDisponibles from '../IdiomasDisponibles/IdiomasDisponibles'
import { AVAILABLE_LENGUAGES as Lenguajes, Context } from '../../initialValues';


const SelectorIdioma = () => {
    const { lenguaje, cambiarLenguaje } = useContext(Context)

    const idiomas = Object.keys(Lenguajes);


    return (
        <div>

            <IdiomasDisponibles lenguajeActual={Lenguajes[lenguaje]}>
                {
                    idiomas.map((idioma,index) => {
                        if (idioma !== lenguaje) {
                            return (
                                <li 
                                key={index}
                                onClick={(e) => cambiarLenguaje(idioma)}>
                                    {Lenguajes[idioma]}
                                </li>
                            )
                        }
                        return null;
                    })
                }
            </IdiomasDisponibles>
        </div>

    )
}


export default SelectorIdioma