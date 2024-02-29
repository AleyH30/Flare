import React from "react";
import CartItems from './0Components/CartItems/CartItems';
import Featured from "../0Components/Featured/Featured";

const Cart = () => {

    return (
        <div className="cart-page">
          <CartItems/>
          <Featured header={"Keep Shopping..."}/>
        </div>
    )
}

export default Cart