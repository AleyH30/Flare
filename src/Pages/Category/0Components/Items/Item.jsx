import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';

const Item = (props) => {

    return (
        <div className="item-card">
            <Link to={`/products/${props.id}/${props.itemId}`}><img src={props.image} alt="" /></Link>
            <p className="item-card-name">{props.name}</p>
            <div className="item-card-price"> ${props.price} </div>
        </div>
        
    )
}

export default Item