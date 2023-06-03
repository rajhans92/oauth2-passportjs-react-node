let requireAuth = (nextState, replace) =>{
    let token = localStorage.getItem('token');
    console.log("token ==>",token);
    if(!token)
      return false;

    return true;
}


export {requireAuth};