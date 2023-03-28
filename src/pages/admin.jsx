import "./admin.css";
import {useState} from 'react';


function Admin() {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState ([]);

    function handleTextChange(e) {  //Calls event 
        const value = e.target.value;
        const name = e.name.value;
        // 1 DO NOT MODIFY STATE VARS
        // - Create a copy
        // - modify the copy
        // - set the copy back
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
       
    }


    function handleCouponTextChange(e) {  //Calls event 
        const value = e.target.value;
        const name = e.name.value;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
       
    }

    function saveProduct() {
        console.log(product);
    }

    function saveCoupon() {
        console.log(coupon)

    }
    
    return (
    <div className="admin-page">
        <h1 className="admin">Welcome to the Admin Page</h1>

        <main className="manage">
            <section className="add-prods">
                <h3>Add a Product</h3>
                <form>
                    <input name="title" onChange={handleTextChange} type="text" className="text" placeholder="Product Title" />

                    <input type="text" className="category" placeholder="Category" />
                    <input type="text" className="price" placeholder="Price $" />


                    <input type="img" className="image" placeholder="Image" />

                    {/* create <button type = "button">, save prod function ...onClick = (saveProduct), console.log */}
                    <button type = "button" onClick = "saveProduct">Save</button>


                    
                </form>
            </section>

            <section className="add-coupon-codes">
                <h3>Add a Coupon Code</h3>

                <form>
                    <input name="code" onChange={handleCouponTextChange} type="text" className="text" placeholder="Coupon Code" />

                    <input type="discount" className="category" placeholder="Discount" />
                  


                </form>
            </section>
        </main>
        
        
    </div>
    );
}
    

export default Admin; 