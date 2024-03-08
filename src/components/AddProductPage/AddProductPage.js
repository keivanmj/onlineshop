import React, {useState} from 'react';
import AddItemForm from '../AddItemForm/AddItemForm';
import Laptop from '../../objects/Laptop/Laptop';


function Products() {

    const [productList, setProductList] = useState([]);

    function addProductHandler(product) {
        setProductList((prevList) => [...productList, product]);
    }

    return (
        <div>
            <AddProductForm onAddProduct = {addProductHandler}/>
            <ul>
                {productList.map((product, index) => (
                    <li key = {index}>
                        <div class= "productDisplay">
                            {/* <div>{laptop.getPicture()}</div> */}
                            <div>{product.type}</div>
                            <img class = "productImage" key={index} src={URL.createObjectURL(product.getPicture())} alt={`Selected Image ${index}`} style={{ maxWidth: '100px', marginRight: '5px' }} />
                            <div>{product.getCompanyName()}</div>
                            <div>{product.getModel()}</div>
                            <div>{product.getPrice()}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products;