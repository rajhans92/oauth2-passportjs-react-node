import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
    isLogin: false,
    user:{

    }
}

let authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        authLogin : (state, action) =>{
            state.isLogin = action.payload.status;
            state.user = action.payload.user;
        }
    }

});

const { authLogin } = authSlice.actions;

let authLoginAction = () => {
    return async (dispatch) =>{
        try{
            let responseJson = await fetch("http://localhost:4000/auth/login/success", {
              method: "POST",
              credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
              }
            }).then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("failed to authenticate user");
            })
            
            dispatch(authLogin({status:responseJson.status, user:{}}));

        }catch(error){
          console.log("error",error);
          dispatch(authLogin({status:false, user:{}}));
        }
    };
}


export { authLoginAction };
export default authSlice.reducer;