import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-div">
        <h1 className="title">Little Lemon</h1>
        <h3 className="subtitle">Chicago</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/reservations">
          <button className="btn header-btn">Reserve a Table</button>
        </Link>
      </div>
      <img
        src="../images/restauranfood.jpg"
        alt="Servings"
        className="header-img"
      />
    </header>
  );
}
