import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import OnlineOrder from "./pages/OnlineOrder";
import Reservations from "./pages/Reservations";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OnlineOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
