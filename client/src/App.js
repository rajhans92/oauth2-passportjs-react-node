import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home";
import Products from "./components/products";
import Login from "./components/login";
import ProductDetails from "./components/productDetails";
import Registration from "./components/registration";
import ErrorPage from "./components/errorPage";
import Logout from "./components/logout";

function App() {
  let [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function fetchData() {
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
            
            setIsLogin(responseJson.status);    

        }catch(error){
          console.log("error",error);
          setIsLogin(false);
        }
      };
      fetchData();
  },[]);

  return (
    <Routes>
      <Route path="/" element={isLogin ? <Layout/> : <Navigate to="/signin"/>}>
        <Route index element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/signout" element={<Logout/>} />
      </Route>
      <Route path="/signin" element={!isLogin ? <Login /> : <Navigate to="/"/>}/>
      <Route path="/signup" element={!isLogin ? <Registration /> : <Navigate to="/"/> }/>
      <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
    );
}

export default App;
