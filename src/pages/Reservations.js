import BookingForm from "../components/BookingForm";

export default function Reservations() {
  return (
    <div className="reservations-page">
      <img src="../images/table.jpg" alt="table" className="table-img" />
      <BookingForm />
    </div>
  );
}
