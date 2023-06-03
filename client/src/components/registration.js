import { useState } from "react";
import { Link } from "react-router-dom";

function Registration(){

    let [userName,setUserName] = useState('');
    let [userEmail,setUserEmail] = useState('');
    let [password,setPassword] = useState('');
    let [passwordConf,setPasswordConf] = useState('');
    
    let googleLogin = () =>{

    }
    
    let simpleRegistration = (e) => {

    }
    
    return(
        <>
            <div>Login Form</div>
            <form>
                <input name="userName" type="text" onChange={(e) => setUserName(e.target.value)}/>
                <input name="userEmail" type="text" onChange={(e) => setUserEmail(e.target.value)}/>
                <input name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <input name="passwordConf" type="passwordConf" onChange={(e) => setPasswordConf(e.target.value)}/>
                <button onClick={simpleRegistration}>
                    Sign Up
                </button>
            </form>
            <br/>
            <div>
                <Link to="/signin"> 
                    <button>
                        Sign In
                    </button>
                </Link>
                <button onClick={googleLogin}>
                    Google Login
                </button>
            </div>

        </>
    );
}

export default Registration;
