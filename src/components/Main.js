import data from "../Data";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Main() {
  const card = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <main>
      <div className="specials-div">
        <h2 className="specials-header">This week specials!</h2>
        <Link to="/Menu">
          <button className="btn menu-btn">Online Menu</button>
        </Link>
      </div>
      <div className="cards">{card}</div>
    </main>
  );
}
