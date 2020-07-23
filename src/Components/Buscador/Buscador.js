import React, { useState } from 'react'
import SendArticles from '../SendArticles/SendArticles'

const Buscador = () => {
    
    const [search, setSearch] = useState('');
    const [isSearching,setIsSearching] = useState(false)



    const handleInput = (e) => setSearch(e.target.value)

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(search)
        if(search !== ''){
            setIsSearching(true)
        } else {
            alert('Ingrese su busqueda')
        }
    }

    const handleKeyPress = (e) => {
        return(
        e.key === 'enter' ?
        handleSearch(e) :
        null
        )
    }
    
    return(
        <div>
            {isSearching ? 
            (<SendArticles inputValue={search}/>) :
            (<form>
            <input 
                type='text' 
                onChange={handleInput}
                onKeyPress={handleKeyPress}/>
            <button  onClick={handleSearch}>
                send
            </button>
            </form>)
            }
        </div>
        
    )
}


export default Buscador