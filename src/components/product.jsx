
import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect,useState} from "react";

function Product(props) { 
    const [quantity, setQuantity] = useState(1);

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

    return(
        <div className="product">
            <h4>{props.data.title}</h4>

            <img src={"/img/" + props.data.image} alt=""></img>

            <div className="total-price">
                <lable>Price ${props.data.price.toFixed(2)}</lable>    
                <lable>Total ${getTotal()}</lable>
            </div>

          
            
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            
            
            <button type="button" className="add-btn btn btn-dark">Buy</button>
            
        </div>
    );
}

export default Product;