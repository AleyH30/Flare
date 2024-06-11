import React from "react";
import {useNavigate} from 'react-router-dom';
import "./AddedToCartModal.css";

const AddedToCartModal = (props) => {
    const Navigate = useNavigate()

    const ViewCart = async () => {
        await props.funcClose()
        Navigate("/cart")
    }

    return (
        <div className="atc-modal">
            <div className="atc-modal-bg-close" onClick={props.funcClose}></div>
            <div className="atc-modal-cont">
                <h2>Added To Cart</h2>
                <div className="atc-modal-contents">
                    <div className="atc-image-cont">
                        <img src={props.image} />
                    </div>
                    <div className="atc-right">
                        <p>{props.productName}</p>
                        <p>{String(props.color).toUpperCase()}</p>
                        <p>{props.size}</p>
                        <p>${props.price}.00</p>
                        <div className="atc-btns">
                            <button className="atc-btn" onClick={() => ViewCart()}>View Cart</button>
                            <button className="atc-btn" onClick={props.funcClose}>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddedToCartModal