// import React, { useContext, useState, Fragment } from 'react'
// import { StateContext, DispatchContext } from '../../App'
// import ItemBusqueda from '../ItemBusqueda/ItemBusqueda';

// import styles from './PorPais.module.css'



// const PorPais = () => {


// const { busqueda, state } = useContext(StateContext)
// const dispatch = useContext(DispatchContext)


// const { paisesDisponibles, paisesSeleccionados } = busqueda.pais

// return (
//         <Fragment>
//             <nav className="nav">
//                 <div className='drop-btn'>
//                     <div>Pais</div>
//                     <span className="fa fa-caret-down"></span>
//                 </div>
//                 <div className="wrapper">
//                     <ul className="menu-bar">
//                         {
//                             paisesSeleccionados.map((pais, index) => {
//                                 return (
//                                     <li key={`${pais} - ${index}`}>
//                                         <div className='bandera'>
//                                             BanderaPaises
//                         </div>
//                                         <ItemBusqueda
//                                             seleccionado={pais.seleccionado}
//                                             itemName={paisesDisponibles[0]}
//                                             className='pais' />
//                                     </li>)
//                             })


//                         }
//                     </ul>
//                     <div />
//                 </div>
//             </nav>
//         </Fragment>

//     )
// }

// export default PorPais


