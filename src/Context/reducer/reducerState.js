// https://stackoverflow.com/questions/57296549/hooks-combine-multiple-reducers-when-using-usereducer

import {
    // HOME
    GO_HOME, LEAVE_HOME,
    // INTERFACE
    CHANGE_INTERFACE,
    // IDIOMA
    ADD_IDIOMA, REMOVE_IDIOMA, ADD_ALL_IDIOMA,REMOVE_ALL_IDIOMA,
    // PAIS
    ADD_PAIS, REMOVE_PAIS, ADD_ALL_PAIS,
    REMOVE_ALL_PAIS,
    // REGION
    ADD_REGION, REMOVE_REGION,
    ADD_ALL_REGION, REMOVE_ALL_REGION,
    // FUENTE
    DEFAULT_FUENTE, ADD_DEFAULT_FUENTE, ADD_FUENTE, REMOVE_FUENTE,
    ADD_ALL_FUENTE, REMOVE_ALL_FUENTE,
    // CATEGORIA
    ADD_CATEGORIA, REMOVE_CATEGORIA, ADD_ALL_CATEGORIA, REMOVE_ALL_CATEGORIA,
    // FIRST INPUT
    CHANGE_FIRST_INPUT,
    // URL
    CHANGE_URL, DEFAULT_FUENTE
} from '../actions/contextDispatch'







export const reducer = (state, action) => {
    switch (action.type) {

        // HOME
        case GO_HOME:
            return {
                ...state,
                isInHome = true
            }

        case LEAVE_HOME:
            return {
                ...state,
                isInHome = false
            }

        // INTERFACE
        case CHANGE_INTERFACE:
            return {
                ...state,
                lenguajeInterface: {
                    ...lenguajeInterface,
                    idiomaInterface: action.payload.idioma
                }
            }

        // IDIOMA
        case ADD_IDIOMA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    idioma: {
                        ...idioma,
                       idiomasSeleccionados:idiomasSeleccionados
                            .map(idioma => {
                                if (idioma.idioma === action.payload.idioma) {
                                    return {
                                        ...idioma,
                                        seleccionado: true
                                    }
                                }
                            })
                    }
                }
            }

        case REMOVE_IDIOMA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    idioma: {
                        ...idioma,
                        idiomasSeleccionados: idiomasSeleccionados
                            .map(idioma => {
                                if (idioma.idioma === action.payload.idioma) {
                                    return {
                                        ...idioma,
                                        seleccionado: false
                                    }
                                }
                            })
                    }
                }
            }

        case ADD_ALL_IDIOMA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    idioma: {
                        ...idioma,
                        idiomasSeleccionados: idiomasSeleccionados
                            .map(idioma => ({ ...idioma, seleccionado: true }))
                    }
                }
            }

        case REMOVE_ALL_IDIOMA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    idioma: {
                        ...idioma,
                        idiomasSeleccionados: idiomasSeleccionados
                            .map(idioma => ({ ...idioma, seleccionado: false }))
                    }
                }
            }

        //////PAIS
        case ADD_PAIS:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    pais: {
                        ...pais,
                        paisesSeleccionados: paisesSeleccionados
                            .map(pais => {
                                if (pais.pais === action.payload.pais) {
                                    return {
                                        ...pais,
                                        seleccionado: true
                                    }
                                }
                            })
                    }
                }
            }

        case REMOVE_PAIS:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    pais: {
                        ...pais,
                        paisesSeleccionados: paisesSeleccionados
                            .map(pais => {
                                if (pais.pais === action.payload.pais) {
                                    return {
                                        ...pais,
                                        seleccionado: false
                                    }
                                }
                            })
                    }
                }
            }

        case ADD_ALL_PAIS:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    pais: {
                        ...pais,
                        paisesSeleccionados: paisesSeleccionados
                            .map(pais => ({ ...pais, seleccionado: true }))
                    }
                }
            }

        case REMOVE_ALL_PAIS:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    pais: {
                        ...pais,
                        paisesSeleccionados: paisesSeleccionados
                            .map(pais => ({ ...pais, seleccionado: false }))
                    }
                }
            }

        //////REGION

        case ADD_REGION:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    region: {
                        ...region,
                        regionesSeleccionadas: regionesSeleccionadas
                            .map(region => {
                                if (region.region === action.payload.region) {
                                    return {
                                        ...region,
                                        seleccionado: true
                                    }
                                }
                            })
                    }
                }
            }

        case REMOVE_REGION:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    region: {
                        ...region,
                        regionesSeleccionadas: regionesSeleccionadas
                            .map(region => {
                                if (region.region === action.payload.region) {
                                    return {
                                        ...region,
                                        seleccionado: false
                                    }
                                }
                            })
                    }
                }
            }

        case ADD_ALL_REGION:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    region: {
                        ...region,
                        regionesSeleccionadas: regionesSeleccionadas
                            .map(region => ({ ...region, seleccionado: true }))
                    }
                }
            }


        case REMOVE_ALL_REGION:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    region: {
                        ...region,
                        regionesSeleccionadas: regionesSeleccionadas
                            .map(region => ({ ...region, seleccionado: false }))
                    }
                }
            }

        ////////FUENTE

        case DEFAULT_FUENTE:
        return {
            ...state,
            busqueda: {
                ...busqueda,
                fuente: {
                    ...fuente,
                    fuentesDisponibles: action.payload.listObj
                }
            }
        }

        case ADD_DEFAULT_FUENTE:
        return {
            ...state,
            busqueda: {
                ...busqueda,
                fuente: {
                    ...fuente,
                    fuentesSeleccionadas: 
                    action.payload.listObj.map(fuente =>{
                        return{
                            fuente: fuente.name,
                            seleccionado: false
                        }
                    })
                }
            }
        }
        
        case ADD_FUENTE:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    fuente: {
                        ...fuente,
                        fuentesSeleccionadas: fuentesSeleccionadas
                            .map(fuente => {
                                if (fuente.fuente === action.payload.fuente) {
                                    return {
                                        ...fuente,
                                        seleccionado: true
                                    }
                                }
                            })
                    }
                }
            }

        case REMOVE_FUENTE:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    fuente: {
                        ...fuente,
                        fuentesSeleccionadas: fuentesSeleccionadas
                            .map(fuente => {
                                if (fuente.fuente === action.payload.fuente) {
                                    return {
                                        ...fuente,
                                        seleccionado: false
                                    }
                                }
                            })
                    }
                }
            }

        case ADD_ALL_FUENTE:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    fuente: {
                        ...fuente,
                        fuentesSeleccionadas: fuentesSeleccionadas
                            .map(fuente => ({ ...fuente, seleccionado: true }))
                    }
                }
            }

        case REMOVE_ALL_FUENTE:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    fuente: {
                        ...fuente,
                        fuentesSeleccionadas: fuentesSeleccionadas
                            .map(fuente => ({ ...fuente, seleccionado: false }))
                    }
                }
            }


        ////CATEGORIA

        case ADD_CATEGORIA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    categoria: {
                        ...categoria,
                        categoriasSeleccionadas: categoriasSeleccionadas
                            .map(categoria => {
                                if (categoria.categoria === action.payload.categoria) {
                                    return {
                                        ...categoria,
                                        seleccionado: true
                                    }
                                }
                            })
                    }
                }
            }

        case REMOVE_CATEGORIA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    categoria: {
                        ...categoria,
                        categoriasSeleccionadas: categoriasSeleccionadas
                            .map(categoria => {
                                if (categoria.categoria === action.payload.categoria) {
                                    return {
                                        ...categoria,
                                        seleccionado: false
                                    }
                                }
                            })
                    }
                }
            }

        case ADD_ALL_CATEGORIA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    categoria: {
                        ...categoria,
                        categoriasSeleccionadas: categoriasSeleccionadas
                            .map(categoria => ({ ...categoria, seleccionado: true }))
                    }
                }
            }

        case REMOVE_ALL_CATEGORIA:
            return {
                ...state,
                busqueda: {
                    ...busqueda,
                    categoria: {
                        ...categoria,
                        categoriasSeleccionadas: categoriasSeleccionadas
                            .map(categoria => ({ ...categoria, seleccionado: false }))
                    }
                }
            }


        // FIRST INPUT

        case CHANGE_FIRST_INPUT:
            return {
                ...state,
                firstInput : action.payload.url
            }

        // URL
        case CHANGE_URL:
            return {
                ...state,
                url: action.payload.url
            }


            
        // ACA TERMINA SWITCH
    }
    // ACA TERMINA REDUCER
}



