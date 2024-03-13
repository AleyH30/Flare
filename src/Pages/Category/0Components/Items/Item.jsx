import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';

const Item = (props) => {

    return (
        <div className="item-card">
            <Link to={`/products/${props.id}/${props.itemId}`}>
                <div className="item-card-img-container">
                    <img src={props.image} alt="" />
                </div>
                <p className="item-card-name">{props.name}</p>
                <div className="item-card-price"> ${props.price} </div>
            </Link>
        </div>
        
    )
}

export default Item