
import Product from "../components/product";
import "./catalog.css";
import {useEffect, useState} from "react";
import DataServices from "../dataServices/dataServices";

function Catalog () {
    const[product,setProduct]=useState([]);
    const [category,setCategory]=useState([]);
    const [prodsToDisplay,setProdsToDisplay]=useState([]);

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
        let cat=["Men's","Women's"]; //create category men/women
        setCategory(cat);
        setProdsToDisplay(prods);
    }

    function filter(category) {
        console.log(category);
        let list=[];
        // find the products that match the category
        //and then add them to the list
        for(let i=0; i<product.length; i++) {
            let prod = product[i];
            if(prod.category === category){
                list.push(prod);
            }
            setProdsToDisplay(list);   
        }
    }

    function clearFilter() {
        setProdsToDisplay(product);

    }

    return(
        <div className="catalog">
            <h2>Check out our Shoes!</h2>
            <h5>We have {product.length} new shoes for you</h5>

            <button onClick={clearFilter} className="btn btn-success btn-filter">All</button>

            {category.map(c=> <button key= {c}onClick={()=>filter(c)} className="btn btn-success btn-filter">{c}</button>)}
            
           
            <div className="catalog-item">
                
                {prodsToDisplay.map((p) => 
                (<Product key={p._id} data={p}></Product>))}
                
            </div>
        </div>
    );
}
export default Catalog;
//{prodsToDisplay} line 55?
