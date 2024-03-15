import React, {useState} from 'react';
import Product from '../objects/Product/Product';

function ProductDisplay(props) {

    const [product, setProduct] = useState("");

    setProduct(props.product);

    return (
        <div>
            <div class= "productDisplay">
                <div>{product.getType()}</div>
                <img class = "productImage" key={index} src={URL.createObjectURL(product.getPicture())} alt={`Selected Image ${index}`} style={{ maxWidth: '100px', marginRight: '5px' }} />
                <div>{product.getCompanyName()}</div>
                <div>{product.getModel()}</div>
                <div>{product.getPrice()}</div>
            </div>
        </div>
    )
}

export default ProductDisplay;