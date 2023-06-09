import { Link } from "react-router-dom";

export default function Nav() {
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
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link>Order Online</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
