import React, {useState} from 'react';
import Laptop from '../../objects/Laptop/Laptop';

function AddLaptopForm (props) {
    
    const [picture, setPicture] = useState('')
    const [companyName, setCompanyName] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setPicture(file)
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
        const laptop = new Laptop(picture, companyName, model, price);
        props.onAddLaptop(laptop);
    }
    return(
        <div>
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

export default AddLaptopForm;