import React, {useState} from 'react';
import "./SearchBar.css"

// const products = [
//     "toothbrush",
//     "toothpaste",
//     "mouthwash",
//     "bicycle"
// ]

function SearchBar(props) {
    
    const [searchValue, setSearchValue] = useState("");

    // fhandleSaveButtonClick

    function handleChange(e) {
        setSearchValue(e.target.value);
    }
    function handleClear() {
        setSearchValue("");
    }

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue);
    })

    const shouldDisplayClearButton = searchValue.length > 0;
    return (
        <div>
            <input value = {searchValue} onChange = {handleChange} id = "searchValue"/>
            <button id = "searchButton">Search</button>
            {shouldDisplayClearButton && <button onClick = {handleClear}>clear</button>}
            <ul>
                {filteredProducts.map((product) => {
                    return <li key = {product}>{product}</li>
                })}
            </ul>
        </div> 
    )
}

export default SearchBar;