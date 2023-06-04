import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ErrorDiv } from "./errorDiv";
// import {authentication} from "./api/auth";

function Login(){

    let [user,setUser] = useState('');
    let [password,setPassword] = useState('');
    let [errorStatus,setErrorStatus] = useState(false);
    let [errorMessage,setErrorMessage] = useState('');

    let googleLogin = () =>{
        window.open("http://localhost:4000/auth/login","_self")
    }

    
    let simpleLogin = (e) => {
        e.preventDefault();
        
        // if(!user.length || !password.length){
        //     setErrorStatus(true);
        //     setErrorMessage("Input Field should not blank!");
        //     return false;            
        // }

        // let userDetail = authentication({user,password});
        // if(userDetail.status){
        //     localStorage.setItem('token', "tested string");
        //     window.location.href = '/'    
        // }else{
        //     setErrorStatus(userDetail.status);
        //     setErrorMessage(userDetail.message);
        // }
    }

    return(
        <>
            <div>Login Form</div>
            <form>
                <div>
                    <input name="user" type="text" required onChange={(e) => { setUser(e.target.value); setErrorStatus(false); setErrorMessage("");}}/>
                    
                </div>
                <div>
                    <input name="password" type="password" required onChange={(e) => { setPassword(e.target.value); setErrorStatus(false); setErrorMessage("");}}/>
                </div>
                <div>{errorStatus && <ErrorDiv message={errorMessage}/>}</div>
                <div>
                    <button onClick={simpleLogin}>
                        Sign In
                    </button>
                </div>
            </form>
            <br/>
            <div>
               <Link to="/signup"> 
                    <button>
                        Sign Up
                    </button>
                </Link>
                <button onClick={googleLogin}>
                    Google Login
                </button>
            </div>

        </>
    );
}

export default Login;
