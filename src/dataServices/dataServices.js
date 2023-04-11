
import axios from 'axios';

var catalog = [ 
    {
        "title":"High Top",
        "category":"Men's",
        "price":39.99, 
        "image":"high-top.jpg",
        "_id":"0001"
    },

    {
        "title":"Nike Hike",
        "category":"Men's",
        "price":49.99, 
        "image":"nike-hike.jpg",
        "_id":"0002"
    },

    {
        "title":"Teal Racer",
        "category":"Men's",
        "price":39.99, 
        "image":"teal.jpg",
        "_id":"0003"
    },

    {
        "title":"Addidas Shell Toe",
        "category":"Men's",
        "price":59.99, 
        "image":"white-shell-toe.jpg",
        "_id":"0004"
    },

    {
        "title":"Ankle Boots",
        "category":"Women's",
        "price":49.99, 
        "image":"ankle-boots.jpg",
        "_id":"0005"
    },

    {
        "title":"Floral High Heels",  // update to "Floral" on Mongo db
        "category":"Women's",
        "price":59.99, 
        "image":"deco-heels.jpg",
        "_id":"0006"
    },

    {
        "title":"Glitter High Heels",
        "category":"Women's",
        "price":49.99, 
        "image":"glitter-heels.jpg",
        "_id":"0007"
    },

    {
        "title":"Canvas Flats",
        "category":"Women's",
        "price":29.99, 
        "image":"canvas-flats.jpg",
        "_id":"0008"
    },
];

class DataServices {
    async getProducts() {  //async must be on called function and also await to get response from server
        // if you need to start the front end without the backend, uncomment the line below
        //return catalog;

        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;

    // axios 
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }
}

export default DataServices;