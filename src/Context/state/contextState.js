import * as Constants from '../constants/contextStateConstants'

const { 
    idiomasDisponibles,
    paisesDisponibles,
    regionesDisponibles,
    fuentesDisponibles,
    categoriasDisponibles,
    fechasDisponibles,
    idiomasSeleccionados,
    paisesSeleccionados,
    regionesSeleccionadas,
    categoriasSeleccionadas } = Constants;

const initialState = {
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
            fuentesDisponibles,
            fuentesSeleccionadas
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