import { Component, createSignal } from "solid-js";
import { Routes, Route, Navigate, Router } from "@solidjs/router";
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import Search from "../pages/Search";
import Info from "../pages/Info";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";

const AppRoutes: Component = () => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  // Authorization check function
  const checkAuth = () => {
    // Perform your authentication check here
    // Set isLoggedIn to true if user is logged in or signed up
    setIsLoggedIn(true); // Placeholder logic, replace with your own implementation
  };
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/search" element={<Search />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default AppRoutes;
