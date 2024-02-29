import React from "react";

const AltImage = (props) => {

    return (
        <div className="alt-img-container">
            <img className="alt-img" src={props.image} alt="" onClick={props.changeMainImage}/>
        </div>
        
    )
}

export default AltImage