import React, {useState} from 'react';
import Product from '../../objects/Product/Product';

function AddProductForm (props) {
    
    const [category, setCategory] = useState("");
    const [picture, setPicture] = useState('');
    const [companyName, setCompanyName] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState(null);
    const [id, setId] = useState(null);

    // ids for different types of products:
    // Laptop : 1*, * is the counter of laptops that were created until now, and 1 is the id of the laptop type
    // Phone : 2*,
    // TV : 3*,

    function handleIdChange() {
        setId(e.target.value);
    }

    function handleCategory() {
        setCategory(e.target.value);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setPicture(file);
        }
    }

    function handleCompanyName(e) {
        e.preventDefault();
        setCompanyName(e.target.value);
    }

    function handleModel(e) {
        e.preventDefault();
        setModel(e.target.value)
    }

    function handlePrice(e) {
        e.preventDefault();
        setPrice(e.target.value)
    }

    function handleSave(e) {
        e.preventDefault();
        setProduct(new Product(category, id, picture, companyName, model, price));
        props.onAddProduct(product);
        setProduct(null);
    }
    
    return(
        <div>
            <input type = "text" onChange = {handleIdChange} value = {id}/>
            <select value ={category} onChange={handleCategory}>
                <option value="Laptop">Laptop</option>
                <option value="Phone">Phone</option>
                <option value="TV">TV</option>
            </select>
            <h1>Image Input</h1>
            <input type="file" accept="image/*" onChange={handleImageChange}/>
            <h2>Enter company name:</h2>
            <input type= "text" onChange = {handleCompanyName} value ={companyName}/>
            <h2>Enter model:</h2>
            <input type= "text" onChange = {handleModel} value ={model}/>
            <h2>Enter price:</h2>
            <input type= "text" onChange = {handlePrice} value ={price}/>
            <button onClick={handleSave}>save</button>
        </div>
    )
}

export default AddProductForm;