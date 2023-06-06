import { useState } from "react";

import "./App.css";
// import Header from "./components/header";
// import Footer from "./components/Footer";
import { Navbar, Footer } from "./components";
import { HomeScreen } from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
