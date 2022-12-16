// create a context
//provider
//consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
import { type } from "@testing-library/user-event/dist/type";
import singleProduct from "../components/singleProduct"
const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products";

const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading:false,
    singleProduct:{}
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await axios.get(url);
            const products = await response.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    };

    const getSingleproduct = async (url) => {
        dispatch({type:"SET_SINGLE_LOAADING"});
        try {
            const res = await axios.get(url);
            const SingleProducts = await res.data;
            dispatch({type: "SET_SINGLE_PRODUCT" , payload: SingleProducts});
        } catch (error) {
          dispatch({type:"SET_SINGLE_ERROR"});
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])
    return (
        <>
            <AppContext.Provider value={{ ...state, getSingleproduct }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

//custom Hook
// create karne se yah already globle har ek file me import ho jata hai
const UseProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, UseProductContext };