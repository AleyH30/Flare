import React from "react";
import './FeaturedCard.css';
import {Link} from 'react-router-dom';

const FeaturedCard = (props) => {

    return (
        <div className="feat-card">
            <Link to={`/products/${props.id}/${props.itemId}`}>
                <div className="feat-card-img-container"><img src={props.image} alt="" /></div>
            <p className="feat-card-name">{props.name}</p>
            <div className="feat-card-price"> ${props.price} </div></Link>
        </div>
        
    )
}

export default FeaturedCard