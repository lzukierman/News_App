import React from 'react'


const articulo = {
    author: "Iván Cordovilla",
    content: "Nicolás Maquiavelo lo sintetizó en una frase a la que, casi cinco siglos después de El Príncipe, se sigue recurriendo en el fútbol. ¿El fin? Ganar. ¿Los medios? ¿Los que sean? Aquello parece que pens… [+12491 chars]",
    description: "24 de junio de 1990. Stadio delle Alpi, Turín, Italia. En el Brasil-Argentina de octavos de final del Mundial, Branco empieza a sentirse mal, mareado y confundido. Se buscan culpables.",
    publishedAt: "2020-06-24T06:17:31Z",
    source: {
        id: null,
        name: "As.com"
    },
    title: "El bidón de Branco, ¿verdad o leyenda?",
    url: "https://as.com/futbol/2020/06/24/reportajes/1592979406_201752.html",
    urlToImage: "https://as01.epimg.net/futbol/imagenes/2020/06/21/reportajes/1592764007_104584_1592765734_noticia_normal.jpg"

}


const Articulo = () => {

    return(
        <article className='articulo'>
            <img className='articulo__imagen'/>
            <section className='articulo__contenido'>
            <h3> La fuente</h3>
            <h1> Title</h1>
            <p> Description</p>
            </section>
            <section className='articulo__footer'>
                <p>Fecha</p>
                <p>Ver mas</p>
                {
                // content
                // Leer mas -> url
                }
            </section>
        </article>
    )

}

export default Articulo





