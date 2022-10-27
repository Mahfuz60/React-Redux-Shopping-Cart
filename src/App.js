import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  );
}

export default App;
