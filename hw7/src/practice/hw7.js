import React from 'react'
import './hw7.css'
function LogIn(){
    return(
        <div className="login">
            <h1 className='head'>CGU Login</h1>
            <form>
                <label id="User">User Name </label>
                <input id = "User-in" type='text' required/><br/>
                <label id="PW">Password</label>
                <input id="PW-in" type='password' required/><br/>
                <button id="sigin">登入</button>
            </form>
        </div>
    );
}

export default LogIn;