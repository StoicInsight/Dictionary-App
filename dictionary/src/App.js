import Navigation from './components/Navigation/Navigation';
import Display from './components/Display/Display';
import SearchInput from './components/SearchInput/SeachInput'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SearchInput/>
      <Display/>
    </div>
  );
}

export default App;
