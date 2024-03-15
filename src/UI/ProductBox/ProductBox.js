import React from 'react';
import './ProductBox.css';

function ProductBox(props) {
    return (
        <div className = "box">
            {props.children}
        </div>
    )
}

export default ProductBox;