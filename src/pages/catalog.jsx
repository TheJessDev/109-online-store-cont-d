
import Product from "../components/product";
import "./catalog.css";
import {useEffect, useState} from "react";
import DataServices from "../dataServices/dataServices";

function Catalog () {
    const[product,setProduct]=useState([]);

// when component load, do something ( useEffect )
    useEffect(function() {
        console.log("component");
        loadCatalog();
    },[]);


    function loadCatalog() { // get the products from the service
        let service= new DataServices();
        let prods = service.getProducts();
        console.log(prods);
        setProduct(prods);

    }

    return(
        <div className="catalog">
            <h2>Hello check out our stuff</h2>
            <h5>We have {product.length} new products for you</h5>
           
            <div className="catalog-item">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
}
export default Catalog;