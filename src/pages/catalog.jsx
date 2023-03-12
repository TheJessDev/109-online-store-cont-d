
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
        // console.log(prods);
        setProduct(prods);
        let cat=["Shoes"]; //create a clothing category or men/women/kids...
        setCategory(cat);
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

    return(
        <div className="catalog">
            <h2>Hello check out our stuff</h2>
            <h5>We have {product.length} new products for you</h5>
            {category.map(c=> <button onClick={()=>filter(c)} className="add-btn btn btn-success btn-filter">{c}</button>)}
           
            <div className="catalog-item">
                
                {/* {prodsToDisplay*/product.map((p)=> 
                (<Product key={p.id} data= {p}></Product>) )}
            </div>
        </div>
    );
}
export default Catalog;
