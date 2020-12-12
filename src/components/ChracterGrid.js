import React from 'react'
import Character from './Character'
import spinner from '../img/spinner.gif'

const ChracterGrid = ({ characters, isLoading }) => {
    return isLoading ? 
        ( <img 
            src={spinner} 
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt=''
         /> 
        ) : ( 
        <section className='cards'>
            {characters.map((item) => (
            <Character key={item.char_id} cast={item} />
            ))}
        </section>
        )
}


export default ChracterGrid
