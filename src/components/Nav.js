import { Link } from "react-router-dom";

export default function Nav({ bgColor }) {
  const changeColor = () => {
    bgColor("#495E57");
  };

  return (
    <nav>
      <img src="../images/Logo.jpg" alt="logo" className="logo" />
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations" onClick={changeColor}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
