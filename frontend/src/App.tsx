import type { Component } from "solid-js";
import AppRoutes from "./routes/AppRoutes";
import { lazy } from "solid-js";
import Navbar from "./components/Navbar";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
