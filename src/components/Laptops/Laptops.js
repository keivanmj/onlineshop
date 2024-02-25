import React, {useState} from 'react';
import AddLaptopForm from '../AddLaptopForm/AddLaptopForm';
import Laptop from '../../objects/Laptop/Laptop';


function Laptops() {

    const [laptopList, setLaptopList] = useState([])

    function addLaptopHandler(laptop) {
        setLaptopList((prevList) => [...laptopList, laptop])
    }

    return(
        <div>
            <AddLaptopForm onAddLaptop = {addLaptopHandler}/>
            <ul>
                {laptopList.map((laptop, index) => (
                    <li key = {index}>
                        <div class= "laptopDisplay">
                            {/* <div>{laptop.getPicture()}</div> */}
                            <img class = "laptopImage" key={index} src={URL.createObjectURL(laptop.getPicture())} alt={`Selected Image ${index}`} style={{ maxWidth: '100px', marginRight: '5px' }} />
                            <div>{laptop.getCompanyName()}</div>
                            <div>{laptop.getModel()}</div>
                            <div>{laptop.getPrice()}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Laptops;