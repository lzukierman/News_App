// HOME
export const GO_HOME = "GO_HOME";
export const LEAVE_HOME = "LEAVE_HOME";

// INTERFACE
export const CHANGE_INTERFACE = "CHANGE_INTERFACE";

// IDIOMA
export const ADD_IDIOMA = "ADD_IDIOMA";
export const REMOVE_IDIOMA = "REMOVE_IDIOMA";
export const ADD_ALL_IDIOMA = "ADD_ALL_IDIOMA";
export const REMOVE_ALL_IDIOMA = "REMOVE_ALL_IDIOMA";

// PAIS
export const ADD_PAIS = "ADD_PAIS";
export const REMOVE_PAIS = "REMOVE_PAIS";
export const ADD_ALL_PAIS = "ADD_ALL_PAIS";
export const REMOVE_ALL_PAIS = "REMOVE_ALL_PAIS";

// REGION
export const ADD_REGION = "ADD_REGION";
export const REMOVE_REGION = "REMOVE_REGION";
export const ADD_ALL_REGION = "ADD_ALL_REGION";
export const REMOVE_ALL_REGION = "REMOVE_ALL_REGION";

// FUENTE
export const ADD_FUENTE = "ADD_FUENTE";
export const REMOVE_FUENTE = "REMOVE_FUENTE";
export const ADD_ALL_FUENTE = "ADD_ALL_FUENTE";
export const REMOVE_ALL_FUENTE = "REMOVE_ALL_FUENTE";


// CATEGORIA
export const ADD_CATEGORIA = "ADD_CATEGORIA";
export const REMOVE_CATEGORIA = "REMOVE_CATEGORIA";
export const ADD_ALL_CATEGORIA = "ADD_ALL_CATEGORIA";
export const REMOVE_ALL_CATEGORIA = "REMOVE_ALL_CATEGORIA";

// HOME ACTIONS
export let goHome = () => {
    return {
        type: GO_HOME
    }
}

export let leaveHome = () => {
    return {
        type: LEAVE_HOME
    }
}

// INTERFACE ACTIONS

export let changeInterface = idioma => {
    return {
        type: CHANGE_INTERFACE,
        payload: {
            idioma
        }
    }
}


// IDIOMA ACTIONS

export let addIdioma = idioma => {
    return {
        type: ADD_IDIOMA,
        payload: {
            idioma
        }
    }
}


export let removeIdioma = idioma => {
    return {
        type: REMOVE_IDIOMA,
        payload: {
            idioma
        }
       
    }
}

export let addAllIdioma = () => {
    return {
        type: ADD_ALL_IDIOMA,
   
     }
}

export let removeAllIdioma = () => {
    return {
        type: REMOVE_ALL_IDIOMA
    }
}

// PAIS ACTIONS

export let addPais = pais => {
    return {
        type: ADD_PAIS,
        payload: {
            pais
        }
    }
}

export let removePais = pais => {
    return {
        type: REMOVE_PAIS,
        payload: {
            pais
        }
       
    }
}

export let addAllPais = () => {
    return {
        type: ADD_ALL_PAIS,
     }
}

export let removeAllPais = () => {
    return {
        type: REMOVE_ALL_PAIS
    }
}

// REGION ACTIONS

export let addRegion = region => {
    return {
        type: ADD_REGION,
        payload: {
            region
        }
    }
}

export let removeRegion = region => {
    return {
        type: REMOVE_REGION,
        payload: {
            region
        }
       
    }
}

export let addAllRegion = () => {
    return {
        type: ADD_ALL_REGION,
     }
}

export let removeAllRegion = () => {
    return {
        type: REMOVE_ALL_REGION
    }
}



// FUENTE ACTIONS

export let addFuente = fuente => {
    return {
        type: ADD_ALL_FUENTE,
        payload: {
            fuente
        }
    }
}

export let removeFuente = fuente => {
    return {
        type: REMOVE_FUENTE,
        payload: {
            fuente
        }
       
    }
}

export let addAllFuente = () => {
    return {
        type: ADD_ALL_FUENTE,
     }
}

export let removeAllFuente = () => {
    return {
        type: REMOVE_ALL_FUENTE
    }
}

// CATEGORIA ACTIONS
export let addCategoria = categoria => {
    return {
        type: ADD_ALL_CATEGORIA,
        payload: {
            categoria
        }
    }
}

export let removeCategoria = categoria => {
    return {
        type: REMOVE_CATEGORIA,
        payload: {
            categoria
        }
       
    }
}

export let addAllCategoria = () => {
    return {
        type: ADD_ALL_CATEGORIA,
     }
}

export let removeAllCategoria = () => {
    return {
        type: REMOVE_ALL_CATEGORIA
    }
}