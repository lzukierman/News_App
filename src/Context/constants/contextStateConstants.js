//IDIOMAS
export const idiomasDisponibles = {
    ar: 'عرب',
    de: 'Deutsche',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    he: 'עִברִית',
    it: 'Italiano',
    nl: 'Nederlands',
    no: 'Norsk',
    pt: 'Português',
    ru: 'Pусский',
    zh: '中文'
}

let idiomas = Object.keys(idiomasDisponibles);

export let idiomasSeleccionados = idiomas.map(lenguaje => {
    return ({
        idioma: lenguaje,
        seleccionado: false
    })
})

//PAISES
export const
    paisesDisponibles = [
        'ae', 'ar', 'at', 'au',
        'be', 'bg', 'br', 'ca',
        'ch', 'cn', 'co', 'cu',
        'cz', 'de', 'eg', 'fr',
        'gb', 'gr', 'hk', 'hu',
        'id', 'ie', 'il', 'in',
        'it', 'jp', 'kr', 'lt',
        'lv', 'ma', 'mx', 'my',
        'ng ', 'nl ', 'no', 'nz',
        'ph', 'pl', 'pt', 'ro',
        'rs', 'ru', 'sa', 'se',
        'sg', 'si ', 'sk', 'th',
        'tr', 'tw', 'ua', 'us',
        've', ' za']

export let
    paisesSeleccionados = paisesDisponibles.map(pais => {
        return ({
            pais,
            seleccionado: false
        })
    })

//REGIONES
export const
    regionesDisponibles = [
        'EU',
        'EFTA',
        'CARICOM',
        'PA',
        'AU',
        'USAN',
        'EEU',
        'AL',
        'ASEAN',
        'CAIS',
        'CEFTA',
        'NAFTA',
        'SAARC'
    ]

export let
    regionesSeleccionadas = regionesDisponibles.map(region => {
        return ({
            region,
            seleccionado: false
        })
    })



//CATEGORIAS
export const
    categoriasDisponibles = [
        'business', 'entertainment',
        'general', 'health',
        'science', 'sports',
        'technology'
    ]
export let
    categoriasSeleccionadas = categoriasDisponibles.map(categoria => {
        return ({
            categoria,
            seleccionado: false
        })
    })


//FECHAS
const miliSecDay = 86400000;
const miliSecMonth = miliSecDay * 30;
let hoy = Date.now();
let haceUnMes = hoy - miliSecMonth;
let dateHoy = new Date(hoy);
let dateHaceUnMes = new Date(haceUnMes);

hoy = dateHoy.toString();
haceUnMes = dateHaceUnMes.toString()

export const fechasDisponibles = [
    hoy, haceUnMes
]





