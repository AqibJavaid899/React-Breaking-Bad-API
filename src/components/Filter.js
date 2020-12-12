import React, {useState} from 'react'

const Filter = ({ querySetter }) => {
    const [query, setQuery] = useState('')

    const changeTrack = (value) => {
        setQuery(value)
        querySetter(value)
    }

    return (
        <div className='search'>
            <form>
                <input type='text' className='form-control' name='query' value={query} onChange={(e) => changeTrack(e.target.value)}  />
            </form>            
        </div>
    )
}

export default Filter
