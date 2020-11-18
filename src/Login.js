import React,{useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {auth } from './firebase'
import './Login.css';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push('/')
        })
        .catch(err => alert(err.message));
        

    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((authobject) => {
                console.log(authobject);
                if(authobject){
                    history.push('/');
                }
            })
            .catch(err => alert(err.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src={require('./amazon_logo.png')} alt="logoimage" />
            </Link>

            <div className ="login_container">
                <h1>Sign In</h1>
                
                <form>
                    <h5>Email</h5>
                    <input type="text" value = {email}
                    onChange={e =>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value = {password}
                    onChange={e =>setPassword(e.target.value)}  />

                    <button type="submit" className="login_signInButton" onClick ={signIn}>Sign In</button>
                </form>
                <p>
                    By Signing in you agree to Amazon's Condition of use & sale.
                    Please see our Privacy Notice, our Cookie Notice and our Interest- Based Ads.
                    Notice.
                </p>
                <button className="login_registerButton" onClick ={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
