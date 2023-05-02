import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Home from "./pages/Home";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <Nav />
        <div className="padding">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/reservations"
              element={<Reservations navigate={navigate} />}
            />
            <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
