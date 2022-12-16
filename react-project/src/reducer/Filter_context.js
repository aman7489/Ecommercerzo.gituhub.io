import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductContext } from "../Context/ProductContext";
import reducer from "../reducer/filter_reducer"

const FilterContext = createContext();

const initialstate = {
    filter_products: [],
    all_products: [],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
        text:"",
        category:"all",
        company:"all",
        color:"all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const FilterContextProvider = ({ children }) => {

    const { products } = UseProductContext();
    const [ state, dispatch ] = useReducer(reducer,initialstate);

    // to set grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
      };

    const setListView = () => {
        return dispatch({type:"SET_LIST_VIEW"});
    };

    // sorting function 

    const sorting = (event) =>{
        let userValue = event.target.value;
         dispatch({type:"GET_SORT_VALUE", payload:userValue});
    }
//update the filter values
const  updateFilterValues = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({type:"UPDATE_FILTER_VALUE" , payload:{name, value}})
}
//to clear the filter

const clearfilters = () =>{
    dispatch({type:"CLEAR_FILTERS"})
}

//    sort the product 

useEffect(() =>{
    dispatch({type:"FILTER_PRODUCTS"})
     dispatch({type:"SORTING_PRODUCTS", payload:products});
    },[products,state.sorting_value,state.filters])


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products])

    return (
    <FilterContext.Provider value={{ ...state, setGridView,setListView,sorting,updateFilterValues,clearfilters}}>
        {children}
    </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}