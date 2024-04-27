import React from "react";
import "../styles/Appointment.scss";
import TimeSelect from "./TimeSelect";

const Appointment = () => {
  return (
    <section className="appointment-section" id="booking">
      <div className="content">
        <div className="top-text">
          <h1>Book your Appointment Now</h1>
          <p>
            Walk-ins are always welcome at Tropical hair Salon! If you would
            like to reserve your visit, booking is easy and convenient. Book
            online, or give us a call at 314-401-3902.
          </p>
        </div>
        <form action="">
          <div className="inputs-container">
            <div className="form-group name-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group phone-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group time-group">
              <label htmlFor="date">Choose Date</label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="form-group time-group">
              <label htmlFor="time">Choose Time</label>
              <TimeSelect />
            </div>
            <div className="form-group service-group">
              <label htmlFor="service">Service</label>

              <select name="service" id="service">
                <option value="" hidden></option>
                <option value="test">test</option>
                <option value="test2">test2</option>
              </select>
            </div>
            <div className="form-group  notes-group">
              <label htmlFor="notes">Notes</label>
              <textarea name="notes" id="notes" cols="30" rows="3"></textarea>
            </div>
          </div>
          <button type="submit">BOOK NOW</button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
