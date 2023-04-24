import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { fetchAPI, submitAPI } from "./API";
import { Link, useNavigate } from "react-router-dom";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [times, setTimes] = useState([]);

  const formSubmit = (data) => {
    submitAPI(data);
  };

  // handle date change
  const handleChange = (e) => {
    setTimes(e.target.value);
  };

  // display times for days
  let initialTimes = fetchAPI(new Date(times));

  const availableTimes = initialTimes.map((time) => {
    return <option>{time}</option>;
  });

  let navigate = useNavigate();

  const confirmBook = () => {
    if (formSubmit) {
      navigate("/confirmed-booking");
    }
  };

  return (
    <>
      <h2 className="reserve-header">Reserve a table</h2>
      <form className="reserve-form" onSubmit={handleSubmit(confirmBook)}>
        <label htmlFor="res-date">Choose date</label>
        <div className="form-control">
          <input
            name="date"
            type="date"
            id="res-date"
            {...register("date", { required: true })}
            onChange={handleChange}
          />
          {errors.date && errors.date.type === "required" && (
            <p className="errorMsg">This field is required</p>
          )}
        </div>
        <label htmlFor="res-time">Choose time</label>
        <div className="form-control">
          <select
            name="time"
            id="res-time "
            {...register("time", { required: true })}
          >
            <option></option>
            {availableTimes}
          </select>
          {errors.time && errors.time.type === "required" && (
            <p className="errorMsg">This field is required</p>
          )}
        </div>
        <label htmlFor="guests">Number of guests</label>
        <div className="form-control">
          <input
            name="guests"
            type="number"
            placeholder=""
            min="1"
            max="10"
            id="guests"
            {...register("guests", { required: true })}
          />
          {errors.guests && errors.guests.type === "required" && (
            <p className="errorMsg">This field is required</p>
          )}
        </div>
        <label htmlFor="occasion">Occasion</label>
        <div className="form-control">
          <select
            name="occasion"
            id="occasion"
            {...register("occasion", { required: true })}
          >
            <option></option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && errors.occasion.type === "required" && (
            <p className="errorMsg">This field is required</p>
          )}
        </div>
        <input
          type="submit"
          value="Make Your Reservation"
          className="reserve-submit btn"
        />
      </form>
    </>
  );
}
