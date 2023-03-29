import{Provider} from 'react';
import GlobalContext from './globalContext';
import {useState} from 'react';

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "Jess", id: 1111});

    function addToCart(prod){
        console.log("global fn");

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);

        console.log(copy);
    }

    function removeFromCart() {
        console.log("global remove");
    }

    return <GlobalContext.Provider value={{   
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
    }}>{props.children}</GlobalContext.Provider>;
}

export default GlobalProvider;

// GlobalProvider allows access to  the context storage
// the impiltator 