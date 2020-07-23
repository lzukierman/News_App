import React, { useState } from 'react'


const IdiomasDisponibles = ({ lenguajeActual, children }) => {

    const [dropDown, setDropDown] = useState(false)

    const toggleDrop = () => setDropDown(!dropDown)

    return (
        <div>
            <button onClick={toggleDrop}>{lenguajeActual}</button>
            <ul onClick={toggleDrop}>
                {dropDown && children}
            </ul>
        </div>
    )

}

export default IdiomasDisponibles