import React, { useContext } from 'react';
import moment from 'moment'
import { StateContext } from '../../App'
import iconoDiario from '../Articulo/iconos/flecha.png'
import 'moment/min/locales'

import styles from './Articulo.module.css';


const Articulo = ({ articulo }) => {
    const { state } = useContext(StateContext)

    const { lenguajeInterface } = state

    const { idiomaInterface } = lenguajeInterface

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

    const contenido = () => {
        if(description === '' || description === null){
            if(content === '' || content === null){
                return "More info in Ver Mas"
            } else {
                return limpiador(content, '[');
            }
        } else{
            return description
        }
    }

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
                return idiomaInterface;
        }
    }

    const transformarFecha = () => {
        let fecha = limpiador(publishedAt, 'Z');
        fecha = moment(fecha, "YYYY-MM-DD hh:mm:ss")
            .locale(corregirIdioma(idiomaInterface))
        return fecha.format('LLLL')
    }


    return (
        <div className={styles.articulo}>
            <div>
                <img
                    onError={addDefaultImage}
                    alt={title}
                    src={corregirUrl(urlToImage)}
                    className={styles['articulo__imagen']} />
                <p className={styles['fechaImagen']}>{transformarFecha()}</p>
            </div>
            <div className={styles.fuente}>
                {source.name}
            </div>
            <div className={styles.titulo}>
                {title}
            </div>
            <div className={styles.descripcion}>
                {contenido()}
            </div>
            {/* </section> */}
            <div className={styles['articulo__footer']}>
                <a
                    className={styles['verMas']}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'>
                    Ver mas
                    <img className={styles['imagen-icono']} src={iconoDiario} alt='newspaper' />
                </a>
            </div>
        </div>
    )

}


export default Articulo


