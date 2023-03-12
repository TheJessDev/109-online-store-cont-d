import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer'; 

import Catalog from './pages/catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'; 



function App() {
  return (
    <div className="App">
      <h1>The Best Place to Shop</h1>
      <Navbar></Navbar>
      <Catalog></Catalog>

      
      
      
      <Footer></Footer>
    </div>
  );
}

export default App;

