import data from "../Data";
import Card from "./Card";
import { useState } from "react";

export default function Main() {
  const card = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <main>
      <div className="specials-div">
        <h2 className="specials-header">This week specials!</h2>
        <button className="btn menu-btn">Online Menu</button>
      </div>
      <div className="cards">{card}</div>
    </main>
  );
}
