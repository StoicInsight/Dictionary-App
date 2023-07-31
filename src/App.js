import Navigation from './components/Navigation/Navigation';
import Display from './components/Display/Display';
import SearchInput from './components/SearchInput/SeachInput';
import './App.css';
import { useState, useEffect, useContext } from 'react';

function App() {

  const [ searchInput, setSearchInput ] = useState('')
  const [ getData, setGetData ] = useState([])
  const [ display, setDisplay ] = useState([])

  const updateSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const searchDictionary = async(e) => {
    e.preventDefault()
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
      .then(response => response.json())
      .then(data => setGetData(data))
  }   

  
  return (
    <div className="App">
      <Navigation/>
      <SearchInput search={updateSearch} submit={searchDictionary}/>
      <Display display={getData}/>
    </div>
  );
}

export default App;
