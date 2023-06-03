import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home";
import Products from "./components/products";
import Login from "./components/login";
import ProductDetails from "./components/productDetails";
import Registration from "./components/registration";
import ErrorPage from "./components/errorPage";
import Logout from "./components/logout";
import {requireAuth} from "./utility/utility";

function App() {

  return (
    <Routes>
      <Route path="/" element={requireAuth() ? <Layout/> : <Navigate to="/signin"/>}>
        <Route index element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/signout" element={<Logout/>} />
      </Route>
      <Route path="/signin" element={!requireAuth() ? <Login /> : <Navigate to="/"/>}/>
      <Route path="/signup" element={!requireAuth() ? <Registration /> : <Navigate to="/"/> }/>
      <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
    );
}

export default App;
