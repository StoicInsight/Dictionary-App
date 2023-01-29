import Navigation from './components/Navigation/Navigation';
import Display from './components/Display/Display';
import SearchInput from './components/SearchInput/SeachInput'
import './App.css'
import { useState, useEffect } from 'react'


function App() {

  const [ searchInput, setSearchInput ] = useState('')
  const [ display, setDisplay ] = useState([])

  const updateSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const searchDictionary = (e) => {
    e.preventDefault()

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
      .then(response => response.json())
      .then(data => console.log(data[0]))

  }   
  
  return (
    <div className="App">
      <Navigation/>
      <SearchInput search={updateSearch} submit={searchDictionary}/>
      <Display/>
    </div>
  );
}

export default App;
