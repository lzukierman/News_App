import * as Constants from '../constants/contextStateConstants'

const { 
    idiomasDisponibles,
    paisesDisponibles,
    regionesDisponibles,
    categoriasDisponibles,
    fechasDisponibles,
    idiomasSeleccionados,
    paisesSeleccionados,
    regionesSeleccionadas,
    categoriasSeleccionadas } = Constants;

export const initialState = {
    articulos: {
        results: [],
        totalResults: undefined,
        totalResultsPerPage: "default",
        numOfPages: undefined,
        actualPage: undefined
    },
    firstInput: {
        firstTime: true,
        input: ''
    },
    url: '',
    isInHome: true,
    lenguajeInterface: {
        idiomasDisponibles,
        idiomaInterface: '',
    },
    busqueda: {
        idioma: {
            idiomasDisponibles,
            idiomasSeleccionados
        },
        pais: {
            paisesDisponibles,
            paisesSeleccionados
        },
        region: {
            regionesDisponibles,
            regionesSeleccionadas
        },
        fuente: {
            fuentesDisponibles: [],
            fuentesSeleccionadas: []
        },
        categoria: {
            categoriasDisponibles,
            categoriasSeleccionadas
        },
        fecha: {
            fechasDisponibles,
            fechasSeleccionadas: []
        }
    }
}


