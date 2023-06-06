import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import Layout from "./components/Layout";
import Home from "./components/home";
import Products from "./components/products";
import Login from "./components/login";
import ProductDetails from "./components/productDetails";
import Registration from "./components/registration";
import ErrorPage from "./components/errorPage";
import Logout from "./components/logout";
import { authLoginAction } from "./slice/authSlice";

function App() {
  // let [isLogin, setIsLogin] = useState(false);

  let isLogin = useSelector((state) => state.auth.isLogin);
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authLoginAction());
  },[dispatch]);

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
