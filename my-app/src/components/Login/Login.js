import React from 'react';
import logo from '../images/logo.png';
import './Login.css';

function Login() {
    return (
        <div class="app">
            <div class="flex-container">
                <img src={logo} />
                <h1>Log-in</h1>
                <h3>Username</h3>
                <div>
                    <input type="text" name="username" />
                </div>
                <h3>Password</h3>
                <div class="password">
                    <input type="text" name="password" />
                </div>
                <div class="memory">
                    <input type="checkbox" id="remember" name="remember" />
                    <label for="remember" class="memory">Remember</label>
                    <a href>Forgot Password?</a>
                </div> 
                    <button>Log-in</button>
            </div>
        </div>    
    );
}

export default Login;