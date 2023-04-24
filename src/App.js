import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import OnlineOrder from "./pages/OnlineOrder";
import Reservations from "./pages/Reservations";
import Home from "./pages/Home";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  // state for change background color
  const [color, setColor] = useState("white");

  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <Nav bgColor={changeColor} />
      <div style={{ background: color }}>
        <Routes>
          <Route path="/" element={<Home bgColor={changeColor} />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OnlineOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
