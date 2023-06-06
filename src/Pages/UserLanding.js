import React from "react";
import Navbar from "../Components/Navbar";
import Dashboard from "./UserSections/Dashboard";
import Products from "./UserSections/Products";
import Cart from "./UserSections/Cart";
import { Route, Routes } from "react-router-dom";
import ViewProduct from "./UserSections/ViewProduct";

const UserLanding = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/viewProduct" element={<ViewProduct />}></Route>
      </Routes>
    </>
  );
};

export default UserLanding;
