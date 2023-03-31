import "./navbar.css";

import {Link} from 'react-router-dom';
import { useContext} from 'react';
import globalContext from '../state/globalContext';


function Navbar() { 
  const getNumOfProducts = useContext(globalContext).getNumOfProducts;


   


    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="nav navbar-brand" to="/">
          The Shoe Store
        </Link>
        <button className="nav navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="nav navbar-toggler-icon"></span>
        </button>
        <div className="nav collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" nac navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            
            <Link className="btn btn-outline-success" to="/cart">
              <span className="badge text-bg-light"> {getNumOfProducts()}</span>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Link>
          </form>
        </div>
      </div>
    </nav>
    
    );
}
export default Navbar;  