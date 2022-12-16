import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("BagriCart");
    if (localCartData === []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialstate = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

console.log(initialstate.total_price);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate);


    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

//   to clear cart 
const clearCart = () =>{
    dispatch({ type: "CLEAR_CART"});
}


// increament nad dexrement 

const setDecreament = (id) =>{
    dispatch({type:"SET_DECREASE" ,payload:id})
}

const setIncreament = (id) =>{
    dispatch({type:"SET_INCREASE" ,payload:id})
}


    //    to add the data in local storage 
    useEffect(() => {
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type: "CART_TOTAL_PRICE"});
        localStorage.setItem("BagriCart", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{ ...state, addToCart, removeItem ,clearCart,setDecreament, setIncreament}}>
        {children}
    </CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };