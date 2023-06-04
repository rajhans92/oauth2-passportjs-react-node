import { useEffect } from "react";

function Logout(){
    useEffect(() => {
        console.log("Token before == ",localStorage.getItem("token"));
        localStorage.removeItem("token");
        console.log("Token after == ",localStorage.getItem("token"));
        window.open("http://localhost:4000/auth/logout","_self"); 
    });

    return(
        <>
            
        </>
    );
}

export default Logout;
