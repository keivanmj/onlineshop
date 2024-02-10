import React, {useState} from 'react';
import './InputForm.css';

function InputForm(props) {

    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }   

    function handleSaveInput() {
        props.onSaveInput(inputValue);
        setInputValue("");
    }

    return(
        <div class = "inputForm">
            <input class = "inputBar" type = "text" value={inputValue} onChange={handleChange}></input>
            <button class = "saveButton" onClick = {handleSaveInput}>Save</button>
            {inputValue}
        </div>
    )
}

export default InputForm;