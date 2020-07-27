import React, { useContext } from 'react';
import { Context } from '../../initialValues'
import moment from 'moment'

import  iconoDiario from '../Articulo/iconos/flecha.png'
import 'moment/min/locales'

import './Articulo.css';


// const articulo = {
//     author: "Iván Cordovilla",
//     content: "Nicolás Maquiavelo lo sintetizó en una frase a la que, casi cinco siglos después de El Príncipe, se sigue recurriendo en el fútbol. ¿El fin? Ganar. ¿Los medios? ¿Los que sean? Aquello parece que pens… [+12491 chars]",
//     description: "24 de junio de 1990. Stadio delle Alpi, Turín, Italia. En el Brasil-Argentina de octavos de final del Mundial, Branco empieza a sentirse mal, mareado y confundido. Se buscan culpables.",
//     publishedAt: "2020-06-24T06:17:31Z",
//     source: {
//         id: null,
//         name: "As.com"
//     },
//     title: "El bidón de Branco, ¿verdad o leyenda?",
//     url: "https://as.com/futbol/2020/06/24/reportajes/1592979406_201752.html",
//     urlToImage: "https://as01.epimg.net/futbol/imagenes/2020/06/21/reportajes/1592764007_104584_1592765734_noticia_normal.jpg"

// }


const Articulo = ({ articulo }) => {

    const { lenguaje } = useContext(Context)

    const {
        content,
        description,
        publishedAt,
        source,
        title,
        url,
        urlToImage } = articulo;

    const isUrlOk = array => {
        let length = array.length;


        for (let i = 0; i < length; i++) {
            let elSiguiente = array[i] + 1;

            if (elSiguiente === array[i + 1]) {
                return false
            }
        }

        return true
    }

    const corregirLink = (link, array) => {
        let length = array.length;


        for (let i = 0; i < length; i++) {
            let elSiguiente = array[i] + 1;

            if (elSiguiente === array[i + 1]) {
                link = link.slice(array[i + 1] + 1)

                return `https://${link}`
            }
        }
    }

    const corregirUrl = link => {

        if (!link) {
            return `https://bitsofco.de/content/images/2018/12/broken-1.png`
        }

        let array = link.split('');
        let sacarHttps = 8;
        array = array.slice(sacarHttps)
        array = array.map((char, index) => char === '/' ? index : 'foo');
        array = array.filter(char => char !== 'foo');


        return isUrlOk(array) ? link : corregirLink(link.slice(sacarHttps), array)
    }

    const addDefaultImage = e => {
        e.target.src = `https://bitsofco.de/content/images/2018/12/broken-1.png`
    }

    const contenido = () => description === '' ? limpiador(content, '[') : description;

    const limpiador = (string, element) => {
        let contenido = string.split('');
        let index = contenido.findIndex(char => char === element);
        contenido = contenido.slice(0, index);

        return contenido.join('');
    }

    const corregirIdioma = idioma => {
        switch (idioma) {
            case 'zh':
                return 'zh-cn';
            case 'no':
                return 'nb'
            default:
                return lenguaje;
        }
    }

    const transformarFecha = () => {
        let fecha = limpiador(publishedAt, 'Z');
        fecha = moment(fecha, "YYYY-MM-DD hh:mm:ss")
            .locale(corregirIdioma(lenguaje))
        return fecha.format('LLLL')
    }


    return (
        <div className='articulo'>
            <div>
                <img
                    onError={addDefaultImage}
                    alt={title}
                    src={corregirUrl(urlToImage)}
                    className='articulo__imagen' />
                <p className='fechaImagen'>{transformarFecha()}</p>
            </div>
            <div className='fuente'>
                {source.name}
            </div>
            <div className='titulo'>
                {title}
            </div>
            <div className='descripcion'>
                {contenido()}
            </div>
            {/* </section> */}
            <div className='articulo__footer'>
                <a 
                className='verMas' 
                href={url} 
                target='_blank' 
                rel='noopener noreferrer'> 
                    Ver mas 
                    <img className='imagen-icono' src={iconoDiario} alt='newspaper'/>
                </a>
            </div>
        </div>
    )

}


export default Articulo


