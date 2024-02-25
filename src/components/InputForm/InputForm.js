import React, {useState} from 'react';
import './InputForm.css';

function InputForm(props) {

    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }   

    function handleSaveInput(e) {
        e.preventDefault();
        props.onSaveInput(inputValue);
        setInputValue("");
    }

    function handleDeleteInput(e) {
        e.preventDefault();
        props.onDeleteInput(inputValue);
        setInputValue("");
    }

    return (
        <div class = "inputForm">
            <input class = "inputBar" type = "text" value={inputValue} onChange={handleChange}></input>
            <button class = "saveButton" onClick = {handleSaveInput}>Save</button>
            <button class = "deleteButton" onClick = {handleDeleteInput}>Delete</button>
            {inputValue}
        </div>
    )
}

export default InputForm;