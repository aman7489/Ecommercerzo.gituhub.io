import React from 'react'
import FormartPrice from './FormartPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../Context/CardContext';


const CartItem = ({ id, name, image, color, price, amount }) => {
   const {removeItem, setDecreament,setIncreament} = useCartContext();

    const setDecrease = (id) => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = (id) => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    return (
        <div className='cart_heading grid  grid-five-column'>
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image.url} alt={id}></img>
                    </figure>
                </div>

                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color: </p>
                        <div className="color-style" style={{ backgroundColor: color }}>
                        </div>
                    </div>
                </div>
            </div>

            {/* price  */}

            <div className="cart-hide">
                <p><FormartPrice price={price} /></p>
            </div>


            {/* Quantity  */}

            <CartAmountToggle
                amount={amount}
                setDecrease={() =>setDecreament(id)}
                setIncrease={() =>setIncreament(id)}
            />


            {/* subtotal  */}

            <div className="cart-hide">
                <p><FormartPrice price={price * amount}/></p>
            </div>
            <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
            </div>
        </div>
    )
}

export default CartItem
