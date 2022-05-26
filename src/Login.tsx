import React from 'react'
import "./style/Register.css"

function Register() {

   
    function handleOnChange() {

    }
    
    return (
        <div className="registerPage">

            <div className="registerForm">
            <img src="/images/Screenshot 2022-05-25 at 3.57.04 PM.png"/>
            <h1>Log In</h1>
            
            <div className="data-div">
                <form>              
                    <input type="email" name="email" className="email" placeholder="Email address"
                        onChange={handleOnChange} />
                    <input type="text" name="password" className="password" placeholder="Set password"
                        onChange={handleOnChange} autoComplete="off"
                    />
                    <p>Don't have do.FileManager account?
                        <a href="/login">
                            <span className="login">Register</span>
                        </a>
                    </p>
                    <div className="btn-container">
                        <button className='payment-btn' >
                            <span>Login</span>
                        </button> 
                    </div> 
                </form>
            </div>
           </div> 
        </div>
    )
}

export default Register