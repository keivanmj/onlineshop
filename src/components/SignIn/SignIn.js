import React, {useState} from 'react';
import User from '../../objects/User/User';

function SignIn(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [showError, setShowError] = useState(false)

    function usernameChange(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }  

    function passwordChange(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function passwordRepeatChange(e) {
        e.preventDefault();
        setPasswordRepeat(e.target.value);
    }


    function handleSaveClick(e) {
        e.preventDefault();
        if (password != passwordRepeat) {
            // setUsername("");
            // setPassword("");
            // setPasswordRepeat("");
            setShowError(true);
        }
        else {
            const user = new User(username, password)
        }
        // const user = new User(username, password)
        setUsername("");
        setPassword("");
        setPasswordRepeat("");
    }

    return(
        <div>
            <div>enter a user name: </div>
            <input type="text" class = "userName" value = {username} onChange = {usernameChange}/>
            <div>enter in a password: </div>
            <input type = "text" class = "password" value = {password} onChange = {passwordChange}/>
            <div>repeat the password you just entered: </div>
            <input type = "text" class = "passwordRepeat" value = {passwordRepeat} onChange = {passwordRepeatChange}/>
            <button onClick = {handleSaveClick}>Save</button>
            {showError && <div>password and the repeated password should be the same</div>}
        </div>
    )
}

export default SignIn;