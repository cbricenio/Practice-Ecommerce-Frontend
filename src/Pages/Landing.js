import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./HomeSections/Home";
import ProductDetails from "./HomeSections/ProductDetails";
import Products from "./HomeSections/Products";
import Reports from "./HomeSections/Reports";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Dashboard from "./HomeSections/Dashboard";

const Landing = () => {
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("token")
  );

  console.log(authenticated);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  const navigateLogin = () => {
    window.location.href = "/";
  };

  if (!authenticated) {
    navigateLogin();
  } else {
    return <>Home</>;
  }
};

export default Landing;
