import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <>
      <div className="confirm-page">
        <h1 className="title">Little Lemon</h1>
        <h3 className="subtitle">Chicago</h3>
        <div className="book-message">
          <h2>You have successfully reserve a table.</h2>
          <p className="paragraph">Thanks for choosing us</p>
          <Link to="/">
            <button className="btn">Done</button>
          </Link>
        </div>
      </div>
    </>
  );
}
