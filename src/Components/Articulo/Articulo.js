import React from 'react';
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


const Articulo = ({articulo}) => {

    const {
        content,
        description, 
        publishedAt,
        source,
        title,
        urlToImage} = articulo;

    const isUrlOk = array =>{
        let length = array.length;


        for(let i = 0; i < length;i++){
            let elSiguiente = array[i] + 1;

            if(elSiguiente === array[i + 1]){
                return false
            }
        }

        return true
    }
     
    const corregirLink = (link, array) => {
        let length = array.length;


        for(let i = 0; i < length; i++){
            let elSiguiente = array[i] + 1;

            if(elSiguiente === array[i + 1]){
                link = link.slice(array[i + 1] + 1)

                return `https://${link}`
            }
        }
    }

    const corregirUrl = link => {
        
        if(!link){
            return `https://bitsofco.de/content/images/2018/12/broken-1.png`
        }

        let array = link.split('');
        let sacarHttps = 8;
        array = array.slice(sacarHttps)
        array = array.map((char, index) => char === '/' ? index : 'foo');
        array = array.filter(char => char !== 'foo');


        return isUrlOk(array)? link : corregirLink(link.slice(sacarHttps), array)
    }

    const addDefaultImage = e => {
        e.target.src = `https://bitsofco.de/content/images/2018/12/broken-1.png`
    }

    const contenido = () => description === '' ? limpiarContenido() : description;


    const limpiarContenido = () => {
        //limpiar content y sacar a partir del '['
        let contenido = content.split('');
        let index = contenido.findIndex(char => char === '[');
        contenido = contenido.slice(0,index);

        return contenido.join('');
    }

    return(
        <article className='articulo'>
            <img 
            onError={addDefaultImage}
            alt={title}
            src={corregirUrl(urlToImage)}
            className='articulo__imagen'/>
            {/* <section className='articulo__contenido'> */}
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
            <section className='articulo__footer'>
                <div className='mitad'>
                    {publishedAt}
                </div>
                <div className='mitad no-border'>
                    Ver mas
                </div>
            </section>
            {console.log(corregirUrl(urlToImage))}
        </article>
    )

}

export default Articulo


