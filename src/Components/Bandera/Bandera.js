import React, { Fragment } from 'react'
import  China  from '../../svg/banderas/china(cn).svg'
import  France  from '../../svg/banderas/france(fr).svg'
import  Germany  from '../../svg/banderas/germany(de).svg'
import  Israel  from '../../svg/banderas/israel(il).svg'
import  Italy  from '../../svg/banderas/italy(it).svg'
import  Netherlands  from '../../svg/banderas/netherlands(nl).svg'
import  Norway  from '../../svg/banderas/norway(no).svg'
import  Portugal  from '../../svg/banderas/portugal(pt).svg'
import  Rusia  from '../../svg/banderas/russia(ru).svg'
import  SaudiArabia  from '../../svg/banderas/saudi-arabia(sa).svg'
import  UnitedKingdom  from '../../svg/banderas/united-kingdom(gb).svg'
import  Spain  from '../../svg/banderas/spain.svg'


const Bandera = ({lenguaje, seleccionada}) => {

    const handleIdioma = idioma => {
        switch (idioma) {
            case 'ar':
                return SaudiArabia;
            case 'de':
                return Germany;
            case 'en':
                return UnitedKingdom;
            case 'es':
                return Spain;
            case 'fr':
                return France;
            case 'he':
                return Israel;
            case 'it':
                return Italy;
            case 'nl':
                return Netherlands;
            case 'no':
                return Norway;
            case 'pt':
                return Portugal;
            case 'ru':
                return Rusia;
            case 'zh':
                return China;
            default:
                return null
        }
    }
    const banderaSeleccionada = {
        height: '28px',
        paddingRight: '11px'
    }

    const banderaDeLista = {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        paddingLeft: '22px'
    }

    const handleStyle = seleccionada => seleccionada? banderaSeleccionada : banderaDeLista; 


    return(
        <Fragment>
                <img 
                style={handleStyle(seleccionada)}
                src={handleIdioma(lenguaje)}
                alt={lenguaje}/>
        </Fragment>
    )
}

export default Bandera

