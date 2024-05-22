import React, {useState} from "react";
import './LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState('Login');
    const [formData, setFormData] = useState({
        fullname:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <div className="loginsignup-page">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?
                    <div className='form-group'>
                        <label htmlFor='fullname'>Full Name:</label>
                        <input id='fullname' name='fullname' value={formData.fullname} onChange={changeHandler} type="text" placeholder="Your Name" />
                    </div>
                    :<></>}
                    <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input id='email' name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input id='password' name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                    </div>
                </div>
                <button>Continue</button>
                {state==="Sign Up"?
                <>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                <p className="loginsignup-login">
                    Already have an account? <span onClick={()=>{setState("Login")}}>Log In</span>
                </p>
                </>
                :
                <p className="loginsignup-login">
                    Create an account? <span onClick={()=>{setState("Sign Up")}}>Register</span>
                </p>}
                
            </div>
        </div>
    )
}

export default LoginSignup