import React, { useContext }from "react";
import './CartItems.css';
import { StoreContext } from "../../../../Context/StoreContext";

const CartItems = (props) => {
    const {getTotalCartAmount, products, cartItems, adjustCartQuantity} = useContext(StoreContext);
    
    return (
        <div className="cartitems">
            <div className="cartitems-left-container">
                <div className="cartitems-title">
                    <p>Shopping Bag</p>
                </div>
                <hr />
                <div className="cartitems-cart-items-container">
                    {cartItems.map((cartItem, ciIdx) => {
                        let product = products.find((producte) => producte.id === cartItem.productId);
                        let item = product.items.find((iteme) => iteme.id === cartItem.itemId)

                        return  ( 
                        <div key={ciIdx}>
                                <div className="cartitems-cart-item-container">
                                    <div className="res-wrapper-1">
                                        <div className="res-wrapper-2">
                                            <img src={item.img[0]} alt="" className="carticon-product-icon" />
                                            <div className="cart-item-info-1">
                                                <p>{product.name}</p>
                                                <br />
                                                <p>Color: {String(item.color).toUpperCase()}</p>
                                                <p>Size: {cartItem.size}</p>
                                            </div>
                                        </div>
                                        <div className="res-wrapper-3">
                                            <p>${product.price}</p>
                                            <select className="cartitems-quantity" name="quantity" id="quantity" value={cartItem.quantity} onChange={(e) => adjustCartQuantity(product.id, item.id, cartItem.size, Number(e.target.value))}>
                                                <option value={0}>0</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                            </select>
                                            <p>${product.price * cartItem.quantity}</p>
                                        </div>
                                    </div>
                                    <button className='cartitems-remove-icon' onClick={() => { adjustCartQuantity(product.id, item.id, cartItem.size, 0) }} alt="">Remove</button>
                                </div>
                            <hr />
                        </div>)
                    })}
                </div>
            </div>
            <div className="cartitems-right-container">
                <div className="cartitems-checkout-container">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-checkout-total">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-checkout-total">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-checkout-total">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <div className="cartitems-promocode-container">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cartitems-promobox-container">
                            <input type="text" placeholder="promo code" />
                            <button className="cartitems-promobox-btn">Submit</button>
                        </div>
                    </div>
                    <button className="cartitems-checkout-btn">CHECKOUT</button>
                </div>

            </div>
        </div>

    )
}

export default CartItems