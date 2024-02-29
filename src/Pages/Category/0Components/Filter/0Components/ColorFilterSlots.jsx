import React from 'react';

const ColorFilterSlots = (props) => {
    let color = String(props.color);
    let colorUp = color[0].toUpperCase() + color.slice(1).toLowerCase();
    return (
        <div className="input-row">
            <input type="checkbox" id={color} name={color} onChange={props.function("color", color)} />
            <label htmlFor={color}> {colorUp}</label>
        </div>
    )
}

export default ColorFilterSlots