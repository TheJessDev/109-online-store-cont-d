import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer'; 

import Catalog from './pages/catalog';
import Home from "./pages/home";
import About from "./pages/about";

import Cart from "./pages/cart";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'; 

import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>The Best Online Shoe Shop</h1>
      <h5>Sale going on Now!</h5>

      <BrowserRouter>

      <Navbar></Navbar>

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/catalog' element={<Catalog/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     </Routes>
      
      
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

