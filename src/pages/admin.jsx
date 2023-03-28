import "./admin.css";
import {useState} from 'react';


function Admin() {
    const [product, setProduct] = useState({});
    console.log("Admin");

    function handleTextChange(e) {  //Calls event 
        const value = e.target.value;
        const name = e.name.value;

        product[name] = value;
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
       
    }

    function saveProduct() {
        console.log(product);
    }
    
    return (
    <div className="admin-page">
        <h1 className="admin">Welcome to the Admin Page</h1>

        <main className="manage">
            <section className="add-prods">
                <h3>Add a Product</h3>
                <form>
                    <input name="title" onChange={handleTextChange} type="text" className="text" placeholder="Product Title" />

                    <input type="text" className="text" placeholder="Price $" />

                    <input type="text" className="text" placeholder="Category" />

                    <input type="img" className="text" placeholder="Load Image" />

                    {/* create <button type = "button">, save prod function ...onClick = (saveProduct), console.log */}
                </form>
            </section>

            <section className="add-coupon-codes">
                <h3>Add a Coupon Code</h3>
            </section>
        </main>
        
        
    </div>
    );
}
    

export default Admin; 