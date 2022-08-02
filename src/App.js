import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Order from './Order'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
