
import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect} from "react";

function Product(props) {

    useEffect(function() {
        console.log("my product");
    }, []);

    return(
        <div className="product">
            <h4>{props.data.title}</h4>

            <img src={"/img/" + props.data.image} alt=""></img>

            <div className="total-price">
                <lable>Total</lable>
                <lable>Price</lable>    
            </div>

            <div className="total-price">
                <lable>$0.00</lable>
                <lable>${props.data.price}</lable>
            </div>
           
            <QuantityPicker></QuantityPicker>
            {/* <p className="prod-price">$39.99</p> */}
            
            <button type="button" className="btn btn-dark">Add</button>
        </div>
    );
}

export default Product;