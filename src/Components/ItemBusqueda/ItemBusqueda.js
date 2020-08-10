import React, { Fragment, useContext, useEffect, useState } from 'react'
import { StateContext } from '../../App'

import 'font-awesome/css/font-awesome.min.css'

const ItemBusqueda = ({ seleccionado, itemName }) => {

    const [clase, setClase] = useState('')

    useEffect(() => {
        seleccionado ? setClase("ok") : setClase("juira")
    }, [seleccionado])

    return (
        <Fragment>
            <p>{itemName}</p>
            <label className={clase}>
                {
                    clase === "ok" ?
                        <i className="fa fa-check-circle"></i>
                        : <i className="fa fa-times-circle"></i>
                }
            </label>
        </Fragment>
    )
}
export default ItemBusqueda