import { useEffect } from "react";

function Logout(){
    useEffect(() => {
        console.log("Token before == ",localStorage.getItem("token"));
        localStorage.removeItem("token");
        console.log("Token after == ",localStorage.getItem("token"));
        window.location.reload(); 
    });

    return(
        <>
            
        </>
    );
}

export default Logout;
