import { screen, render, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("show message error", async () => {
  render(<BookingForm />);

  fireEvent.submit(screen.getByRole("button"));

  expect(await screen.findAllByRole("alert")).toHaveLength(4);
});
