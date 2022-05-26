import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import "./style/Register.css"
type Props = {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>
}
function Register({user, setUser}: Props) {
    const navigate = useNavigate();
    const [inputField, setInputField] = useState({
        fname: "",
        lname: "",
        phone_num: "",
        email: "",
        password: ""
    });
    function handelButtonClick(e: any){
        setUser(inputField.fname);
        navigate("/");
    }
    function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>){
        const name = e.target.name;
        setInputField(
            {...inputField,
            [name]: e.target.value}
        )

    }

    return (
        <div className="registerPage">

            <div className="registerForm">
            <img src="/images/Screenshot 2022-05-25 at 3.57.04 PM.png"/>
            <h1>Create an account</h1>
            
            <div className="data-div">
                <form>              
                    <div className="name-div">
                        <input 
                            type="text" 
                            name="fname" 
                            className="fname" 
                            placeholder="First name"
                            value={inputField.fname}
                            onChange={handleInputOnChange} 
                        />
                        <input 
                            type="text" 
                            name="lname" 
                            className="lname" 
                            placeholder="Last name"
                            value={inputField.lname}
                            onChange={handleInputOnChange}/>
                    </div>
                    <input 
                        type="text" 
                        name="phone_num" 
                        className="phone-num" 
                        placeholder="Phone Number"
                        value={inputField.phone_num}
                        onChange={handleInputOnChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        className="email" 
                        placeholder="Email address"
                        value={inputField.email}
                        onChange={handleInputOnChange} />
                    <input 
                        type="text" 
                        name="password" 
                        className="password" 
                        placeholder="Set password"
                        value={inputField.password}
                        onChange={handleInputOnChange} 
                        autoComplete="off"
                    />
                    <p>Already have an do.FileManager account?
                        <a href="/login">
                            <span className="login"> Log in</span>
                        </a>
                    </p>
                    <div className="btn-container">
                        <button 
                            className='payment-btn'
                            onClick={handelButtonClick}
                         >
                            <span>Create</span>
                        </button> 
                    </div> 
                </form>
            </div>
           </div> 
        </div>
    )
}

export default Register