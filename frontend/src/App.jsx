import "./App.css";
import { Navbar, Footer } from "./components";
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
