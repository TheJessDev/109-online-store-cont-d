import "./admin.css";
import {useState} from 'react';


function Admin() {
    
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState ({});

    function handleTextChange(e) {  // the e Calls Event info 
        const value = e.target.value;  // target specifies where event takes place
        const name = e.name.value;  // value is the new text in input field, info is saved in useState variable

            // RULES
        // 1 DO NOT MODIFY STATE VARS
        // - Create a copy
        // - modify the copy
        // - set the copy back
        let copy = {...product};  // ... = spread operator, used for deep copies (grabs all the info in product)
        copy[name] = value;
        setProduct(copy);
       
    }


    function handleCouponTextChange(e) {  // the e Calls Event 
        const value = e.target.value;
        const name = e.name.value;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
       
    }

    function saveProduct() {  // finish creating function
        console.log(product);

        //const p = new product;
        //setProduct(p);

    }

    function saveCoupon() {  // finish creating function
        console.log(coupon);

    }
    
    return (
    <div className="admin-page">
        <h2 className="admin">Admin Page</h2>

        <main className="manage">

            <section className="add-prods">
                <h4>Add a Product</h4>
                <form>
                    <div className="mb-3">

                        <div className="input-save">
                            <input name="title" onChange={handleTextChange} type="text" className="enter-input" placeholder="Enter Product Title" />
                        </div>

                        <div className="input-save">
                            <input name="category" onChange={handleTextChange} type="text" className="enter-input" placeholder="Enter Category" />
                        </div>

                        <div className="input-save">
                            <input name="price" onChange={handleTextChange} type="number" className="enter-input" placeholder="Enter Price $" />
                        </div>

                        <div className="input-save">
                            <input name="image" onChange={handleTextChange} type="img" className="enter-input" placeholder="Enter Image File" />
                        </div>

                        <div className="input-save">
                            <button className="save-btn" type = "button" onClick = {saveProduct}>Save</button>
                        </div>

                    </div>  
                </form>
            </section>


            <section className="add-coupon-codes">
                <h4>Add a Coupon Code</h4>
                <form>
                    <div className="mb-3">

                        <div className="input-save">
                            <input name="code" onChange={handleCouponTextChange} type="text" className="enter-input" placeholder="Enter Coupon Code" />
                        </div>
                        <div className="input-save">
                            <input name="discount" onChange={handleCouponTextChange} type="number" className="enter-input" placeholder="Enter Discount %" />
                        </div>
                        <div className="input-save">
                            <button className="save-btn" type ="button" onClick = {saveCoupon}>Save</button>
                        </div>
                    </div>
                </form>
            </section>

        </main>
        
        
    </div>
    );
}
    

export default Admin; 