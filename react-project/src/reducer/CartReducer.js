import { Alert } from "@mui/material";

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        let cartProduct;
        // tackle the existing product
        let existingProduct = state.cart.find((curElm) => curElm.id == id + color);
        console.log(existingProduct);

        if (existingProduct) {
            let updateProduct = state.cart.map((curElm) => {
                if (curElm.id == id + color) {
                    let newamount = curElm.amount + amount;
                    return {
                        ...curElm,
                        amount: newamount
                    }
                }
                else {
                    return curElm;
                }

            })

            return {
                ...state,
                cart: updateProduct
            }
        } else {

            cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0],
                price: product.price,
                max: product.stock,
                min: 0,

            }

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        } 
    }

    if(action.type === "CART_TOTAL_ITEM")
    {
        let updatedItemValue = state.cart.reduce((initialVal, curElem) => {
            let {amount} = curElem;

            initialVal = initialVal + amount;
            return initialVal;
        },0) 


        return {
            ...state,
            total_item:updatedItemValue,
        }
    }
    

    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((initialVal, curElem) => {
          let { price, amount } = curElem;
    
          initialVal = initialVal + price * amount;
          // 25000 + 0 = 25000
          // 10199 + 25000 = 121
    
          return initialVal;
        }, 0);
    
        return {
          ...state,
          total_price:total_price,
        };
        console.log(total_price)

      }
      
    // increament and decreament 

    if(action.type === "SET_INCREASE")
    {
        let updatedProduct  =  state.cart.map((curElm) => {
            if(curElm.id === action.payload)
            {
               let DecAmount;

               if(curElm.amount >= curElm.max)
               {
                DecAmount = curElm.max;
                alert("BHAI JYADA MAT LE");
               }else{
                DecAmount = curElm.amount + 1;
               }
               return{
                ...curElm,
                amount:DecAmount,
               }
            }else{
                return curElm;
            }
        })

        return {
            ...state, 
            cart:updatedProduct,
        }
    }

    if(action.type === "SET_DECREASE")
    {
        let updatedProduct  =  state.cart.map((curElm) => {
            if(curElm.id === action.payload)
            {
               let DecAmount;
               if(curElm.amount - 1 <= 0)
               {
                DecAmount = 1;
                alert("BHOSDIKE NAHI LENA TO REMOVE KAR DE");
               }else{
                DecAmount = curElm.amount - 1;
               }
               

               return{
                ...curElm,
                amount:DecAmount,
               }
            }else{
                return curElm;
            }
        })

        return {
            ...state, 
            cart:updatedProduct,
        }

    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curElm) => {
            return curElm.id !== action.payload;
        })
        return {
            ...state,
            cart: updatedCart,
        }
    }


    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }
    return state;
}


export default cartReducer;