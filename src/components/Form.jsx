import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Form = ({fName, lName, email, password, confirm, handleFirst, handleLast, handleEmail, handlePassword, handleConfirm, setFirstError, setLastError, setEmailError, setPasswordError, setConfirmError, addUser}) => {

const firstValidation = (e) => {
    handleFirst(e.target.value);
    if(e.target.value.length < 1) {
        setFirstError("Name is required");
    } else if(e.target.value.length < 3) {
        setFirstError("Title must be 3 characters or longer!");
    }
    else {
        setFirstError("");
    }
}
const lastValidation = (e) => {
    handleLast(e.target.value);
    if(e.target.value.length < 1) {
        setLastError("Name is required");
    } else if(e.target.value.length < 3) {
        setLastError("lastName");
    }
    else {
        setLastError("");
    }
}
const emailValidation = (e) => {
    handleEmail(e.target.value);
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(e.target.value) === true) {
        setEmailError("");
    } else{
        setEmailError("must use a valid email");
    }
}
    
const passwordValidation = (e) => {
    handlePassword(e.target.value);
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    mediumRegex.test(e.target.value) === true ? setPasswordError("") : setPasswordError("Password Not strong Enough");
}
const confirmValidation = (e) => {
    handleConfirm(e.target.value);
    if (password !== e.target.value) {
        setConfirmError("notmatch")
    } else {
        setConfirmError("match");
    }
}
    return (
      
        <div className="m-5 container">
            <form className="form-group" onSubmit={(e) => addUser(e)}>
                <input className="form-control col-8 m-2"
                    type="text"
                    name="firstName"
                    value={fName}
                    placeholder="First Name:"
                    onChange = {(e) => firstValidation(e)}
                />
                <input className="form-control col-8 m-2"
                    type="text"
                    name="lastName"
                    value={lName}
                    placeholder="First Name:"
                    onChange = {(e) => lastValidation(e)}
                />
                <input className="form-control col-8 m-2"
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email:"
                    onChange = {(e) => emailValidation(e)}
                />
                <input className="form-control col-8 m-2"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password:"
                    onChange = {(e) => passwordValidation(e)}
                />
                <input className="form-control col-8 m-2"
                    type="password"
                    name="confirm"
                    value={confirm}
                    placeholder="Confirm:"
                    onChange = {(e) => confirmValidation(e)}
                />
                <input className="form-control col-8 m-2"
                    type="submit"
                    value="submit"
                    />
            </form>
        </div>
    )
}
export default Form;