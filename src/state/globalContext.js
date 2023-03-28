
import {createContext} from 'react';


/**
 * Should describe the data to be held in the context storage
 * it's Just a Description / NO IMPLEMENTATION HERE
 */

const globalContext = createContext({
    cart: [],
    user:{},

    addToCart: () => {},
    removeFromCart: () => {}

});

export default globalContext;