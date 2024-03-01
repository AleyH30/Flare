import React, {useEffect, useState} from "react";
import CartItems from './0Components/CartItems/CartItems';
import Featured from "../0Components/Featured/Featured";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0,0)
    setIsLoading(false)
  }, [])

    return (
      <>
      {isLoading? null :
        (<div className="cart-page">
          <CartItems/>
          <Featured header={"Keep Shopping..."}/>
        </div>)}
      </>
      
    )
}

export default Cart