import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/"  element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route  path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
