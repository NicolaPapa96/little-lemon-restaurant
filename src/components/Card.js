export default function Card(props) {
  return (
    <div className="card-menu">
      <img src={props.item.image} alt={props.item.title} />
      <h4 className="card-header">{props.item.title}</h4>
      <p className="card-description">{props.item.description}</p>
      <p className="card-order">
        Order a delivery
        <img src="../images/Scooter.jpg" className="delivery-img" />
      </p>
    </div>
  );
}
