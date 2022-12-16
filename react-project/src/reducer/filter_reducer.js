
const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((curElem) => curElem.price);
          console.log(priceArr);
      
            // 1way
            // console.log(Math.max.apply(null, priceArr));
      
            // let maxPrice = priceArr.reduce(
            //   (initialVal, curVal) => Math.max(initialVal, curVal),
            //   0
            // );
            // console.log(
            //   "🚀 ~ file: filterReducer.js ~ line 16 ~ filterReducer ~ maxPrice",
            //   maxPrice
            // );
      
            let maxPrice = Math.max(...priceArr);
            console.log(
              "🚀 ~ file: filterReducer.js ~ line 23 ~ filterReducer ~ maxPrice",
              maxPrice
            );
      
            return {
              ...state,
              filter_products: [...action.payload],
              all_products: [...action.payload],
              filters: { ...state.filters, maxPrice, price: maxPrice },
            };
      
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortData = [...action.payload];

            const { filter_products } = state;
            let tempSortData = [...filter_products];


            const sortingProducts = (a, b) => {
                if (state.sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (state.sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempSortData.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortData,
            }


        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color ,price} = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.name.toLowerCase().includes(text);
                })
            }

            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.category === category;
                })
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.company === company;
                })
            }

            if (color !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) => {
                    return curElm.colors.includes(color)
                })
            }
             if(price === 0)
             {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>{
                    return curElem.price == price;
                })
             }
            if(price){
                tempFilterProduct = tempFilterProduct.filter((curElm) =>{
                   return curElm.price <= price;
                })
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        case "CLEAR_FILTERS":
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    category:"all",
                    company:"all",
                    color:"all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0,
                }
            }

        default:
            return state;
    };
}

export default FilterReducer;