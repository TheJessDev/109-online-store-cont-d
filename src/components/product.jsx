
import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect, useState, useContext} from "react";
import globalContext from '../state/globalContext';

function Product(props) { 
    const [quantity, setQuantity] = useState(1);
    const addToCart = useContext(globalContext).addToCart;

    useEffect(function () {
        console.log("my product");
    }, []);

    function onQuantityChange(qty) {
        console.log("new value: " + qty);
        setQuantity(qty);
    }

    function getTotal() {
        let total=props.data.price*quantity;
        return total.toFixed(2);
    }

    function handleAddClick() {
        console.log("Adding to cart");

        let prodForCart = {...props.data};
        prodForCart.quantity = quantity;
        console.log (prodForCart);

        // send the product to global cart
        addToCart(prodForCart);
    }


    return(
        <div className="catalog-product">
            <h4>{props.data.title}</h4>

            <img src={"/img/" + props.data.image} alt=""></img>

            <div className="total-price">
                <lable>Price ${props.data.price.toFixed(2)}</lable>    
                <lable>Total ${getTotal()}</lable>
            </div>

          
           
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        
            <button onClick={(handleAddClick)} type="button" className="add-btn btn btn-dark">Buy</button>
            
        </div>
    );
}

export default Product;