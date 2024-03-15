import React, {useState} from 'react';
import AddItemForm from '../../../AddItemForm/AddItemForm';
import Product from '../objects/Product/Product';
import ProductBox from '../../UI/ProductBox/ProductBox';
import LastFiveProducts from '../../../LastFiveProducts/LastFiveProducts';
import SeeAllItems from '../../../SeeAllItems/SeeAllItems';
import ProductDisplay from '../../UI/ProductDisplay/ProductDisplay'

function Products() {

    const [productList, setProductList] = useState([]);

    function addProductHandler(product) {
        setProductList((prevList) => [...productList, product]);
        localStorage.setItem('productList', JSON.stringify(productList));
    }

    return (
        <div>
            <AddProductForm onAddProduct = {addProductHandler}/>
            <LastFiveProducts/>
            <SeeAllItems/>
            <ul>
                {productList.map((product, index) => (
                    <li key = {index}>
                        <ProductDisplay product = {product}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products;