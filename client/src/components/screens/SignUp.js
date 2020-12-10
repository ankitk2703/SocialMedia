import React, { useState } from 'react'
import './SignUp.css'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = (e) => {
        e.preventDefault()
    }
    return (
        <div className="signUpPage">
            <h3>Login Page</h3>
            <form className="signUpCard" >
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='login__signUpButton'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp
