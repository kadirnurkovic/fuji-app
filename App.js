import logo from './logo.svg';
import './App.css';
import Data from './components/ApiPull/ApiPull'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Data ></Data>
    <Routes>
      <Route path='/' element={<Navbar></Navbar>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route ></Route>
    </Routes>
    </div>
    
  );
}

export default App;
