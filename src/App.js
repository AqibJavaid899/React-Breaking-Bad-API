import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import CharacterGrid from './components/ChracterGrid'
import axios from 'axios'
import Filter from './components/Filter'


const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetching = async () => {
      const items = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${search}`)
      console.log(items.data)

    setCharacters(items.data)
    setIsLoading(false)
    }
    fetching()
    
  },[search])

  return (
    <div className="container">
      {/* Step 1: Creating the Header */}
      <Header />

      {/* Create the Form to filter the Result while searching */}
      <Filter querySetter={(value) => setSearch(value)} />
      
      {/* Step 2: Calling the API to return all the Characters */}
      <CharacterGrid characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
