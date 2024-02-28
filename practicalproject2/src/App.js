import './App.css';
import './Global.css'
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Container from '../src/components/Container';
import NavbarComponent from './components/NavbarComponent';

function App() {
  const [search, setSearch] = useState('')

  const handleSearch=(params)=>{
      setSearch(params)
}

  return (
    <div className="App">
     <NavbarComponent onSearch={handleSearch}/>
     <Container search={search}/>
    </div>
  );
}

export default App;