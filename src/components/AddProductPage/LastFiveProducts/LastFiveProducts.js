import React, {useState, useEffect} from 'react';
import ProductBox from '../UI/ProductBox/ProductBox';
import Product from '../objects/Product/Product';

function LastFiveProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const myList = JSON.parse(localStorage.getItem('productList'));

        const length = myList.length();

        if (myList && length > 0) {
            if (myList.length >= 5) {
                setProducts(myList.slice(-5));
            }
            else {
                setProducts(myList.slice(-length))
            }
        }
    })
    return(
        <div>
            <ProductBox>
                {products.map((product) => {
                    <div key = {product.getId()}>{product}</div>
                })}
            </ProductBox>
        </div>
    )
}

export default LastFiveProducts;