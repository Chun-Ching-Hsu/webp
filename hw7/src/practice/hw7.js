import React from 'react'
import './hw7.css'
function LogIn(){
    return(
        <div className="login">
            <h1>CGU Login</h1>
            <form>
                <label type="text">User Name </label><br/>
                <input className='in' required/><br/><br/>
                <label type="text">Password</label><br/>
                <input className='in' type='password' required/><br/>
                <button id="sigin">登入</button>
            </form>
        </div>
    );
}

export default LogIn;