import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
                history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const signUp = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo'
                     src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
                     alt='amazon-logo'/>
            </Link>

            <div className='login__container'>

                <h1 className='login__container__h1'>Sign-in</h1>

                <form>
                    <h5 className='login__container__form__h5'>E-mail</h5>
                    <input className='login__container__form__input' type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5 className='login__container__form__h5'>Password</h5>
                    <input className='login__container__form__input' type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signinButton'>Sign-in</button>
                </form>

                <p className='login__container__p'>By signing-in you agree to Ayrton Salvador's AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button type='submit' onClick={signUp} className='login__registerButton'>Create your Amazon account</button>

            </div>

        </div>
    )
}

export default Login
