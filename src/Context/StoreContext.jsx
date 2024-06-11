import React, {createContext, useState} from 'react';
import products from "../Components/Assets/Data/ProductsData";

export const StoreContext = createContext(null);

const getDefaultCart= ()=>{
    let cart = [];
    return cart;
}

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (productId, itemId, itemSize, color) => {
        let itemFound = false;
        
        const newCI = cartItems.map((cartItem) => {
            if (cartItem.productId === productId && cartItem.itemId === itemId && cartItem.size === itemSize) {
                itemFound = true;
                cartItem.quantity += 1;
            }
            return cartItem
        })     
        if (itemFound === false){
            setCartItems((prev)=>[...prev, {
                productId: productId,
                itemId: itemId,
                color: color,
                size: itemSize,
                quantity: 1
            }])
        }
        else {
            setCartItems(newCI)
        }
    }
    const adjustCartQuantity = (productId, itemId, itemSize, quantity) => {
        const newCI = cartItems.map((cartItem) => {
            if (cartItem.productId === productId && cartItem.itemId === itemId && cartItem.size === itemSize){
                cartItem.quantity = quantity;
            }
            return cartItem
        })
        const filterNewCI = newCI.filter((ci)=> ci.quantity !== 0)
        setCartItems(filterNewCI)
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        cartItems.forEach((cartItem) => {
            let product = products.find((product) => product.id === cartItem.productId)
            totalAmount += product.price * cartItem.quantity; 
        })
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;

        cartItems.forEach((cartItem) => {
            totalItem += cartItem.quantity;
        })
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, products, cartItems, addToCart, adjustCartQuantity};

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider