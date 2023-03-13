import "./quantityPicker.css";
import {useState} from "react";

function QuantityPicker(props) {

    let [quantity, setQuantity] = useState(1); // State variable = no change

    function decrease() {
        if (quantity===1) return;
        let val = quantity -1;
        setQuantity(val);
        props.onChange(val); // notifying the parent component   
    }

    function increase() {
        let val = quantity +1;
        setQuantity(val);
        props.onChange(val);  
    }


    return(
        <div className="qt-picker">
            <div>
                <button disabled={quantity === 1} onClick={decrease}>{""} - {""} </button>
                <label> {quantity} </label>
                <button onClick={increase}> + </button>
            </div>
        </div>

    );
}

export default QuantityPicker;