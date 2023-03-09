
import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect} from "react";

function Product() {

    useEffect(function() {
        console.log("my product");
    }, []);
    return(
        <div className="product">
            <h4>Product Name</h4>

            <img src="https://images.unsplash.com/photo-1548100721-15f0e76035c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="product"></img>
           
            <QuantityPicker></QuantityPicker>
            <p className="prod-price">$39.99</p>
            
            <button type="button" className="btn btn-dark">Add</button>
        </div>
    );
}
export default Product;