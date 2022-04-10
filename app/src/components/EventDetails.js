import React, { Component, useState } from "react";

export default function EventDetails() {
  const [Date, setDate] = useState();

  return (
    <div className="container my-3" style={{ width: "30%" }}>
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="date" className="visually-hidden">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-dark mb-3">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
