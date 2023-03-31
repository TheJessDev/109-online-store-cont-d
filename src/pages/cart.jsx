import"./prodInCart.css";
import { useContext} from 'react';
import globalContext from '../state/globalContext';
import ProductInCart from './prodInCart';



function Cart(){
    const getNumOfProducts = useContext(globalContext).getNumOfProducts;
    const cart = useContext(globalContext).cart;

    function getTotalToPay() {
        let total = 0;
        for (let i=0; i< cart.length; i++) {
            let prod =cart[i];
            total = total + prod.quantity * prod.price;
        }
        return total.toFixed(2);
    }

    return (
        <div className="Cart">
            
            <h2>Are you ready to check out?</h2>
            <h6 className="cart-total">You have {getNumOfProducts()} items in your cart</h6>


            <div className="parent">
                <div className="products">
                    {cart.map((prod) => (
                    <ProductInCart key={prod._id} data={prod}></ProductInCart>))}
                </div>

                <div className="total">
                    <h4>Total</h4>

                    <h4>${getTotalToPay()}</h4>

                    <button className="btn btn-primary">Pay Now</button>
                </div>
            </div>

        </div>
    );
}





export default Cart;


/**
 * create ProductInCart cmp
 * Cart should map into ProductInCart instead of h3
 * pass the data to ProductInCart
 * 
 * ProductInCart should receive the props
 * and display the information
 * 
 */