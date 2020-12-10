import React, { useState } from "react";
import './SignIn.css'

function SignIn() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const signIn = (e) => {
        e.preventDefault()
    }
    return (
        <div className="signInPage">
            <h3>Register Page</h3>
            <form className="signInCard" >
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
        </div>
    );
}

export default SignIn;
