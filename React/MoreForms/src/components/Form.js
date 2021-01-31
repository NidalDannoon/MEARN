import React, { useState } from 'react';

const Form =(props) => {
    const {inputs,setInputs} = props;
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        if(inputs.firstName.length !== 0){
            if(inputs.firstName.length < 3) {
                setFirstNameError("First name must be at least 2 characters")
            } else {
                setFirstNameError("")
            }
        }
        if(inputs.lastName.length !== 0){
            if(inputs.lastName.length < 3){
                setLastNameError("Last name must be at least 2 characters")
            } else {
                setLastNameError("")
            }
        }
        if(inputs.email.length !== 0) {
            if(inputs.email.length < 5) {
                setEmailError("Email must be at least 5 characters")
            } else {
                setEmailError("")
            }
        }
        if(inputs.password.length !== 0){
            if(inputs.password.length < 8) {
                setPasswordError("Password must be at least 8 characters")
            } else {
                setPasswordError("")
            }
        }
        if(inputs.confirmPassword.length !== 0){
            if (inputs.confirmPassword === inputs.password) {
                setConfirmPasswordError("")
            } else {
                setConfirmPasswordError("Passwords do not match")
            }
        }
    }

    return (
        <div>
            <form>
				<div className="form-group">
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" onChange ={onChange}/>
				</div>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{firstNameError}</p>
                    : ''
                }
				<div className="form-group">
				<label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange ={onChange}/>
				</div>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{lastNameError}</p>
                    : ''
                }
				<div className="form-group">
				<label htmlFor="email">Email</label>
                <input type="email" name="email" onChange ={onChange}/>
				</div>
                {
                    emailError ?
                    <p style={{color:'red'}}>{emailError}</p>
                    : ''
                }
				<div className="form-group">
				<label htmlFor="password">Password</label>
                <input type="password" name="password" onChange ={onChange} />
				</div>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p>
                    : ''
                }
				<div className="form-group">
				<label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange ={onChange}/>
				</div>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{confirmPasswordError}</p>
                    : ''
                }
            </form>
        </div>
    );
};
export default Form;