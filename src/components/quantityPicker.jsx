import "./quantityPicker.css";
import {useState} from "react";

function QuantityPicker() {

    let [quantity, setQuantity] = useState(1); // State variable = no change

    function decrease() {
        if (quantity===1) return;
        let val = quantity -1;
        setQuantity(val);
       // console.log("click decrease");
    }

    function increase() {
        let val = quantity +1;
        setQuantity(val);
       // console.log("click increase");
    }


    return(
        <div className="qt-picker">
            <div>
                <button disabled={quantity===1}onClick={decrease}> - </button>
                <label> {quantity} </label>
                <button onClick={increase}> + </button>
            </div>
        </div>

    );
}

export default QuantityPicker;