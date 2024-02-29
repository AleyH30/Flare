import React from "react";
import {Link} from 'react-router-dom';

const ColorButton = (props) => {

    return (
        <Link to={`/products/${props.id}/${props.iId}`}><button className={`color-select-btn ${props.colorBtnSelected === props.color? 'colorBtn-select' : ''}`} 
        style={{backgroundColor:props.color}} 
        onClick={() => props.func()}></button></Link>
    )
}

export default ColorButton